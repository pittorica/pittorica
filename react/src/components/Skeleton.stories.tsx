import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';
import { Flex } from './Flex';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['rect', 'circle', 'text'],
    },
    loading: { control: 'boolean' },
    animated: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: '200px',
    height: '20px',
  },
};

export const Variants: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Flex align="center" gap="3">
        <Skeleton {...args} variant="circle" width="40px" height="40px" />
        <Skeleton {...args} variant="text" width="150px" />
      </Flex>
      <Skeleton {...args} variant="rect" width="300px" height="100px" />
    </Flex>
  ),
};

export const CardExample: Story = {
  render: (args) => (
    <Card style={{ width: 300, padding: 16 }}>
      <Flex direction="column" gap="3">
        <Skeleton {...args} variant="rect" height="150px" />
        <Flex align="center" gap="2">
          <Skeleton {...args} variant="circle" width="32px" height="32px" />
          <Flex direction="column" gap="1" style={{ flexGrow: 1 }}>
            <Skeleton {...args} variant="text" width="60%" />
            <Skeleton {...args} variant="text" width="40%" />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  ),
};

export const ListExample: Story = {
  render: (args) => (
    <Flex direction="column" gap="4" style={{ width: 400 }}>
      {[1, 2, 3].map((i) => (
        <Flex key={i} align="center" gap="3">
          <Skeleton {...args} variant="circle" width="48px" height="48px" />
          <Flex direction="column" gap="2" style={{ flexGrow: 1 }}>
            <Skeleton {...args} variant="text" />
            <Skeleton {...args} variant="text" width="80%" />
          </Flex>
        </Flex>
      ))}
    </Flex>
  ),
};

export const Static: Story = {
  args: {
    animated: false,
    width: '300px',
    height: '100px',
  },
};

export const ChildrenMask: Story = {
  args: {
    loading: true,
  },
  render: (args) => (
    <Skeleton {...args}>
      <div style={{ padding: 20 }}>
        <h3>This content is masked</h3>
        <p>You cannot see this while loading is true.</p>
      </div>
    </Skeleton>
  ),
};
