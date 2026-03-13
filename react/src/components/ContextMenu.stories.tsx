import {
  IconCopy,
  IconCut,
  IconEdit,
  IconFolder,
  IconShare,
  IconTrash,
} from '@tabler/icons-react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';
import { ContextMenu, ContextMenuItem, ContextMenuSub } from './ContextMenu';
import { Flex } from './Flex';
import { Text } from './Text';

const meta: Meta<typeof ContextMenu> = {
  title: 'Overlays/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  args: {
    itemCount: 4,
    trigger: (
      <div
        style={{
          width: 300,
          height: 200,
          border: '2px dashed var(--pittorica-slate-4)',
          borderRadius: 'var(--pittorica-radius-3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--pittorica-surface-1)',
          cursor: 'context-menu',
        }}
      >
        <Text color="slate">Right click here</Text>
      </div>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuItem index={0} onClick={() => console.log('Edit')}>
        <IconEdit size={16} /> Edit
      </ContextMenuItem>
      <ContextMenuItem index={1} onClick={() => console.log('Copy')}>
        <IconCopy size={16} /> Copy
      </ContextMenuItem>
      <ContextMenuItem index={2} onClick={() => console.log('Share')}>
        <IconShare size={16} /> Share
      </ContextMenuItem>
      <ContextMenuItem
        index={3}
        onClick={() => console.log('Delete')}
        style={{ color: 'var(--pittorica-red-9)' }}
      >
        <IconTrash size={16} /> Delete
      </ContextMenuItem>
    </ContextMenu>
  ),
};

export const WithSubmenu: Story = {
  args: {
    itemCount: 3,
  },
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuItem index={0}>
        <IconFolder size={16} /> New Folder
      </ContextMenuItem>
      <ContextMenuSub label="Move to..." index={1} itemCount={2}>
        <ContextMenuItem index={0}>Favorites</ContextMenuItem>
        <ContextMenuItem index={1}>Archive</ContextMenuItem>
      </ContextMenuSub>
      <ContextMenuItem index={2}>
        <IconTrash size={16} /> Trash
      </ContextMenuItem>
    </ContextMenu>
  ),
};

export const LargeArea: Story = {
  args: {
    itemCount: 3,
    trigger: (
      <Card
        style={{
          width: 400,
          padding: 'var(--pittorica-space-6)',
          textAlign: 'center',
        }}
      >
        <Flex direction="column" gap="4">
          <Text weight="bold" size="5">
            File Explorer Simulator
          </Text>
          <Text color="slate">
            Right-click anywhere on this card to see the file actions.
          </Text>
          <div
            style={{
              height: 100,
              background: 'var(--pittorica-slate-2)',
              borderRadius: 'var(--pittorica-radius-2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconFolder size={48} color="var(--pittorica-amber-9)" />
          </div>
        </Flex>
      </Card>
    ),
  },
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuItem index={0}>
        <IconEdit size={16} /> Rename
      </ContextMenuItem>
      <ContextMenuItem index={1}>
        <IconCut size={16} /> Cut
      </ContextMenuItem>
      <ContextMenuItem index={2}>
        <IconCopy size={16} /> Copy
      </ContextMenuItem>
    </ContextMenu>
  ),
};
