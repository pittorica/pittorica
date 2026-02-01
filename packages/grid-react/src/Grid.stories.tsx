import { Box } from '@pittorica/box-react/src/Box';
import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'text',
      description:
        'Defines the columns of the grid. Can be a number (e.g., 3 for repeat(3, 1fr)) or a CSS grid-template-columns value.',
    },
    rows: {
      control: 'text',
      description:
        'Defines the rows of the grid. Can be a number (e.g., 2 for repeat(2, 1fr)) or a CSS grid-template-rows value.',
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the gap between grid items.',
    },
    gapX: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the horizontal gap between grid items.',
    },
    gapY: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the vertical gap between grid items.',
    },
    flow: {
      control: 'select',
      options: ['row', 'column', 'dense', 'row dense', 'column dense'],
      description: 'Controls how auto-placed items are flowed into the grid.',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
      description: 'Aligns items along the cross axis within their grid area.',
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
      description: 'Aligns items along the main axis within their grid area.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <Box
    p="3"
    style={{
      backgroundColor: 'var(--pittorica-red-3)',
      border: '1px solid var(--pittorica-red-7)',
      color: 'var(--pittorica-red-9)',
    }}
  >
    {children}
  </Box>
);

export const DefaultGrid: Story = {
  args: {
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
      </>
    ),
    columns: 2,
    gap: '4',
    style: {
      backgroundColor: 'var(--pittorica-slate-2)',
      padding: 'var(--pittorica-space-4)',
    },
  },
};

export const ThreeColumns: Story = {
  args: {
    children: (
      <>
        <GridItem>Col 1</GridItem>
        <GridItem>Col 2</GridItem>
        <GridItem>Col 3</GridItem>
        <GridItem>Col 4</GridItem>
        <GridItem>Col 5</GridItem>
        <GridItem>Col 6</GridItem>
      </>
    ),
    columns: 3,
    gap: '3',
    style: {
      backgroundColor: 'var(--pittorica-blue-1)',
      padding: 'var(--pittorica-space-4)',
    },
  },
};

export const CustomColumns: Story = {
  args: {
    children: (
      <>
        <GridItem>100px</GridItem>
        <GridItem>1fr</GridItem>
        <GridItem>200px</GridItem>
      </>
    ),
    columns: '100px 1fr 200px',
    gap: '2',
    style: {
      backgroundColor: 'var(--pittorica-teal-1)',
      padding: 'var(--pittorica-space-4)',
    },
  },
};

export const WithGapXAndGapY: Story = {
  args: {
    children: (
      <>
        <GridItem>A1</GridItem>
        <GridItem>A2</GridItem>
        <GridItem>B1</GridItem>
        <GridItem>B2</GridItem>
      </>
    ),
    columns: 2,
    gapX: '5',
    gapY: '2',
    style: {
      backgroundColor: 'var(--pittorica-amber-1)',
      padding: 'var(--pittorica-space-4)',
    },
  },
};

export const FlowColumnDense: Story = {
  args: {
    children: (
      <>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
      </>
    ),
    columns: 3,
    flow: 'column dense',
    gap: '1',
    style: {
      backgroundColor: 'var(--pittorica-crimson-1)',
      padding: 'var(--pittorica-space-4)',
      height: '200px',
    },
  },
};
