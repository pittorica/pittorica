import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { reactRouter } from '@react-router/dev/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [reactRouter(), tsconfigPaths()],

    assetsInclude: ['**/*.lottie'],

    define: {
      'process.env': env,
    },

    server: {
      port: 4000,
      proxy: {
        '/api': {
          target: 'http://localhost:3000/api',
          changeOrigin: true,
          secure: false,
        },
      },
    },

    resolve: {
      dedupe: ['react', 'react-dom', 'react-router'],
    },

    ssr: {
      noExternal: true,
    },

    esbuild: {
      jsx: 'automatic',
      jsxDev: false,
    },

    build: {
      minify: true,
      rollupOptions: {
        external: [],
      },
    },
  };
});
