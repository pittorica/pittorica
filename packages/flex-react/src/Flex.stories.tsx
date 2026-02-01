import { Box } from '@pittorica/box-react/src/Box';
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Defines the direction of the main axis.',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
      description: 'Aligns items along the cross axis.',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Aligns items along the main axis.',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description:
        'Controls whether flex items are forced onto a single line or can wrap onto multiple lines.',
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the gap between flex items.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const FlexItem = ({ children }: { children: React.ReactNode }) => (
  <Box
    p="3"
    style={{
      backgroundColor: 'var(--pittorica-blue-3)',
      border: '1px solid var(--pittorica-blue-7)',
      color: 'var(--pittorica-blue-9)',
    }}
  >
    {children}
  </Box>
);

export const RowDirection: Story = {
  args: {
    children: (
      <>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
      </>
    ),
    direction: 'row',
    gap: '3',
    justify: 'start',
    align: 'center',
    style: {
      backgroundColor: 'var(--pittorica-slate-2)',
      padding: 'var(--pittorica-space-4)',
    },
  },
};

export const ColumnDirection: Story = {
  args: {
    children: (
      <>
        <FlexItem>Item A</FlexItem>
        <FlexItem>Item B</FlexItem>
        <FlexItem>Item C</FlexItem>
      </>
    ),
    direction: 'column',
    gap: '4',
    justify: 'center',
    align: 'stretch',
    style: {
      backgroundColor: 'var(--pittorica-slate-2)',
      padding: 'var(--pittorica-space-4)',
      height: '200px',
    },
  },
};

export const JustifyContent: Story = {
  args: {
    children: (
      <>
        <FlexItem>Start</FlexItem>
        <FlexItem>Center</FlexItem>
        <FlexItem>End</FlexItem>
      </>
    ),
    justify: 'between',
    gap: '2',
    style: {
      backgroundColor: 'var(--pittorica-slate-2)',
      padding: 'var(--pittorica-space-4)',
    },
  },
};

export const AlignItems: Story = {
  args: {
    children: (
      <>
        <FlexItem>Top</FlexItem>
        <FlexItem>Middle with more content</FlexItem>
        <FlexItem>Bottom</FlexItem>
      </>
    ),
    align: 'end',
    gap: '2',
    style: {
      backgroundColor: 'var(--pittorica-slate-2)',
      padding: 'var(--pittorica-space-4)',
      height: '150px',
    },
  },
};

export const WithWrap: Story = {
  args: {
    children: Array.from({ length: 10 }).map((_, i) => (
      <FlexItem key={i}>Item {i + 1}</FlexItem>
    )),
    wrap: 'wrap',
    gap: '2',
    style: {
      backgroundColor: 'var(--pittorica-slate-2)',
      padding: 'var(--pittorica-space-4)',
      width: '300px',
    },
  },
};
