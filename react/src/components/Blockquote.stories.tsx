import type { Meta, StoryObj } from '@storybook/react-vite';

import { Blockquote } from './Blockquote';

const meta: Meta<typeof Blockquote> = {
  title: 'Typography/Blockquote',
  component: Blockquote,
  args: {
    children:
      'Design is not just what it looks like and feels like. Design is how it works.',
  },
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {};
