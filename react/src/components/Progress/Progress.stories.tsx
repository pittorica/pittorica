import type { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from '../Flex';
import { Text } from '../Text';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    indeterminate: {
      control: 'boolean',
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
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Colors: Story = {
  render: (args) => (
    <Flex direction="column" gap="4" width="300px">
      <Progress {...args} color="indigo" value={30} />
      <Progress {...args} color="crimson" value={50} />
      <Progress {...args} color="teal" value={70} />
      <Progress {...args} color="amber" indeterminate />
    </Flex>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <Flex direction="column" gap="4" width="300px">
      <Progress {...args} style={{ height: 4 }} value={40} />
      <Progress {...args} style={{ height: 12 }} value={60} />
      <Progress {...args} style={{ height: 24 }} value={80} />
    </Flex>
  ),
};

export const LoadingExample: Story = {
  render: (args) => (
    <Flex direction="column" gap="2" width="300px">
      <Flex justify="between">
        <Text size="2" weight="bold">
          Uploading Files...
        </Text>
        <Text size="2" color="slate">
          75%
        </Text>
      </Flex>
      <Progress {...args} value={75} color="indigo" />
      <Text size="1" color="slate">
        2 minutes remaining
      </Text>
    </Flex>
  ),
};
