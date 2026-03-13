import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Forms/IconButton',
  component: IconButton,
  args: {
    children: '🚀',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};
