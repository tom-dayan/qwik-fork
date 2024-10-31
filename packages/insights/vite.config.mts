import { macroPlugin } from '@builder.io/vite-plugin-macro';
import { qwikInsights } from '@qwik.dev/core/insights/vite';
import { qwikVite } from '@qwik.dev/core/optimizer';
import { qwikRouter } from '@qwik.dev/router/vite';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(async () => {
  return {
    plugins: [
      macroPlugin({ preset: 'pandacss' }),
      qwikRouter(),
      qwikVite({
        experimental: ['insights'],
      }),
      tsconfigPaths({ projects: ['.'] }),
      qwikInsights({ publicApiKey: loadEnv('', '.', '').PUBLIC_QWIK_INSIGHTS_KEY }),
    ],
    dev: {
      headers: {
        'Cache-Control': 'public, max-age=0',
      },
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    optimizeDeps: {
      include: ['@auth/core'],
    },
  };
});
