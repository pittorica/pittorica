import type { Meta, StoryObj } from '@storybook/react-vite';

import { Box } from '../Box';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    columns: {
      control: 'select',
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'none',
        'auto-100px',
        'auto-200px',
      ],
    },
    rows: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', 'none'],
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    flow: {
      control: 'select',
      options: ['row', 'column', 'dense', 'row-dense', 'column-dense'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
    },
    justify: {
      control: 'select',
      options: [
        'start',
        'center',
        'end',
        'between',
        'around',
        'evenly',
        'stretch',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

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
    columns: '3',
    gap: '3',
  },
  render: (args) => (
    <Grid {...args}>
      <ColoredBox color="indigo" label="1" />
      <ColoredBox color="crimson" label="2" />
      <ColoredBox color="teal" label="3" />
      <ColoredBox color="amber" label="4" />
      <ColoredBox color="slate" label="5" />
      <ColoredBox color="indigo" label="6" />
    </Grid>
  ),
};

export const Columns: Story = {
  render: (args) => (
    <Flex direction="column" gap="6">
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          2 Columns
        </Text>
        <Grid {...args} columns="2" gap="3">
          <ColoredBox color="indigo" label="1" />
          <ColoredBox color="crimson" label="2" />
        </Grid>
      </div>
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          4 Columns
        </Text>
        <Grid {...args} columns="4" gap="3">
          <ColoredBox color="indigo" label="1" />
          <ColoredBox color="crimson" label="2" />
          <ColoredBox color="teal" label="3" />
          <ColoredBox color="amber" label="4" />
        </Grid>
      </div>
    </Flex>
  ),
};

export const AutoColumns: Story = {
  args: {
    columns: 'auto-150px',
    gap: '3',
  },
  render: (args) => (
    <div
      style={{
        maxWidth: 500,
        border: '1px solid var(--pittorica-slate-4)',
        padding: 10,
      }}
    >
      <Text size="1" color="slate" mb="2" display="block">
        Fluid Columns (min 150px)
      </Text>
      <Grid {...args}>
        <ColoredBox color="indigo" label="1" />
        <ColoredBox color="crimson" label="2" />
        <ColoredBox color="teal" label="3" />
        <ColoredBox color="amber" label="4" />
      </Grid>
    </div>
  ),
};

export const GapVariants: Story = {
  render: (args) => (
    <Flex direction="column" gap="6">
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Gap 1
        </Text>
        <Grid {...args} columns="3" gap="1">
          <ColoredBox color="indigo" label="1" />
          <ColoredBox color="crimson" label="2" />
          <ColoredBox color="teal" label="3" />
        </Grid>
      </div>
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Gap 5
        </Text>
        <Grid {...args} columns="3" gap="5">
          <ColoredBox color="indigo" label="1" />
          <ColoredBox color="crimson" label="2" />
          <ColoredBox color="teal" label="3" />
        </Grid>
      </div>
      <div>
        <Text size="1" color="slate" mb="2" display="block">
          Different X/Y Gap (X: 9, Y: 2)
        </Text>
        <Grid {...args} columns="3" gapX="9" gapY="2">
          <ColoredBox color="indigo" label="1" />
          <ColoredBox color="crimson" label="2" />
          <ColoredBox color="teal" label="3" />
          <ColoredBox color="amber" label="4" />
          <ColoredBox color="slate" label="5" />
          <ColoredBox color="indigo" label="6" />
        </Grid>
      </div>
    </Flex>
  ),
};

export const Responsive: Story = {
  args: {
    columns: { initial: '1', sm: '2', md: '3', lg: '4' },
    gap: { initial: '2', md: '4' },
  },
  render: (args) => (
    <Grid {...args}>
      <ColoredBox color="indigo" label="Item 1" />
      <ColoredBox color="crimson" label="Item 2" />
      <ColoredBox color="teal" label="Item 3" />
      <ColoredBox color="amber" label="Item 4" />
    </Grid>
  ),
};

export const Alignment: Story = {
  render: (args) => (
    <Grid
      {...args}
      columns="3"
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
    </Grid>
  ),
};
