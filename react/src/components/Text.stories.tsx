import type { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from './Flex';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    size: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold'],
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
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    truncate: { control: 'boolean' },
    as: {
      control: 'select',
      options: ['span', 'div', 'p', 'label'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Text {...args} size="9">
        Size 9 - Large Display
      </Text>
      <Text {...args} size="8">
        Size 8 - Medium Display
      </Text>
      <Text {...args} size="7">
        Size 7 - Section Header
      </Text>
      <Text {...args} size="6">
        Size 6 - Title
      </Text>
      <Text {...args} size="5">
        Size 5 - Large Body
      </Text>
      <Text {...args} size="4">
        Size 4 - Subtitle
      </Text>
      <Text {...args} size="3">
        Size 3 - Base Body (Default)
      </Text>
      <Text {...args} size="2">
        Size 2 - Small Body
      </Text>
      <Text {...args} size="1">
        Size 1 - Caption
      </Text>
    </Flex>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Text {...args} color="indigo">
        Indigo Text
      </Text>
      <Text {...args} color="crimson">
        Crimson Text
      </Text>
      <Text {...args} color="teal">
        Teal Text
      </Text>
      <Text {...args} color="amber">
        Amber Text
      </Text>
      <Text {...args} color="success">
        Success Text
      </Text>
      <Text {...args} color="danger">
        Danger Text
      </Text>
      <Text {...args} color="#888">
        Custom Hex Color
      </Text>
    </Flex>
  ),
};

export const Weights: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Text {...args} weight="light">
        Light weight text (300)
      </Text>
      <Text {...args} weight="regular">
        Regular weight text (400)
      </Text>
      <Text {...args} weight="medium">
        Medium weight text (500)
      </Text>
      <Text {...args} weight="bold">
        Bold weight text (700)
      </Text>
    </Flex>
  ),
};

export const Truncation: Story = {
  args: {
    truncate: true,
    children:
      'This is a very long piece of text that will eventually be truncated by the container because it simply has nowhere else to go. The ellipsis will appear at the end.',
  },
  render: (args) => (
    <div
      style={{
        width: 200,
        border: '1px solid var(--pittorica-slate-4)',
        padding: 8,
      }}
    >
      <Text {...args} />
    </div>
  ),
};

export const Alignment: Story = {
  render: (args) => (
    <Flex direction="column" gap="4" width="100%">
      <Text {...args} align="left">
        Aligned to the left.
      </Text>
      <Text {...args} align="center">
        Aligned to the center.
      </Text>
      <Text {...args} align="right">
        Aligned to the right.
      </Text>
    </Flex>
  ),
};

export const Responsive: Story = {
  args: {
    children: 'This text changes size based on the viewport.',
    size: { initial: '2', sm: '4', md: '6', lg: '8' },
  },
};
