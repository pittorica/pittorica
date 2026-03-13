import {
  IconCopy,
  IconLogout,
  IconMail,
  IconPlus,
  IconSettings,
  IconTrash,
  IconUser,
} from '@tabler/icons-react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { DropdownMenu, DropdownMenuItem } from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Overlays/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  args: {
    itemCount: 3,
    renderTrigger: ({ ref, onClick }) => (
      <Button ref={ref as React.RefObject<HTMLButtonElement>} onClick={onClick}>
        Open Menu
      </Button>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuItem index={0} icon={<IconUser size={16} />}>
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem index={1} icon={<IconSettings size={16} />}>
        Settings
      </DropdownMenuItem>
      <DropdownMenuItem
        index={2}
        icon={<IconLogout size={16} />}
        style={{ color: 'var(--pittorica-red-9)' }}
      >
        Logout
      </DropdownMenuItem>
    </DropdownMenu>
  ),
};

export const WithShortcuts: Story = {
  args: {
    itemCount: 4,
  },
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuItem index={0} icon={<IconPlus size={16} />} shortcut="⌘N">
        New Project
      </DropdownMenuItem>
      <DropdownMenuItem index={1} icon={<IconCopy size={16} />} shortcut="⌘C">
        Duplicate
      </DropdownMenuItem>
      <DropdownMenuItem index={2} icon={<IconMail size={16} />} shortcut="⌘S">
        Send Invites
      </DropdownMenuItem>
      <DropdownMenuItem
        index={3}
        icon={<IconTrash size={16} />}
        shortcut="⌫"
        style={{ color: 'var(--pittorica-red-9)' }}
      >
        Delete
      </DropdownMenuItem>
    </DropdownMenu>
  ),
};

export const CustomTrigger: Story = {
  args: {
    itemCount: 2,
    renderTrigger: ({ ref, onClick }) => (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        onClick={onClick}
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'var(--pittorica-indigo-9)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        JD
      </div>
    ),
  },
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuItem index={0}>View Profile</DropdownMenuItem>
      <DropdownMenuItem index={1}>Sign Out</DropdownMenuItem>
    </DropdownMenu>
  ),
};
