import { IconPlus, IconSettings, IconTrash } from '@tabler/icons-react';

import { Box } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Interactive/IconButton',
  args: { onClick: fn() },
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'tonal', 'outlined', 'text'],
      description: 'MD3 hierarchy: elevated, filled, tonal, outlined, and text',
    },
    size: {
      control: 'select',
      options: ['1', '2', '3', '4'],
      description: 'MD3 sizes: extra small, small, medium, large',
    },
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'teal', 'amber', 'red', 'slate'],
      description: 'Semantic color name or CSS color string',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <Flex gap="3" align="center" justify="center" p="4">
      <IconButton variant="filled">
        <IconPlus size={20} />
      </IconButton>
      <IconButton variant="tonal">
        <IconPlus size={20} />
      </IconButton>
      <IconButton variant="outlined">
        <IconPlus size={20} />
      </IconButton>
      <IconButton variant="text">
        <IconPlus size={20} />
      </IconButton>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex gap="3" align="center" justify="center" p="4">
      <IconButton color="red">
        <IconTrash size={20} />
      </IconButton>
      <IconButton color="orange">
        <IconSettings size={20} />
      </IconButton>
      <IconButton color="teal">
        <IconPlus size={20} />
      </IconButton>
    </Flex>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Box
      p="6"
      style={{
        background: 'var(--pittorica-surface-0)',
        borderRadius: '8px',
      }}
    >
      <Flex gap="3" align="center" justify="center">
        <IconButton variant="filled" color="indigo">
          <IconPlus size={20} />
        </IconButton>
        <IconButton variant="tonal" color="teal">
          <IconPlus size={20} />
        </IconButton>
        <IconButton variant="outlined" color="orange">
          <IconPlus size={20} />
        </IconButton>
      </Flex>
    </Box>
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
