import type { Meta, StoryObj } from '@storybook/react-vite';

import { Divider } from './Divider';
import { Flex } from './Flex';
import { Text } from './Text';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'solid',
        'wave',
        'zigzag',
        'square',
        'scallop',
        'dashed',
        'double',
        'cross',
        'dots',
      ],
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
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    variant: 'solid',
  },
};

export const SolidWithChildren: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Divider {...args}>Text Center</Divider>
      <Divider
        {...args}
        style={{ '--divider-text-align': 'left' } as React.CSSProperties}
      >
        Text Left
      </Divider>
      <Divider
        {...args}
        style={{ '--divider-text-align': 'right' } as React.CSSProperties}
      >
        Text Right
      </Divider>
    </Flex>
  ),
};

export const Patterns: Story = {
  render: (args) => (
    <Flex direction="column" gap="6" width="100%">
      <div>
        <Text size="1" color="slate" mb="1" display="block">
          Wave
        </Text>
        <Divider {...args} variant="wave" />
      </div>
      <div>
        <Text size="1" color="slate" mb="1" display="block">
          Zigzag
        </Text>
        <Divider {...args} variant="zigzag" />
      </div>
      <div>
        <Text size="1" color="slate" mb="1" display="block">
          Square
        </Text>
        <Divider {...args} variant="square" />
      </div>
      <div>
        <Text size="1" color="slate" mb="1" display="block">
          Scallop
        </Text>
        <Divider {...args} variant="scallop" />
      </div>
      <div>
        <Text size="1" color="slate" mb="1" display="block">
          Dashed
        </Text>
        <Divider {...args} variant="dashed" />
      </div>
      <div>
        <Text size="1" color="slate" mb="1" display="block">
          Double
        </Text>
        <Divider {...args} variant="double" />
      </div>
      <div>
        <Text size="1" color="slate" mb="1" display="block">
          Cross
        </Text>
        <Divider {...args} variant="cross" />
      </div>
      <div>
        <Text size="1" color="slate" mb="1" display="block">
          Dots
        </Text>
        <Divider {...args} variant="dots" />
      </div>
    </Flex>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Divider {...args} color="crimson" />
      <Divider {...args} color="teal" />
      <Divider {...args} color="amber" variant="wave" />
      <Divider {...args} color="indigo" variant="zigzag" />
    </Flex>
  ),
};

export const Thickness: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Divider {...args} thickness={1} />
      <Divider {...args} thickness={2} />
      <Divider {...args} thickness={4} />
      <Divider {...args} thickness="8px" color="slate" />
    </Flex>
  ),
};
