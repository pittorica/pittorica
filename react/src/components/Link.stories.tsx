import type { Meta, StoryObj } from '@storybook/react-vite';

import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Typography/Link',
  component: Link,
  args: {
    children: 'Link Text',
    href: '#',
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};
