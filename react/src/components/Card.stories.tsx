import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    children: 'This is a card content',
    style: {
      padding: '20px',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
