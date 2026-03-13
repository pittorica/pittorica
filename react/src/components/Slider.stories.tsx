import type { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from './Flex';
import { Slider } from './Slider';
import { Text } from './Text';

const meta: Meta<typeof Slider> = {
  title: 'Forms/Slider',
  component: Slider,
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    marks: { control: 'boolean' },
    disabled: { control: 'boolean' },
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'amber', 'teal', 'slate', 'source'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: 50,
  },
};

export const Steps: Story = {
  args: {
    defaultValue: 20,
    step: 10,
    marks: true,
  },
};

export const CustomRange: Story = {
  args: {
    min: 0,
    max: 10,
    step: 0.5,
    marks: true,
    defaultValue: 5,
  },
};

export const Colors: Story = {
  render: (args) => (
    <Flex direction="column" gap="6" width="300px">
      <Slider {...args} color="indigo" defaultValue={30} />
      <Slider {...args} color="crimson" defaultValue={50} />
      <Slider {...args} color="teal" defaultValue={70} />
      <Slider {...args} color="amber" defaultValue={90} />
    </Flex>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: 50,
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <Flex direction="column" gap="2" width="300px">
      <Flex justify="between">
        <Text size="2" weight="bold">
          Brightness
        </Text>
        <Text size="2" color="slate">
          80%
        </Text>
      </Flex>
      <Slider {...args} defaultValue={80} color="amber" />
    </Flex>
  ),
};
