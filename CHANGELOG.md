# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0-alpha.23](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.22...v2.0.0-alpha.23) (2024-04-20)


### Bug Fixes

* Fix JSONLike model recognition ([557d5a4](https://github.com/yeskiy/prpcow/commit/557d5a4d3b0837731151ab188cacae72f2e3147e))

## [2.0.0-alpha.22](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.21...v2.0.0-alpha.22) (2024-04-05)


### Bug Fixes

* Add session validation to weak function pool ([6caafc2](https://github.com/yeskiy/prpcow/commit/6caafc24952725a800006ad696a74a7b9345154a))

## [2.0.0-alpha.21](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.20...v2.0.0-alpha.21) (2024-04-01)


### Bug Fixes

* replace FinalizationRegistry ([fce7f1d](https://github.com/yeskiy/prpcow/commit/fce7f1d74a55e2aa237465e18faf51c860c03dba))

## [2.0.0-alpha.20](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.19...v2.0.0-alpha.20) (2024-03-28)


### Bug Fixes

* Fix issues (with init method to public in `client.ts`) ([ef8cbab](https://github.com/yeskiy/prpcow/commit/ef8cbabe964ca209d173742785231ba0e3cd6d38))

## [2.0.0-alpha.19](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.18...v2.0.0-alpha.19) (2024-03-28)


### Features

* Add static create method in Client class ([1a6320d](https://github.com/yeskiy/prpcow/commit/1a6320d30a996ef57c2147f1aea437b99441ea6d))

## [2.0.0-alpha.18](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.17...v2.0.0-alpha.18) (2024-03-25)


### Features

* Add SendError class and refactor function resolver ([5597e4b](https://github.com/yeskiy/prpcow/commit/5597e4b1ef99d23bd4a63f7bafc58bf9f7a1b86b))

## [2.0.0-alpha.17](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.16...v2.0.0-alpha.17) (2024-03-22)


### Features

* Changed way of generating default Classes; Add InvertedWeakMap; Code refactor; Uncomment and refine function cleanup test; Update LICENSE year; Updated Base Node and npm version to 18.x ([38b2db1](https://github.com/yeskiy/prpcow/commit/38b2db1a1a62e46c8f399ec6b53d3c414ee925b2))

## [2.0.0-alpha.16](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.15...v2.0.0-alpha.16) (2023-09-12)


### Bug Fixes

* change data showing due to unknown issue a failed load of compressionResolver ([6be7870](https://github.com/yeskiy/prpcow/commit/6be7870dbc55125c152305b89f772bb0c4a4ee2f))

## [2.0.0-alpha.15](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.14...v2.0.0-alpha.15) (2023-09-12)


### Bug Fixes

* Temporarily disable `Session is not in opened state` due to make some traces ([932bb31](https://github.com/yeskiy/prpcow/commit/932bb31def2a1e575f4d57aa066fa12d425f2c96))

## [2.0.0-alpha.14](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.13...v2.0.0-alpha.14) (2023-07-03)


### Bug Fixes

* Add `try...catch` for each send function ([3fe42d8](https://github.com/yeskiy/prpcow/commit/3fe42d8e5e1df2aca106e389676cf9cd53481524))

## [2.0.0-alpha.13](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.12...v2.0.0-alpha.13) (2023-03-30)


### Bug Fixes

* Add `SessionStoreResolver` for server. ([585c1d7](https://github.com/yeskiy/prpcow/commit/585c1d7e1f3a674c6a2dc6b168b1c40d1b6062e5))
* Resolver code smells ([a0d704d](https://github.com/yeskiy/prpcow/commit/a0d704d51c55189e6f79808b5b9bc3b42ca6ab6b))

## [2.0.0-alpha.12](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2023-03-29)


### Bug Fixes

* Back to Async (here we go again). Added `JSONLike` optimization module ([04709cc](https://github.com/yeskiy/prpcow/commit/04709cc5bcdc20df0fb1784e980fbfbe1fe1f6db))

## [2.0.0-alpha.11](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2023-03-28)


### Bug Fixes

* Fully remove `brotli` from CompressionResolvers ([5bbdaff](https://github.com/yeskiy/prpcow/commit/5bbdaffa81a95ad1d27856a479ff6b17f2af8c73))

## [2.0.0-alpha.10](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.9...v2.0.0-alpha.10) (2023-03-27)


### Bug Fixes

* Add `idResolvers` support. Add export of Integrated Resolvers. Add `PureBrotliCompressionResolver` and `WasmBrotliCompressionResolver` (for different env support) ([9f5316e](https://github.com/yeskiy/prpcow/commit/9f5316ed5cb25110fcad4d5a38a63ae01b2751cc))

## [2.0.0-alpha.9](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2023-03-24)


### Bug Fixes

* Add `idResolvers` support. Add export of Integrated Resolvers. Add `PureBrotliCompressionResolver` and `WasmBrotliCompressionResolver` (for different env support) ([7e7a933](https://github.com/yeskiy/prpcow/commit/7e7a933b8a9710778c6d3763486de06c301b6924))

## [2.0.0-alpha.8](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2023-03-24)


### Bug Fixes

* Back to sync model resolver (Function Resolver) ([1a08605](https://github.com/yeskiy/prpcow/commit/1a08605bb56a3c6d46abc625e51be81ba3697092))

## [2.0.0-alpha.7](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2023-03-23)


### Bug Fixes

* Fix `Session is not in opened state` Error. Back to sync model resolver ([1b0902d](https://github.com/yeskiy/prpcow/commit/1b0902d3926818742f31621153327fee357dff9e))

## [2.0.0-alpha.6](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2023-03-19)


### Bug Fixes

* Add pure-uuid to fix crypto problem (temp  solution) ([4638f14](https://github.com/yeskiy/prpcow/commit/4638f14527b69cee087081b6b84e79a6a7b33e30))

## [2.0.0-alpha.5](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2023-03-16)


### Bug Fixes

* Remove useless packages ([7b99bfc](https://github.com/yeskiy/prpcow/commit/7b99bfc34094214dfc5310e9e908a5c38286df8d))

## [2.0.0-alpha.4](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2023-03-16)


### Bug Fixes

* Finally remove winston. Replaced with custom logging function. Updated Types. Fix WFP onclose event bad emitting. Remove isomorphic-ws. Updated Client params. ([f955fb9](https://github.com/yeskiy/prpcow/commit/f955fb9ad3ede259204d7800da95eed0edfff3fc))

## [2.0.0-alpha.3](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2023-03-15)


### Bug Fixes

* Remove winston ([db60578](https://github.com/yeskiy/prpcow/commit/db6057869f5be961b7050a38839e8ae6fb0e5bc8))

## [2.0.0-alpha.2](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2023-03-15)


### Bug Fixes

* Remove winston ([8117ac8](https://github.com/yeskiy/prpcow/commit/8117ac81bdebed8607efb7475126736c8e12249e))

## [2.0.0-alpha.1](https://github.com/yeskiy/prpcow/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2023-03-14)


### Bug Fixes

* Fix build types ([22c7ce1](https://github.com/yeskiy/prpcow/commit/22c7ce1174c679f6b5573111ae068895480f4b3f))
* WFP Clean function when request is failed ([c32f888](https://github.com/yeskiy/prpcow/commit/c32f88882d5f66de16dda726d1c65d3860b931f5))

## [2.0.0-alpha.0](https://github.com/yeskiy/prpcow/compare/v1.1.3...v2.0.0-alpha.0) (2023-03-13)


### ⚠ BREAKING CHANGES

* Code is mostly changed. Client and Server are now Separated. Added ability to use `CompressResolvers`. Moved logger from `console.log` to `winston`. Buffer Polyfills are now integrated. `stream-browserify` installed only for logger support, but it could be used for adding streams on web. `WeakFunctionPool` is still badly cleaning unused functions
* Moved tests (and jest) to another folder
* Fully changed tsconfig

### Features

* Added types into dist build ([6dcd971](https://github.com/yeskiy/prpcow/commit/6dcd9710b607bec156dbf8d0a639183c3788fd84))
* Code moved to ts ([7aa5c4f](https://github.com/yeskiy/prpcow/commit/7aa5c4fdd5a5ad0a8bb9d50e2e578160c9392a67))
* Fully changed tsconfig ([7da970f](https://github.com/yeskiy/prpcow/commit/7da970f6ae4a01a1e152fcda35ca9bbb4eea7405))
* Moved tests (and jest) to another folder ([68d5ce7](https://github.com/yeskiy/prpcow/commit/68d5ce73ddb49d2ab99cc8f1786f00f938dc5655))

### [1.1.3](https://github.com/yeskiy/prpcow/compare/v1.1.2...v1.1.3) (2023-03-01)


### Bug Fixes

* Fix Maximum call stack exceeded when trying to create a stream from client ([e829597](https://github.com/yeskiy/prpcow/commit/e829597b8eb890053ba38afb9e2c965984cf6705))

### [1.1.2](https://github.com/yeskiy/prpcow/compare/v1.1.1...v1.1.2) (2023-01-26)


### Bug Fixes

* Add types support. Add prebuilt for `CommonJS` and `ESM` ([142dd97](https://github.com/yeskiy/prpcow/commit/142dd97eead73564e00ee4ede03f1a6efbdf326b))

### [1.1.1](https://github.com/yeskiy/prpcow/compare/v1.1.0...v1.1.1) (2023-01-23)


### Bug Fixes

* Fix undefined ping/pong module on client-side ([fb27eb8](https://github.com/yeskiy/prpcow/commit/fb27eb890800211fb7076b16b483e85424cf70f5))
* Fix unhandled `Session is not in opened state` error ([05d0136](https://github.com/yeskiy/prpcow/commit/05d01368df6fb1d25cb35cf090cf5a2931a410ee))
* Typo fix ([f65ef59](https://github.com/yeskiy/prpcow/commit/f65ef59a54b8d12274a70511bf4835fdd98c3fca))

## [1.1.0](https://github.com/yeskiy/prpcow/compare/v1.0.12...v1.1.0) (2023-01-23)


### Features

* Add ping/pong calls ([695d106](https://github.com/yeskiy/prpcow/commit/695d1061ffd570657458f7ddb625d675e804de5a))

### [1.0.12](https://github.com/yeskiy/prpcow/compare/v1.0.11...v1.0.12) (2023-01-13)


### Bug Fixes

* update functionResolver ([ba2fdad](https://github.com/yeskiy/prpcow/commit/ba2fdad2b3a10126be7dda6fcc420e59e5a5b964))

### [1.0.11](https://github.com/yeskiy/prpcow/compare/v1.0.10...v1.0.11) (2023-01-12)


### Bug Fixes

* remove node version ident ([cfe246f](https://github.com/yeskiy/prpcow/commit/cfe246f6bf8a0c64baf427a509664fae7911cc9e))

### [1.0.10](https://github.com/yeskiy/prpcow/compare/v1.0.9...v1.0.10) (2022-12-29)

### [1.0.9](https://github.com/yeskiy/prpcow/compare/v1.0.8...v1.0.9) (2022-08-30)

### [1.0.8](https://github.com/yeskiy/prpcow/compare/v1.0.7...v1.0.8) (2022-08-30)

### [1.0.7](https://github.com/yeskiy/prpcow/compare/v1.0.6...v1.0.7) (2022-08-30)

### [1.0.6](https://github.com/yeskiy/prpcow/compare/v1.0.5...v1.0.6) (2022-08-30)

### [1.0.5](https://github.com/yeskiy/prpcow/compare/v1.0.4...v1.0.5) (2022-08-30)

### [1.0.4](https://github.com/yeskiy/prpcow/compare/v1.0.3...v1.0.4) (2022-05-22)

### [1.0.3](https://github.com/yeskiy/prpcow/compare/v1.0.2...v1.0.3) (2022-05-22)

### [1.0.2](https://github.com/yeskiy/prpcow/compare/v1.0.1...v1.0.2) (2022-05-22)
