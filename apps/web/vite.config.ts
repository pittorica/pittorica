import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { reactRouter } from '@react-router/dev/vite';

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],

  resolve: {
    dedupe: ['react', 'react-dom', 'react-router'],
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

  ssr: {
    noExternal: [/^@pittorica\/.*/, '@tabler/icons-react', 'pittorica'],
  },
});
