import { IconInfoCircle, IconSettings, IconTrash } from '@tabler/icons-react';

import { Box } from '@pittorica/box-react';
import { Button } from '@pittorica/button-react';
import { Flex } from '@pittorica/flex-react';
import { IconButton } from '@pittorica/icon-button-react';
import { Text } from '@pittorica/text-react';
import { PittoricaTheme } from '@pittorica/theme-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Popover, PopoverContent, PopoverTrigger } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Feedback/Popover',
  args: { onClick: fn() },
  component: Popover,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button variant="outlined">Click to open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Box p="1">
          <Text weight="bold">Popover Title</Text>
          <Text color="slate">
            This content is dynamically positioned using Floating UI.
          </Text>
        </Box>
      </PopoverContent>
    </Popover>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <PittoricaTheme
      appearance="dark"
      style={{
        padding: '4rem',
        background: 'var(--pittorica-surface-0)',
        borderRadius: '8px',
      }}
    >
      <Popover placement="bottom" appearance="dark">
        <PopoverTrigger>
          <Button variant="tonal">Open Dark Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Box p="1">
            <Text weight="bold">Dark Theme</Text>
            <Text>
              Everything inside this popover adapts to the dark theme.
            </Text>
          </Box>
        </PopoverContent>
      </Popover>
    </PittoricaTheme>
  ),
};

export const DestructiveAction: Story = {
  render: () => (
    <Popover placement="top">
      <PopoverTrigger>
        <IconButton color="red" variant="tonal">
          <IconTrash size={20} />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent style={{ width: '200px' }}>
        <Flex direction="column" gap="3">
          <Text weight="medium">
            Are you sure you want to delete this item?
          </Text>
          <Flex gap="2">
            <Button variant="text" width="100%">
              Cancel
            </Button>
            <Button color="red" width="100%">
              Delete
            </Button>
          </Flex>
        </Flex>
      </PopoverContent>
    </Popover>
  ),
};

export const SettingsMenu: Story = {
  render: () => (
    <Popover placement="right">
      <PopoverTrigger>
        <IconButton variant="outlined">
          <IconSettings size={20} />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent style={{ width: '240px' }}>
        <Flex direction="column" gap="2">
          <Text weight="bold" mb="2">
            Display Settings
          </Text>
          <Flex align="center" gap="2" style={{ cursor: 'pointer' }}>
            <IconInfoCircle size={16} />
            <Text>Show advanced options</Text>
          </Flex>
          <Box
            height="1px"
            style={{ background: 'var(--pittorica-slate-4)' }}
            mt="2"
            mb="2"
          />
          <Button>Save Changes</Button>
        </Flex>
      </PopoverContent>
    </Popover>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement, args: _args }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button');
    await userEvent.click(trigger);

    // Check if popover content is visible
    const popover = await within(document.body).findByRole('dialog');
    await expect(popover).toBeInTheDocument();
  },
};
