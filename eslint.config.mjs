// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { defineConfig } from 'eslint/config';
import spellbookx from 'eslint-plugin-spellbookx';
import storybook from 'eslint-plugin-storybook';

export default defineConfig([
  spellbookx.configs.recommended,
  ...storybook.configs['flat/recommended'],
]);
