import type { Meta, StoryObj } from '@storybook/react-vite';

import { Strong } from './Strong';

const meta: Meta<typeof Strong> = {
  title: 'Components/Strong',
  component: Strong,
  args: {
    children: 'Strong Text',
  },
};

export default meta;
type Story = StoryObj<typeof Strong>;

export const Default: Story = {};
