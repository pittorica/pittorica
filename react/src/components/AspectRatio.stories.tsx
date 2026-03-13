import type { Meta, StoryObj } from '@storybook/react-vite';

import { AspectRatio } from './AspectRatio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Layout/AspectRatio',
  component: AspectRatio,
  args: {
    ratio: 1.77,
    children: (
      <div
        style={{
          background: 'var(--pittorica-indigo-9)',
          width: '100%',
          height: '100%',
        }}
      />
    ),
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {};
