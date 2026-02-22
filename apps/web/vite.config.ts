import { readFileSync } from 'node:fs';
import path from 'node:path';

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { reactRouter } from '@react-router/dev/vite';

const pkg = JSON.parse(
  readFileSync(path.join(process.cwd(), 'package.json'), 'utf8')
);

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  define: {
    'import.meta.env.VITE_PITTORICA_VERSION': JSON.stringify(pkg.version),
  },
});
