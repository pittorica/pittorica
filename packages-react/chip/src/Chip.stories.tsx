import { Flex } from '@pittorica/flex-react';
import { PittoricaTheme } from '@pittorica/theme-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Media/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'indigo',
        'crimson',
        'teal',
        'amber',
        'red',
        'orange',
        'purple',
        'pink',
        'gray',
        'slate',
      ],
    },
    variant: { control: 'radio', options: ['solid', 'soft', 'outline'] },
    size: { control: 'radio', options: ['1', '2', '3'] },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { children: 'Chip Content', variant: 'soft', color: 'indigo' },
};

export const Variants: Story = {
  render: (args) => (
    <Flex gap="2">
      <Chip {...args} variant="solid">
        Solid
      </Chip>
      <Chip {...args} variant="soft">
        Soft
      </Chip>
      <Chip {...args} variant="outline">
        Outline
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
      <Chip {...args} color="orange">
        Orange
      </Chip>
      <Chip {...args} color="purple">
        Purple
      </Chip>
      <Chip {...args} color="red">
        Red
      </Chip>
      <Chip {...args} color="gray">
        Gray
      </Chip>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <Flex gap="2" align="center">
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

export const Deletable: Story = {
  args: {
    children: 'Deletable Tag',
    onDelete: () => alert('Deleted!'),
    color: 'indigo',
    variant: 'soft',
  },
};

export const DarkMode: Story = {
  render: () => (
    <PittoricaTheme
      appearance="dark"
      style={{
        padding: '2rem',
        background: 'var(--pittorica-surface-0)',
        borderRadius: '8px',
      }}
    >
      <Flex gap="2" wrap="wrap">
        <Chip color="indigo" variant="solid">
          Solid
        </Chip>
        <Chip color="teal" variant="soft">
          Soft
        </Chip>
        <Chip color="orange" variant="outline">
          Outline
        </Chip>
        <Chip color="crimson" variant="soft" onDelete={() => {}}>
          Deletable
        </Chip>
      </Flex>
    </PittoricaTheme>
  ),
};
