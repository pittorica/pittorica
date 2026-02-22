import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { reactRouter } from '@react-router/dev/vite';

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: true,
  },
  resolve: {
    alias: [
      {
        find: /^decode-named-character-reference$/,
        replacement: 'decode-named-character-reference/index.js',
      },
    ],
  },
});
