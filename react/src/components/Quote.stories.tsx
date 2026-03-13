import type { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from './Flex';
import { Quote } from './Quote';
import { Text } from './Text';

const meta: Meta<typeof Quote> = {
  title: 'Components/Quote',
  component: Quote,
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
  },
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Default: Story = {
  args: {
    children: 'A simple quote for inline citations.',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Quote {...args} size="1">
        Size 1 Quote
      </Quote>
      <Quote {...args} size="3">
        Size 3 Quote
      </Quote>
      <Quote {...args} size="5">
        Size 5 Quote
      </Quote>
      <Quote {...args} size="7">
        Size 7 Quote
      </Quote>
      <Quote {...args} size="9">
        Size 9 Quote
      </Quote>
    </Flex>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Quote {...args} color="indigo">
        Indigo Quote
      </Quote>
      <Quote {...args} color="crimson">
        Crimson Quote
      </Quote>
      <Quote {...args} color="teal">
        Teal Quote
      </Quote>
      <Quote {...args} color="amber">
        Amber Quote
      </Quote>
    </Flex>
  ),
};

export const InlineUsage: Story = {
  render: (args) => (
    <Text size="4">
      As the famous saying goes,{' '}
      <Quote {...args}>
        the best preparation for tomorrow is doing your best today
      </Quote>
      , which highlights the importance of focus.
    </Text>
  ),
};

export const Weights: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Quote {...args} weight="light">
        Light weight quote
      </Quote>
      <Quote {...args} weight="regular">
        Regular weight quote
      </Quote>
      <Quote {...args} weight="medium">
        Medium weight quote
      </Quote>
      <Quote {...args} weight="bold">
        Bold weight quote
      </Quote>
    </Flex>
  ),
};
