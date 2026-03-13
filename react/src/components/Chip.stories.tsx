import { IconCheck, IconMail, IconUser } from '@tabler/icons-react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Chip } from './Chip';
import { Flex } from './Flex';

const meta: Meta<typeof Chip> = {
  title: 'Data Display/Chip',
  component: Chip,
  args: {
    children: 'Chip Content',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'tonal', 'outlined', 'elevated', 'text', 'surface'],
    },
    size: {
      control: 'select',
      options: ['1', '2', '3'],
    },
    color: {
      control: 'select',
      options: [
        'indigo',
        'crimson',
        'amber',
        'teal',
        'slate',
        'success',
        'danger',
        'info',
        'warning',
      ],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <Flex gap="2">
      <Chip {...args} variant="filled">
        Filled
      </Chip>
      <Chip {...args} variant="tonal">
        Tonal
      </Chip>
      <Chip {...args} variant="outlined">
        Outlined
      </Chip>
      <Chip {...args} variant="elevated">
        Elevated
      </Chip>
      <Chip {...args} variant="text">
        Text
      </Chip>
      <Chip {...args} variant="surface">
        Surface
      </Chip>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <Flex align="center" gap="2">
      <Chip {...args} size="1">
        Small (1)
      </Chip>
      <Chip {...args} size="2">
        Medium (2)
      </Chip>
      <Chip {...args} size="3">
        Large (3)
      </Chip>
    </Flex>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <Flex gap="2" wrap="wrap">
      <Chip {...args} color="indigo">
        Indigo
      </Chip>
      <Chip {...args} color="crimson">
        Crimson
      </Chip>
      <Chip {...args} color="teal">
        Teal
      </Chip>
      <Chip {...args} color="amber">
        Amber
      </Chip>
      <Chip {...args} color="slate">
        Slate
      </Chip>
      <Chip {...args} color="success">
        Success
      </Chip>
      <Chip {...args} color="danger">
        Danger
      </Chip>
      <Chip {...args} color="warning">
        Warning
      </Chip>
      <Chip {...args} color="info">
        Info
      </Chip>
    </Flex>
  ),
};

export const Decorators: Story = {
  render: (args) => (
    <Flex gap="2">
      <Chip {...args} startDecorator={<IconUser size={14} />}>
        User Profile
      </Chip>
      <Chip {...args} endDecorator={<IconCheck size={14} />}>
        Completed
      </Chip>
      <Chip
        {...args}
        startDecorator={<IconMail size={14} />}
        endDecorator={<IconCheck size={14} />}
      >
        Sent
      </Chip>
    </Flex>
  ),
};

export const Deletable: Story = {
  argTypes: {
    onDelete: { action: 'deleted' },
  },
  args: {
    onDelete: () => console.log('Delete clicked'),
  },
};

export const Clickable: Story = {
  args: {
    onClick: () => alert('Chip clicked!'),
  },
};

export const Combinations: Story = {
  argTypes: {
    onDelete: { action: 'deleted' },
  },
  render: (args) => (
    <Flex direction="column" gap="4">
      <Flex gap="2">
        <Chip
          {...args}
          variant="tonal"
          color="success"
          startDecorator={<IconCheck size={14} />}
        >
          Verified
        </Chip>
        <Chip {...args} variant="outlined" color="danger" onDelete={() => {}}>
          Error Log
        </Chip>
        <Chip
          {...args}
          variant="filled"
          color="indigo"
          startDecorator={<IconUser size={14} />}
          onDelete={() => {}}
        >
          Admin
        </Chip>
      </Flex>
      <Flex gap="2" align="center">
        <Chip {...args} size="1" variant="tonal" color="amber">
          New
        </Chip>
        <Chip {...args} size="2" variant="tonal" color="teal">
          In Progress
        </Chip>
        <Chip {...args} size="3" variant="tonal" color="slate">
          Archived
        </Chip>
      </Flex>
    </Flex>
  ),
};
