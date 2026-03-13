import type { Meta, StoryObj } from '@storybook/react-vite';

import { Inset } from './Inset';

const meta: Meta<typeof Inset> = {
  title: 'Layout/Inset',
  component: Inset,
  args: {
    children: (
      <div style={{ background: 'var(--pittorica-indigo-3)', padding: '20px' }}>
        Inset Content
      </div>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Inset>;

export const Default: Story = {};
