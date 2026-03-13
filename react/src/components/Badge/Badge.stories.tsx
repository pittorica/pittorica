import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  args: {
    badgeContent: 5,
    children: <div style={{ width: 40, height: 40, background: '#ccc' }} />,
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
