---
title: \@qwik.dev/qwik-router/middleware/cloudflare-pages API Reference
---

# [API](/api) &rsaquo; @qwik.dev/qwik-router/middleware/cloudflare-pages

## createQwikCity

> Warning: This API is now obsolete.
>
> Use `createQwikRouter` instead. Will be removed in V3

```typescript
createQwikCity: typeof createQwikRouter;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/middleware/cloudflare-pages/index.ts)

## createQwikRouter

```typescript
export declare function createQwikRouter(
  opts: QwikRouterCloudflarePagesOptions,
): (
  request: PlatformCloudflarePages["request"],
  env: PlatformCloudflarePages["env"] & {
    ASSETS: {
      fetch: (req: Request) => Response;
    };
  },
  ctx: PlatformCloudflarePages["ctx"],
) => Promise<Response>;
```

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

opts

</td><td>

[QwikRouterCloudflarePagesOptions](#qwikroutercloudflarepagesoptions)

</td><td>

</td></tr>
</tbody></table>
**Returns:**

(request: [PlatformCloudflarePages](#platformcloudflarepages)['request'], env: [PlatformCloudflarePages](#platformcloudflarepages)['env'] &amp; { ASSETS: { fetch: (req: Request) =&gt; Response; }; }, ctx: [PlatformCloudflarePages](#platformcloudflarepages)['ctx']) =&gt; Promise&lt;Response&gt;

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/middleware/cloudflare-pages/index.ts)

## PlatformCloudflarePages

```typescript
export interface PlatformCloudflarePages
```

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[ctx](./router.platformcloudflarepages.ctx.md)

</td><td>

</td><td>

{ waitUntil: (promise: Promise&lt;any&gt;) =&gt; void; }

</td><td>

</td></tr>
<tr><td>

[env?](./router.platformcloudflarepages.env.md)

</td><td>

</td><td>

Record&lt;string, any&gt;

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[request](./router.platformcloudflarepages.request.md)

</td><td>

</td><td>

Request

</td><td>

</td></tr>
</tbody></table>

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/middleware/cloudflare-pages/index.ts)

## QwikCityCloudflarePagesOptions

> Warning: This API is now obsolete.
>
> Use `QwikRouterCloudflarePagesOptions` instead. Will be removed in V3

```typescript
export type QwikCityCloudflarePagesOptions = QwikRouterCloudflarePagesOptions;
```

**References:** [QwikRouterCloudflarePagesOptions](#qwikroutercloudflarepagesoptions)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/middleware/cloudflare-pages/index.ts)

## QwikRouterCloudflarePagesOptions

```typescript
export interface QwikRouterCloudflarePagesOptions extends ServerRenderOptions
```

**Extends:** ServerRenderOptions

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/middleware/cloudflare-pages/index.ts)