import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Switch } from './Switch.js';

const meta: Meta<typeof Switch> = {
  title: 'Interactive/Switch',
  args: { onClick: fn() },
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'teal', 'amber', 'red', 'slate', 'source'], // Added 'source'
    },
    disabled: { control: 'boolean' },
    required: {
      control: 'boolean',
      description: 'Marks the switch as required',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Flex align="center" gap="3" p="4">
      {' '}
      {/* Added padding */}
      <Switch id="s1" />
      <Text as="label" htmlFor="s1" style={{ cursor: 'pointer' }}>
        Enable notifications
      </Text>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex gap="4">
      <Switch defaultChecked color="red" />
      <Switch defaultChecked color="teal" />
      <Switch defaultChecked color="amber" />
      <Switch defaultChecked color="source" />
    </Flex>
  ),
};

export const RequiredExample: Story = {
  args: {
    required: true,
    label: 'Agree to terms',
    color: 'source',
  },
  render: (args) => (
    <Flex align="center" gap="3" p="4">
      {' '}
      {/* Added padding */}
      <Switch {...args} id="req-switch" />
      <Text as="label" htmlFor="req-switch" style={{ cursor: 'pointer' }}>
        {args.label}
      </Text>
    </Flex>
  ),
};

export const States: Story = {
  render: () => (
    <Flex gap="4" align="center">
      <Flex direction="column" align="center" gap="1">
        <Switch checked={false} />
        <Text>Unchecked</Text>
      </Flex>
      <Flex direction="column" align="center" gap="1">
        <Switch checked={true} />
        <Text>Checked</Text>
      </Flex>
      <Flex direction="column" align="center" gap="1">
        <Switch disabled checked={false} />
        <Text>Disabled</Text>
      </Flex>
    </Flex>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <PittoricaTheme
      appearance="dark"
      style={{
        padding: '2rem',
        background: 'var(--pittorica-surface-0)',
        borderRadius: '8px',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <Switch color="teal" defaultChecked />
      <Switch color="indigo" />
      <Switch color="red" disabled />
      <Switch color="source" defaultChecked />
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
