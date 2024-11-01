import type { CompileOptions } from '@mdx-js/mdx';
import type { Config as SVGOConfig } from 'svgo';
import type { BuiltinsWithOptionalParams as SVGOBuiltinPluginsWithOptionalParams } from 'svgo/plugins/plugins-types';
import type { Plugin as VitePlugin } from 'vite';
import type { MdxTransform } from '../markdown/mdx';
import type { BuildContext, BuildEntry, BuildRoute, MdxPlugins, PluginOptions } from '../types';

/** @public */
export interface ImageOptimizationOptions {
  jsxDirectives?: {
    quality?: `${number}`;
    format?: 'webp' | 'avif' | 'png';
    w?: string;
    h?: string;
    [key: string]: string | undefined;
  };
  svgo?: Pick<SVGOConfig, 'floatPrecision' | 'multipass' | 'plugins'> & {
    defaultPresetOverrides?: SVGOBuiltinPluginsWithOptionalParams['preset-default']['overrides'];
    prefixIds?: SVGOBuiltinPluginsWithOptionalParams['prefixIds'] | false;
  };
  enabled?: boolean | 'only-production';
}
/**
 * @deprecated Use `QwikRouterVitePluginOptions` instead. Will be removed in V3
 * @public
 */
export type QwikCityVitePluginOptions = QwikRouterVitePluginOptions;

/** @public */
export interface QwikRouterVitePluginOptions extends Omit<PluginOptions, 'basePathname'> {
  mdxPlugins?: MdxPlugins;
  mdx?: MdxOptions;
  platform?: Record<string, unknown>;
  imageOptimization?: ImageOptimizationOptions;
}

/** @public */
export type MdxOptions = CompileOptions;

/** @deprecated Not being used anywhere. Will be removed in V3. */
export interface PluginContext {
  buildCtx: BuildContext | null;
  rootDir: string;
  cityPlanCode: string | null;
  mdxTransform: MdxTransform | null;
}

type P<T> = VitePlugin<T> & { api: T };

/** @public */
export interface QwikRouterPlugin extends P<QwikRouterPluginApi> {
  name: 'vite-plugin-qwik-router';
}

/**
 * @deprecated Use `QwikRouterPlugin` instead. Will be removed in V3
 * @public
 */
export type QwikCityPlugin = QwikRouterPlugin;

/** @public */
export interface QwikRouterPluginApi {
  getBasePathname: () => string;
  getRoutes: () => BuildRoute[];
  getServiceWorkers: () => BuildEntry[];
}

/**
 * @deprecated Use `QwikRouterPluginApi` instead. Will be removed in V3
 * @public
 */
export type QwikCityPluginApi = QwikRouterPluginApi;