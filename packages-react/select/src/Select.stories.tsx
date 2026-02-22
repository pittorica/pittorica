import { IconWorld } from '@tabler/icons-react';

import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Select } from './Select.js';

const meta: Meta<typeof Select.Root> = {
  title: 'Interactive/Select',
  args: {
    onClick: fn(),
  },
  component: Select.Root,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'teal', 'amber', 'red', 'slate', 'source'], // Added 'source'
    },
    required: {
      control: 'boolean',
      description: 'Marks the select input as required',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllSizes: StoryObj = {
  render: () => (
    <Flex direction="column" gap="4" width="300px" p="4"> {/* Added padding */}
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <Select.Root key={s} size={s} label={`Size ${s.toUpperCase()}`}>
          <Select.Content>
            <option>Option</option>
          </Select.Content>
        </Select.Root>
      ))}
    </Flex>
  ),
};

export const WithStartDecorator: StoryObj = {
  render: (args) => (
    <Select.Root {...args} label="Region" color="teal">
      <Select.Slot>
        <IconWorld size={16} />
      </Select.Slot>
      <Select.Content>
        <option value="eu">Europe</option>
        <option value="na">North America</option>
      </Select.Content>
    </Select.Root>
  ),
};

export const Required: StoryObj = {
  render: (args) => (
    <form>
      <Select.Root
        {...args}
        label="Country"
        name="country"
        required
        color="source"
        size="sm"
        defaultValue="us"
      >
        <Select.Content>
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="mx">Mexico</option>
        </Select.Content>
      </Select.Root>
      <button type="submit">Submit</button>
    </form>
  ),
};

export const DarkMode: StoryObj = {
  render: () => (
    <PittoricaTheme
      appearance="dark"
      style={{
        padding: '2rem',
        background: 'var(--pittorica-surface-0)',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '300px',
      }}
    >
      <Select.Root label="Dark Mode Select" color="source">
        <Select.Content>
          <option value="1">Dark Option 1</option>
          <option value="2">Dark Option 2</option>
        </Select.Content>
      </Select.Root>
      <Select.Root label="Another Dark Select" color="indigo" size="lg">
        <Select.Content>
          <option value="a">Dark Option A</option>
          <option value="b">Dark Option B</option>
        </Select.Content>
      </Select.Root>
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
