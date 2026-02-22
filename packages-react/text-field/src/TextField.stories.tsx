import { IconLock, IconMail, IconSearch } from '@tabler/icons-react';

import { Box } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { PittoricaTheme } from '@pittorica/theme-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { TextField } from './TextField.js';

/**
 * TextField component following Radix UI's compact design.
 * Supports 5 sizes and compound component architecture for slots.
 */
const meta: Meta<typeof TextField.Root> = {
  title: 'Interactive/TextField',
  args: {
    onClick: fn(),
  },
  component: TextField.Root,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Compact sizes scaling from 24px to 64px',
    },
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'teal', 'amber', 'red', 'slate', 'source'], // Added 'source'
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: {
      control: 'boolean',
      description: 'Marks the input as required',
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: StoryObj<typeof TextField.Root> = {
  args: {
    label: 'Description',
    helperText: 'Write a brief overview of your project.',
    color: 'indigo',
    size: 'sm',
  },
  render: (args) => (
    <Flex direction="column" style={{ width: '400px' }} p="4"> {/* Added padding */}
      <TextField.Root {...args}>
        <TextField.Input placeholder="e.g. Danilo C." />
      </TextField.Root>
    </Flex>
  ),
};

/**
 * Visualization of the 5 sizes scaling height and font-size.
 */
export const AllSizes: StoryObj<typeof TextField.Root> = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: '400px' }} p="4"> {/* Added padding */}
      <TextField.Root size="xs" label="Extra Small (24px)">
        <TextField.Input placeholder="Search..." />
      </TextField.Root>
      <TextField.Root size="sm" label="Small (32px - Default)">
        <TextField.Input placeholder="Search..." />
      </TextField.Root>
      <TextField.Root size="md" label="Medium (40px)">
        <TextField.Input placeholder="Search..." />
      </TextField.Root>
      <TextField.Root size="lg" label="Large (48px)">
        <TextField.Input placeholder="Search..." />
      </TextField.Root>
      <TextField.Root size="xl" label="Extra Large (64px)">
        <TextField.Input placeholder="Search..." />
      </TextField.Root>
    </Flex>
  ),
};

export const WithDecorators: StoryObj = {
  render: (args) => (
    <Flex direction="column" gap="4" width="350px" p="4"> {/* Added padding */}
      <TextField.Root {...args} label="Email">
        <TextField.Slot>
          <IconMail size={16} />
        </TextField.Slot>
        <TextField.Input placeholder="mail@example.com" type="email" />
      </TextField.Root>

      <TextField.Root
        {...args}
        label="Password"
        error
        helperText="Password must be 8 characters long."
      >
        <TextField.Slot>
          <IconLock size={16} />
        </TextField.Slot>
        <TextField.Input type="password" defaultValue="12345" />
      </TextField.Root>
    </Flex>
  ),
};

export const Search: StoryObj = {
  render: (args) => (
    <TextField.Root {...args} color="teal">
      <TextField.Slot>
        <IconSearch size={16} />
      </TextField.Slot>
      <TextField.Input placeholder="Search components..." />
      <TextField.Slot>
        <Box
          style={{
            fontSize: '10px',
            background: 'var(--pittorica-slate-4)',
            padding: '2px 4px',
            borderRadius: '4px',
          }}
        >
          ⌘K
        </Box>
      </TextField.Slot>
    </TextField.Root>
  ),
};

export const RequiredExample: StoryObj<typeof TextField.Root> = {
  args: {
    required: true,
    label: 'Username',
    helperText: 'This field is required.',
    color: 'source',
  },
  render: (args) => (
    <Flex direction="column" style={{ width: '400px' }} p="4"> {/* Added padding */}
      <TextField.Root {...args}>
        <TextField.Input placeholder="Enter your username" />
      </TextField.Root>
    </Flex>
  ),
};

export const DarkMode: StoryObj<typeof TextField.Root> = {
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
      <TextField.Root {...args} label="Dark Mode Input" color="source">
        <TextField.Slot>
          <IconMail size={16} />
        </TextField.Slot>
        <TextField.Input placeholder="Type here in dark mode..." />
      </TextField.Root>
      <TextField.Root
        {...args}
        label="Another Dark Input"
        size="lg"
        color="indigo"
        error
        helperText="Error message in dark mode"
      >
        <TextField.Slot>
          <IconLock size={16} />
        </TextField.Slot>
        <TextField.Input placeholder="Password input" type="password" />
      </TextField.Root>
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
