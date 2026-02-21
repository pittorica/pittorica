import { IconInfoCircle } from '@tabler/icons-react';

import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import { PittoricaTheme } from '@pittorica/theme-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

const meta = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Flex align="center" gap="2" p="8">
      <Text>Hover the icon</Text>
      <Tooltip content="This is extra information" side="top">
        <IconInfoCircle size={18} style={{ cursor: 'help' }} />
      </Tooltip>
    </Flex>
  ),
};

export const AllSides: Story = {
  render: () => (
    <Flex direction="column" align="center" gap="9" p="8">
      <Tooltip content="Tooltip on top" side="top">
        <Text
          style={{
            border: '1px solid var(--pittorica-slate-4)',
            padding: '4px 8px',
          }}
        >
          Top Side
        </Text>
      </Tooltip>
      <Tooltip content="Tooltip on bottom" side="bottom">
        <Text
          style={{
            border: '1px solid var(--pittorica-slate-4)',
            padding: '4px 8px',
          }}
        >
          Bottom Side
        </Text>
      </Tooltip>
    </Flex>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <PittoricaTheme
      appearance="dark"
      style={{ padding: '2rem', borderRadius: '8px' }}
    >
      <Flex align="center" gap="2">
        <Text>Dark mode tooltip</Text>
        <Tooltip content="I adapt to dark theme" side="top">
          <IconInfoCircle size={18} style={{ cursor: 'help' }} />
        </Tooltip>
      </Flex>
    </PittoricaTheme>
  ),
};
