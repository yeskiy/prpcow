import typeAssert, { DataObject } from "../utils/typeAssert.util";
import { FunctionResolver } from "./index";
import { ModifiedWebSocket } from "../utils/websocketModifier.util";
import { ModelResolver } from "../modelResolvers";
import { Logger, LoggerOptions } from "../utils/logger.util";
import { IdResolver } from "../idResolvers";
import InvertedWeakMap from "./utils/invertedWeakMap.util";
import { FunctionResolverFunction } from "../types";

const constants = {
    errors: {
        CONNECTION_LOST: "CONNECTION_LOST",
    },
};

export default class WeakFunctionPool extends FunctionResolver {
    private isSessionActive: boolean = true;

    static typeName() {
        return "WeakFunctionPool";
    }

    private readonly timeoutSize: number;

    private readonly oursFunctions: { [x: string]: Function };

    private readonly theirsFunctionsWaitPool: {
        [x: string]: Function;
    };

    private theirsFunctionsIds: string[];

    private theirsFunctions: InvertedWeakMap;

    private findUnusedTimeout: any;

    constructor(options: {
        session: ModifiedWebSocket;
        sendMessage: (message: any) => any;
        deSerializeObject: ModelResolver["deserialize"];
        serializeObject: ModelResolver["serialize"];
        uuid: IdResolver["gen"];
        logger: LoggerOptions | boolean;
    }) {
        super(options);
        this.oursFunctions = {};
        this.theirsFunctions = new InvertedWeakMap();
        this.theirsFunctionsIds = [];
        this.theirsFunctionsWaitPool = {};
        this.timeoutSize = 600 * 1000;

        this.findUnusedTimeout = setTimeout(
            function findUnused() {
                this.findUnusedFunctions();
                if (this.isSessionActive) {
                    this.findUnusedTimeout = setTimeout(
                        findUnused.bind(this),
                        this.timeoutSize,
                    );
                }
            }.bind(this),
            this.timeoutSize,
        );
        this.logger.silly("Created findUnusedTimeout with", {
            timeoutSize: this.timeoutSize,
        });
        // If connection was closed, we need to reject all promises
        this.options.session.addEventListener("close", ({ code, reason }) => {
            Object.values(this.theirsFunctionsWaitPool).forEach((item) => {
                const err = new Error(
                    `Session Connection was closed with code "${code}" ${
                        reason ? `and message: "${reason}"` : ""
                    }`,
                );
                // @ts-ignore
                err.type = constants.errors.CONNECTION_LOST;
                // @ts-ignore
                err.__from = "theirs";
                item(err);
            });
            this.isSessionActive = false;
            clearTimeout(this.findUnusedTimeout);
        });
        this.logger.silly("Mounted event listener on close event");

        this.logger.silly("Ready to use");
    }

    // eslint-disable-next-line class-methods-use-this
    private messageBuilder = (type: string, requestId: string, data: any) => ({
        type,
        requestId,
        data,
    });

    // eslint-disable-next-line class-methods-use-this
    private baseMessageBuilder = (type: string, data: any) => ({
        type,
        data,
    });

    // eslint-disable-next-line class-methods-use-this
    executeFunctionCatcher = async (executor: Function, ...params: any[]) => {
        try {
            return executor(...params);
        } catch (e) {
            e.__from = "theirs";
            e.type = "unexpected";
            return e;
        }
    };

