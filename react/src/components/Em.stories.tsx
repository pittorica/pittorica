import type { Meta, StoryObj } from '@storybook/react-vite';

import { Em } from './Em';

const meta: Meta<typeof Em> = {
  title: 'Components/Em',
  component: Em,
  args: {
    children: 'Emphasized text',
  },
};

export default meta;
type Story = StoryObj<typeof Em>;

export const Default: Story = {};
