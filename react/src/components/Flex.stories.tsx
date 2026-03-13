import type { Meta, StoryObj } from '@storybook/react-vite';

import { Box } from './Box';
import { Flex } from './Flex';
import { Text } from './Text';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const ColoredBox = ({
  color = 'indigo',
  label,
  height,
}: {
  color?: string;
  label: string;
  height?: number | string;
}) => (
  <Box
    style={{
      backgroundColor: `var(--pittorica-${color}-9)`,
      color: 'white',
      padding: 'var(--pittorica-space-4)',
      borderRadius: 'var(--pittorica-radius-2)',
      minWidth: 80,
      height: height || 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    }}
  >
    {label}
  </Box>
);

export const Default: Story = {
  args: {
    gap: '3',
  },
  render: (args) => (
    <Flex {...args}>
      <ColoredBox color="indigo" label="1" />
      <ColoredBox color="crimson" label="2" />
      <ColoredBox color="teal" label="3" />
    </Flex>
  ),
};

export const Directions: Story = {
  render: (args) => (
    <Flex direction="column" gap="6">
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Row (Default)
        </Text>
        <Flex {...args} direction="row" gap="3">
          <ColoredBox color="indigo" label="1" />
          <ColoredBox color="crimson" label="2" />
          <ColoredBox color="teal" label="3" />
        </Flex>
      </div>
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Column
        </Text>
        <Flex {...args} direction="column" gap="3">
          <ColoredBox color="indigo" label="1" />
          <ColoredBox color="crimson" label="2" />
          <ColoredBox color="teal" label="3" />
        </Flex>
      </div>
    </Flex>
  ),
};

export const JustifyContent: Story = {
  render: (args) => (
    <Flex direction="column" gap="6" width="100%">
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Between
        </Text>
        <Flex {...args} justify="between" gap="3">
          <ColoredBox color="indigo" label="1" />
          <ColoredBox color="crimson" label="2" />
          <ColoredBox color="teal" label="3" />
        </Flex>
      </div>
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Center
        </Text>
        <Flex {...args} justify="center" gap="3">
          <ColoredBox color="indigo" label="1" />
          <ColoredBox color="crimson" label="2" />
          <ColoredBox color="teal" label="3" />
        </Flex>
      </div>
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          End
        </Text>
        <Flex {...args} justify="end" gap="3">
          <ColoredBox color="indigo" label="1" />
          <ColoredBox color="crimson" label="2" />
          <ColoredBox color="teal" label="3" />
        </Flex>
      </div>
    </Flex>
  ),
};

export const Alignment: Story = {
  render: (args) => (
    <Flex
      {...args}
      gap="3"
      align="center"
      style={{
        height: 200,
        background: 'var(--pittorica-slate-2)',
        padding: 20,
        borderRadius: 8,
      }}
    >
      <ColoredBox color="indigo" label="Tall" height={120} />
      <ColoredBox color="crimson" label="Mid" height={80} />
      <ColoredBox color="teal" label="Short" height={40} />
    </Flex>
  ),
};

export const Wrapping: Story = {
  render: (args) => (
    <Box
      style={{
        maxWidth: 300,
        background: 'var(--pittorica-slate-2)',
        padding: 10,
      }}
    >
      <Flex {...args} wrap="wrap" gap="2">
        <ColoredBox color="indigo" label="1" />
        <ColoredBox color="crimson" label="2" />
        <ColoredBox color="teal" label="3" />
        <ColoredBox color="amber" label="4" />
        <ColoredBox color="slate" label="5" />
        <ColoredBox color="indigo" label="6" />
      </Flex>
    </Box>
  ),
};

export const Responsive: Story = {
  args: {
    direction: { initial: 'column', md: 'row' },
    gap: { initial: '2', md: '5' },
  },
  render: (args) => (
    <Flex {...args}>
      <ColoredBox color="indigo" label="Responsive 1" />
      <ColoredBox color="crimson" label="Responsive 2" />
      <ColoredBox color="teal" label="Responsive 3" />
    </Flex>
  ),
};
