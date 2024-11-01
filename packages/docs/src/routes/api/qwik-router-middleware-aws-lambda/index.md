---
title: \@qwik.dev/qwik-router/middleware/aws-lambda API Reference
---

# [API](/api) &rsaquo; @qwik.dev/qwik-router/middleware/aws-lambda

## createQwikCity

> Warning: This API is now obsolete.
>
> Use `createQwikRouter` instead. Will be removed in V3

```typescript
createQwikCity: typeof createQwikRouter;
```

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/middleware/aws-lambda/index.ts)

## createQwikRouter

```typescript
export declare function createQwikRouter(opts: AwsOpt): {
  fixPath: (pathT: string) => string;
  router: (
    req: import("http").IncomingMessage | import("http2").Http2ServerRequest,
    res: import("http").ServerResponse<import("http").IncomingMessage>,
    next: import("@qwik.dev/router/middleware/node").NodeRequestNextFunction,
  ) => Promise<void>;
  staticFile: (
    req: import("http").IncomingMessage | import("http2").Http2ServerRequest,
    res: import("http").ServerResponse<import("http").IncomingMessage>,
    next: (e?: any) => void,
  ) => Promise<void>;
  notFound: (
    req: import("http").IncomingMessage | import("http2").Http2ServerRequest,
    res: import("http").ServerResponse<import("http").IncomingMessage>,
    next: (e: any) => void,
  ) => Promise<void>;
  handle: (req: any, res: any) => void;
};
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

AwsOpt

</td><td>

</td></tr>
</tbody></table>
**Returns:**

{ fixPath: (pathT: string) =&gt; string; router: (req: import("http").IncomingMessage \| import("http2").Http2ServerRequest, res: import("http").ServerResponse&lt;import("http").IncomingMessage&gt;, next: import("@qwik.dev/router/middleware/node").NodeRequestNextFunction) =&gt; Promise&lt;void&gt;; staticFile: (req: import("http").IncomingMessage \| import("http2").Http2ServerRequest, res: import("http").ServerResponse&lt;import("http").IncomingMessage&gt;, next: (e?: any) =&gt; void) =&gt; Promise&lt;void&gt;; notFound: (req: import("http").IncomingMessage \| import("http2").Http2ServerRequest, res: import("http").ServerResponse&lt;import("http").IncomingMessage&gt;, next: (e: any) =&gt; void) =&gt; Promise&lt;void&gt;; handle: (req: any, res: any) =&gt; void; }

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/middleware/aws-lambda/index.ts)

## PlatformAwsLambda

```typescript
export interface PlatformAwsLambda extends Object
```

**Extends:** Object

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/middleware/aws-lambda/index.ts)

## QwikCityAwsLambdaOptions

> Warning: This API is now obsolete.
>
> Use `QwikRouterAwsLambdaOptions` instead. Will be removed in V3

```typescript
export type QwikCityAwsLambdaOptions = QwikRouterAwsLambdaOptions;
```

**References:** [QwikRouterAwsLambdaOptions](#qwikrouterawslambdaoptions)

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/middleware/aws-lambda/index.ts)

## QwikRouterAwsLambdaOptions

```typescript
export interface QwikRouterAwsLambdaOptions extends ServerRenderOptions
```

**Extends:** ServerRenderOptions

[Edit this section](https://github.com/QwikDev/qwik/tree/main/packages/qwik-router/src/middleware/aws-lambda/index.ts)