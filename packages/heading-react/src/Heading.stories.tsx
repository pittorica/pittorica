import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The HTML heading tag to render.',
    },
    size: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description:
        'Defines the visual size of the heading. Overrides default tag-based sizing.',
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold'],
      description: 'Sets the font weight of the heading.',
    },
    color: {
      control: 'select',
      options: [
        'indigo',
        'crimson',
        'teal',
        'amber',
        'slate',
        'blue',
        'red',
        'danger',
        'success',
        'error',
        'info',
        'inherit',
      ],
      description:
        'Sets the color of the heading. Can be a semantic token or a custom value.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1Default: Story = {
  args: {
    as: 'h1',
    children: 'Heading Level 1 (H1)',
  },
};

export const H2Default: Story = {
  args: {
    as: 'h2',
    children: 'Heading Level 2 (H2)',
  },
};

export const H3Default: Story = {
  args: {
    as: 'h3',
    children: 'Heading Level 3 (H3)',
  },
};

export const H4Default: Story = {
  args: {
    as: 'h4',
    children: 'Heading Level 4 (H4)',
  },
};

export const H5Default: Story = {
  args: {
    as: 'h5',
    children: 'Heading Level 5 (H5)',
  },
};

export const H6Default: Story = {
  args: {
    as: 'h6',
    children: 'Heading Level 6 (H6)',
  },
};

export const CustomSize: Story = {
  args: {
    as: 'h1',
    size: '4', // Visually smaller than default H1
    children: 'H1 with Size 4',
  },
};

export const CustomWeight: Story = {
  args: {
    as: 'h2',
    weight: 'light',
    children: 'H2 with Light Weight',
  },
};

export const ColoredHeading: Story = {
  args: {
    as: 'h3',
    color: 'blue',
    children: 'Blue H3 Heading',
  },
};
