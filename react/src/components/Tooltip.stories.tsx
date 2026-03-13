import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  args: {
    children: <button>Hover me</button>,
    content: 'Tooltip content',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};
