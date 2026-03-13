import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  args: {
    placeholder: 'Type here...',
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};
