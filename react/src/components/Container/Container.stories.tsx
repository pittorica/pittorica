import type { Meta, StoryObj } from '@storybook/react-vite';

import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  args: {
    children: 'Container content',
    size: '3',
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {};
