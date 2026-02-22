import { defineConfig, globalIgnores } from 'eslint/config';
import spellbookx from 'eslint-plugin-spellbookx';

export default defineConfig([
  globalIgnores([
    '**/node_modules/**',
    '.github/instructions/**',
    '**/*:Zone.Identifier',
    '**/Thumbs.db',
    '**/.react-router/**',
    '**/*.hbs',
    'CHANGELOG.md',
  ]),
  spellbookx.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: [
          './apps/*/tsconfig.json',
          './packages/*/tsconfig.json',
          './packages-react/*/tsconfig.json',
          './packages-react/*/tsconfig.stories.json',
          './packages-react/*/tsconfig.test.json',
          './.storybook/tsconfig.json',
        ],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
