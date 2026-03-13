import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&dpr=2&q=80',
    alt: 'John Doe',
    fallback: 'JD',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
