import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { TextArea } from './TextArea.js';

/**
 * Storybook configuration for Outlined TextArea.
 * Supports 5 compact sizes and auto-resizing logic.
 */
const meta: Meta<typeof TextArea.Root> = {
  title: 'Interactive/TextArea',
  component: TextArea.Root,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Compact sizes scaling from 48px to 160px min-height',
    },
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'teal', 'amber', 'red', 'slate', 'source'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: {
      control: 'boolean',
      description: 'Marks the textarea as required',
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: StoryObj<typeof TextArea.Root> = {
  args: {
    onClick: fn(),
    label: 'Description',
    helperText: 'Write a brief overview of your project.',
    color: 'indigo',
    size: 'sm',
  },
  render: (args) => (
    <Flex direction="column" style={{ width: '400px' }} p="4"> {/* Added padding */}
      <TextArea.Root {...args}>
        <TextArea.Content placeholder="Enter your text here..." />
      </TextArea.Root>
    </Flex>
  ),
};

/**
 * Visualization of the 5 sizes scaling min-height and typography.
 */
export const AllSizes: StoryObj<typeof TextArea.Root> = {
  render: () => (
    <Flex direction="column" gap="6" style={{ width: '450px' }} p="4"> {/* Added padding */}
      <TextArea.Root size="xs" label="Extra Small (48px)">
        <TextArea.Content placeholder="XS content..." />
      </TextArea.Root>
      <TextArea.Root size="sm" label="Small (64px - Default)">
        <TextArea.Content placeholder="Small content..." />
      </TextArea.Root>
      <TextArea.Root size="md" label="Medium (80px)">
        <TextArea.Content placeholder="Medium content..." />
      </TextArea.Root>
      <TextArea.Root size="lg" label="Large (112px)">
        <TextArea.Content placeholder="Large content..." />
      </TextArea.Root>
      <TextArea.Root size="xl" label="Extra Large (160px)">
        <TextArea.Content placeholder="XL content..." />
      </TextArea.Root>
    </Flex>
  ),
};

export const AutoResizing: StoryObj<typeof TextArea.Root> = {
  args: {
    label: 'Auto-expanding field',
    helperText: 'This field grows as you type.',
    color: 'indigo',
  },
  render: (args) => (
    <Flex direction="column" style={{ width: '400px' }} p="4"> {/* Added padding */}
      <TextArea.Root {...args}>
        <TextArea.Content
          autoResize
          placeholder="Start typing a long text to see me grow..."
        />
      </TextArea.Root>
    </Flex>
  ),
};

export const States: StoryObj<typeof TextArea.Root> = {
  render: (args) => (
    <Flex direction="column" gap="6" style={{ width: '400px' }} p="4"> {/* Added padding */}
      <TextArea.Root
        {...args}
        label="Error State"
        error
        helperText="Please enter a valid description."
      >
        <TextArea.Content placeholder="Something is wrong..." />
      </TextArea.Root>

      <TextArea.Root
        {...args}
        label="Disabled State"
        disabled
        helperText="This field is currently locked."
      >
        <TextArea.Content placeholder="You cannot type here" />
      </TextArea.Root>
    </Flex>
  ),
};

export const Required: StoryObj<typeof TextArea.Root> = {
  args: {
    label: 'Feedback',
    helperText: 'Your feedback is important.',
    required: true,
    color: 'source',
  },
  render: (args) => (
    <Flex direction="column" style={{ width: '400px' }} p="4"> {/* Added padding */}
      <TextArea.Root {...args}>
        <TextArea.Content placeholder="Enter your feedback..." />
      </TextArea.Root>
    </Flex>
  ),
};

export const DarkMode: StoryObj<typeof TextArea.Root> = {
  render: (args) => (
    <PittoricaTheme
      appearance="dark"
      style={{
        padding: '2rem',
        background: 'var(--pittorica-surface-0)',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '400px',
      }}
    >
      <TextArea.Root {...args} label="Dark Mode Input" color="source">
        <TextArea.Content placeholder="Type here in dark mode..." />
      </TextArea.Root>
      <TextArea.Root
        {...args}
        label="Another Dark Input"
        size="lg"
        color="indigo"
        error
        helperText="Error message in dark mode"
      >
        <TextArea.Content placeholder="Error state in dark mode..." />
      </TextArea.Root>
    </PittoricaTheme>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const element =
      canvas.queryByRole('button') ||
      canvas.queryByRole('checkbox') ||
      canvas.queryByRole('radio');
    if (element) {
      await userEvent.click(element);
      if (args.onClick) {
        await expect(args.onClick).toHaveBeenCalled();
      }
    }
  },
};