    public async onMessage(message: DataObject) {
        this.logger.debug("WFP onmessage", message);
        typeAssert(
            message,
            {
                clear: () => {
                    this.logger.silly("Clear message received");
                    message.data.ids.map((id: string) =>
                        Reflect.deleteProperty(this.oursFunctions, id),
                    );
                    this.logger.debug(`Cleared ${message.data.ids} functions`);
                },
                execute: async () => {
                    this.logger.silly("Execute message received");
                    try {
                        await this.options.sendMessage(
                            this.messageBuilder(
                                "executeResponse",
                                message.requestId,
                                {
                                    id: message.data.id,
                                    payload: await this.options.serializeObject(
                                        await this.executeFunctionCatcher(
                                            await this.getOurs(message.data.id),
                                            ...(await this.options.deSerializeObject(
                                                message.data.payload,
                                                this.setTheirs.bind(this),
                                            )),
                                        ),
                                        this.setOurs.bind(this),
                                    ),
                                },
                            ),
                        );
                    } catch (e) {
                        this.logger.warn(
                            `Error on execute function (function id: ${message.data.id}, request id: ${message.requestId})`,
                            e,
                        );
                    }
                },
                executeResponse: async () => {
                    this.logger.silly(
                        `Got Response on execute (${message.requestId})`,
                    );
                    this.theirsFunctionsWaitPool[message.requestId](
                        await this.options.deSerializeObject(
                            message.data.payload,
                            this.setTheirs.bind(this),
                        ),
                    );
                    Reflect.deleteProperty(
                        this.theirsFunctionsWaitPool,
                        message.requestId,
                    );
                    this.logger.silly(
                        `Remove from wait pool (${message.requestId})`,
                    );
                },
            },
            () => {
                this.logger.silly(
                    `Bad type ${message.type} received. Throw an error`,
                );
                throw new Error(
                    `Could not understand request. ${
                        message.type
                            ? `Type is "${message.type}"`
                            : "No type presented"
                    }`,
                );
            },
        );
    }

    async setOurs(executor: Function) {
        const ident = await this.options.uuid();
        this.oursFunctions[ident] = executor;
        return ident;
    }

    async setTheirs(id: string) {
        this.logger.silly("setTheirs", id);
        this.theirsFunctions.set(id, async (...params: any[]) => {
            const { stack } = new Error();
            return new Promise(async (resolve, reject) => {
                this.logger.debug(
                    `Theirs function wrapper called (${id}) with params:`,
                    params,
                );
                const requestId = await this.options.uuid();
                const requestLogger = Logger.child({
                    name: requestId.slice(-4),
                    parentLogger: this.logger,
                });
                this.theirsFunctionsWaitPool[requestId] = (response: any) => {
                    requestLogger.silly(
                        `Got Response by function response Handler`,
                    );
                    if (
                        typeof response === "object" &&
                        (response.type === "unexpected" ||
                            response.type ===
                                constants.errors.CONNECTION_LOST) &&
                        response.__from === "theirs"
                    ) {
                        reject(response);
                    } else {
                        resolve(response);
                    }
                };
                requestLogger.silly(`Theirs function wrapper added in que`);
                try {
                    await this.options.sendMessage(
                        this.messageBuilder("execute", requestId, {
                            id,
                            payload: await this.options.serializeObject(
                                params,
                                this.setOurs.bind(this),
                            ),
                        }),
                    );
                    requestLogger.silly(`Theirs function wrapper request sent`);
                } catch (e) {
                    requestLogger.silly(
                        `Theirs function wrapper request failed`,
                    );
                    Reflect.deleteProperty(
                        this.theirsFunctionsWaitPool,
                        requestId,
                    );
                    requestLogger.silly(`Remove from wait pool`);
                    e.stack = stack;
                    reject(e);
                }
            });
        });
        this.theirsFunctionsIds.push(id);
        return this.theirsFunctions.get(
            id,
        ) as Promise<FunctionResolverFunction>;
    }

    /**
     * @private
     */
    public findUnusedFunctions() {
        this.logger.debug("finding unused functions");
        const functionIds = this.theirsFunctionsIds
            .map((id) => ({ id, presented: this.theirsFunctions.has(id) }))
            .filter((item) => !item.presented)
            .map((item) => item.id);
        if (functionIds.length) {
            this.sendClearFunction(functionIds);
            this.logger.debug(`Found ${functionIds.length} functions`);
            this.logger.silly("Clear request sent");
        }
    }

    private async sendClearFunction(functionIds: string[]) {
        try {
            await this.options.sendMessage(
                this.baseMessageBuilder("clear", { ids: functionIds }),
            );
        } catch (e) {
            this.logger.warn(
                `Error on request clear functions with ids: ${functionIds}`,
                e,
            );
        }
    }

    async getOurs(id: string) {
        return this.oursFunctions[id] || null;
    }

    async getTheirs(id: string) {
        return this.theirsFunctions.has(id)
            ? ((await this.theirsFunctions.get(id)) as FunctionResolverFunction)
            : null;
    }

    close() {
        this.findUnusedTimeout.clearTimeout();
    }
}
