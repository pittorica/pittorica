import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { BackgroundBeams } from './BackgroundBeams';
import { Box } from './Box';

const meta: Meta<typeof BackgroundBeams> = {
  title: 'Visuals/BackgroundBeams',
  component: BackgroundBeams,
  decorators: [
    (Story) => (
      <Box
        style={{
          position: 'relative',
          height: '400px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: 'var(--pittorica-surface-0)',
          borderRadius: 'var(--pittorica-radius-3)',
          border: '1px solid var(--pittorica-gray-6)',
        }}
      >
        <Box style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
          <h1
            style={{
              color: 'var(--pittorica-on-surface-0)',
              fontFamily: 'var(--pittorica-font-heading)',
              fontSize: '2rem',
              fontWeight: 600,
            }}
          >
            Pittorica Beams
          </h1>
          <p
            style={{
              color: 'var(--pittorica-gray-11)',
              fontFamily: 'var(--pittorica-font-family)',
              marginTop: '0.5rem',
            }}
          >
            A subtle, animated background effect.
          </p>
        </Box>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BackgroundBeams>;

export const Default: Story = {
  args: {
    maxHeight: '400px',
  },
};
