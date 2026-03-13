import type { Meta, StoryObj } from '@storybook/react-vite';

import { Kbd } from './Kbd';

const meta: Meta<typeof Kbd> = {
  title: 'Typography/Kbd',
  component: Kbd,
  args: {
    children: 'Shift',
  },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {};
