import 'pittorica';
import '@fontsource-variable/inter';
import '@fontsource/momo-trust-display';
import '@fontsource/iosevka-etoile';

import React from 'react';

import type { Preview } from '@storybook/react-vite';

import { PittoricaTheme } from '../react/src/components/PittoricaTheme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    (Story) => (
      <PittoricaTheme>
        <Story />
      </PittoricaTheme>
    ),
  ],
};

export default preview;
