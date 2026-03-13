import type { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from './Flex';
import { Heading } from './Heading';
import { Text } from './Text';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    size: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    variant: {
      control: 'select',
      options: ['classic', 'soft', 'outline'],
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
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Heading Text',
    size: '6',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Heading {...args} size="9">
        Size 9 Heading
      </Heading>
      <Heading {...args} size="8">
        Size 8 Heading
      </Heading>
      <Heading {...args} size="7">
        Size 7 Heading
      </Heading>
      <Heading {...args} size="6">
        Size 6 Heading
      </Heading>
      <Heading {...args} size="5">
        Size 5 Heading
      </Heading>
      <Heading {...args} size="4">
        Size 4 Heading
      </Heading>
      <Heading {...args} size="3">
        Size 3 Heading
      </Heading>
      <Heading {...args} size="2">
        Size 2 Heading
      </Heading>
      <Heading {...args} size="1">
        Size 1 Heading
      </Heading>
    </Flex>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <Flex direction="column" gap="6">
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Classic (Default)
        </Text>
        <Heading {...args} variant="classic" size="7">
          The quick brown fox
        </Heading>
      </div>
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Soft
        </Text>
        <Heading {...args} variant="soft" size="7" color="indigo">
          The quick brown fox
        </Heading>
      </div>
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Outline
        </Text>
        <Heading {...args} variant="outline" size="9" color="crimson">
          THE QUICK BROWN FOX
        </Heading>
      </div>
    </Flex>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Heading {...args} color="indigo">
        Indigo Heading
      </Heading>
      <Heading {...args} color="crimson">
        Crimson Heading
      </Heading>
      <Heading {...args} color="teal">
        Teal Heading
      </Heading>
      <Heading {...args} color="amber">
        Amber Heading
      </Heading>
      <Heading {...args} color="success">
        Success Heading
      </Heading>
      <Heading {...args} color="danger">
        Danger Heading
      </Heading>
    </Flex>
  ),
};

export const Responsive: Story = {
  args: {
    children: 'Responsive Heading',
    size: { initial: '4', sm: '6', md: '8', lg: '9' },
  },
};

export const Weights: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Heading {...args} weight="light">
        Light Weight Heading
      </Heading>
      <Heading {...args} weight="regular">
        Regular Weight Heading
      </Heading>
      <Heading {...args} weight="medium">
        Medium Weight Heading
      </Heading>
      <Heading {...args} weight="bold">
        Bold Weight Heading
      </Heading>
    </Flex>
  ),
};

export const Polymorphic: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Heading {...args} as="h1" size="6">
        Rendered as H1
      </Heading>
      <Heading {...args} as="h2" size="6">
        Rendered as H2
      </Heading>
      <Heading {...args} as="h3" size="6">
        Rendered as H3
      </Heading>
      <Heading {...args} as="h4" size="6">
        Rendered as H4
      </Heading>
      <Heading {...args} as="h5" size="6">
        Rendered as H5
      </Heading>
      <Heading {...args} as="h6" size="6">
        Rendered as H6
      </Heading>
    </Flex>
  ),
};
