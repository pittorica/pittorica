import type { Meta, StoryObj } from '@storybook/react-vite';

import { Box } from './Box';
import { Button } from './Button';
import { Divider } from './Divider';
import { Stack } from './Stack';
import { Text } from './Text';
import { TextField } from './TextField';

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
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
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const ColoredBox = ({
  color = 'indigo',
  label,
  height,
  width,
}: {
  color?: string;
  label: string;
  height?: number | string;
  width?: number | string;
}) => (
  <Box
    style={{
      backgroundColor: `var(--pittorica-${color}-9)`,
      color: 'white',
      padding: 'var(--pittorica-space-4)',
      borderRadius: 'var(--pittorica-radius-2)',
      width: width || 'auto',
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
    <Stack {...args}>
      <ColoredBox color="indigo" label="Item 1" />
      <ColoredBox color="crimson" label="Item 2" />
      <ColoredBox color="teal" label="Item 3" />
    </Stack>
  ),
};

export const Gaps: Story = {
  render: (args) => (
    <Stack direction="row" gap="8">
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Gap 1
        </Text>
        <Stack {...args} gap="1">
          <ColoredBox color="indigo" label="1" />
          <ColoredBox color="indigo" label="2" />
          <ColoredBox color="indigo" label="3" />
        </Stack>
      </div>
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Gap 4
        </Text>
        <Stack {...args} gap="4">
          <ColoredBox color="crimson" label="1" />
          <ColoredBox color="crimson" label="2" />
          <ColoredBox color="crimson" label="3" />
        </Stack>
      </div>
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Gap 9
        </Text>
        <Stack {...args} gap="9">
          <ColoredBox color="teal" label="1" />
          <ColoredBox color="teal" label="2" />
          <ColoredBox color="teal" label="3" />
        </Stack>
      </div>
    </Stack>
  ),
};

export const WithDividers: Story = {
  render: (args) => (
    <Stack {...args} gap="0" style={{ width: 300 }}>
      <Box p="3">Item 1</Box>
      <Divider />
      <Box p="3">Item 2</Box>
      <Divider />
      <Box p="3">Item 3</Box>
    </Stack>
  ),
};

export const Alignment: Story = {
  render: (args) => (
    <Stack direction="row" gap="6">
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Align Start
        </Text>
        <Stack
          {...args}
          align="start"
          gap="2"
          style={{ background: 'var(--pittorica-slate-2)', padding: 10 }}
        >
          <ColoredBox color="indigo" label="1" width={100} />
          <ColoredBox color="indigo" label="2" width={150} />
          <ColoredBox color="indigo" label="3" width={80} />
        </Stack>
      </div>
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Align Center
        </Text>
        <Stack
          {...args}
          align="center"
          gap="2"
          style={{ background: 'var(--pittorica-slate-2)', padding: 10 }}
        >
          <ColoredBox color="crimson" label="1" width={100} />
          <ColoredBox color="crimson" label="2" width={150} />
          <ColoredBox color="crimson" label="3" width={80} />
        </Stack>
      </div>
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Align End
        </Text>
        <Stack
          {...args}
          align="end"
          gap="2"
          style={{ background: 'var(--pittorica-slate-2)', padding: 10 }}
        >
          <ColoredBox color="teal" label="1" width={100} />
          <ColoredBox color="teal" label="2" width={150} />
          <ColoredBox color="teal" label="3" width={80} />
        </Stack>
      </div>
    </Stack>
  ),
};

export const NestedForm: Story = {
  render: (args) => (
    <Stack
      {...args}
      gap="6"
      style={{
        maxWidth: 400,
        padding: 20,
        border: '1px solid var(--pittorica-slate-4)',
        borderRadius: 8,
      }}
    >
      <Stack gap="2">
        <Text weight="bold" size="5">
          Create Account
        </Text>
        <Text size="2" color="slate">
          Fill in your details to get started.
        </Text>
      </Stack>

      <Stack gap="4">
        <TextField.Root label="Full Name">
          <TextField.Input placeholder="John Doe" />
        </TextField.Root>
        <TextField.Root label="Email Address">
          <TextField.Input placeholder="john@example.com" type="email" />
        </TextField.Root>
        <TextField.Root label="Password">
          <TextField.Input placeholder="••••••••" type="password" />
        </TextField.Root>
      </Stack>

      <Stack direction="row" gap="3" justify="end">
        <Button variant="outlined">Cancel</Button>
        <Button>Submit</Button>
      </Stack>
    </Stack>
  ),
};

export const Responsive: Story = {
  args: {
    direction: { initial: 'column', md: 'row' },
    gap: { initial: '2', md: '6' },
  },
  render: (args) => (
    <Stack {...args}>
      <ColoredBox color="indigo" label="Responsive 1" />
      <ColoredBox color="crimson" label="Responsive 2" />
      <ColoredBox color="teal" label="Responsive 3" />
    </Stack>
  ),
};
