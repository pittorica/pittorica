import path from 'node:path';

import { defineConfig } from 'vite';
import external from 'vite-plugin-external';
import react from '@vitejs/plugin-react';

import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
  plugins: [
    react(),
    external({
      nodeBuiltins: true,
      externalizeDeps: Object.keys(pkg.dependencies || {}),
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
