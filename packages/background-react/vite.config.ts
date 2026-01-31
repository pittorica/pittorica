/// <reference types="vitest" />
import path from 'node:path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    dts({
      insertTypesEntry: true,
      include: ['src'],
      rollupTypes: false,
      outDir: 'dist',
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),
      name: '@pittorica/background-react',
      formats: ['es', 'cjs'],
      fileName: (format: string): string =>
        `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    sourcemap: true,
    minify: false,
  },
  test: {
    name: 'background-react',
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
});
