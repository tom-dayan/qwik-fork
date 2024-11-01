## API Report File for "@qwik.dev/router"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ServerRenderOptions } from '@qwik.dev/router/middleware/request-handler';

// @public @deprecated (undocumented)
export const createQwikCity: typeof createQwikRouter;

// @public (undocumented)
export function createQwikRouter(opts: QwikRouterCloudflarePagesOptions): (request: PlatformCloudflarePages['request'], env: PlatformCloudflarePages['env'] & {
    ASSETS: {
        fetch: (req: Request) => Response;
    };
}, ctx: PlatformCloudflarePages['ctx']) => Promise<Response>;

// @public (undocumented)
export interface PlatformCloudflarePages {
    // (undocumented)
    ctx: {
        waitUntil: (promise: Promise<any>) => void;
    };
    // (undocumented)
    env?: Record<string, any>;
    // (undocumented)
    request: Request;
}

// @public @deprecated (undocumented)
export type QwikCityCloudflarePagesOptions = QwikRouterCloudflarePagesOptions;

// @public (undocumented)
export interface QwikRouterCloudflarePagesOptions extends ServerRenderOptions {
}

// (No @packageDocumentation comment for this package)

```