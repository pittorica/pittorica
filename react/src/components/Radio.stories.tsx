import type { Meta, StoryObj } from '@storybook/react-vite';

import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  args: {
    children: 'Radio Option',
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {};
