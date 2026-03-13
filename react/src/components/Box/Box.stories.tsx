import type { Meta, StoryObj } from '@storybook/react-vite';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  args: {
    children: 'This is a Box component',
    p: '4',
    style: {
      background: 'var(--pittorica-gray-3)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {};
