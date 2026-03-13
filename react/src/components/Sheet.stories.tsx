import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';
import { Flex } from './Flex';
import { Sheet, type SheetProps } from './Sheet';
import { Text } from './Text';

const meta: Meta<typeof Sheet> = {
  title: 'Overlays/Sheet',
  component: Sheet,
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    appearance: {
      control: 'select',
      options: ['light', 'dark', 'inherit'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

const SheetTemplate = (args: SheetProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open {args.side || 'right'} Sheet
      </Button>
      <Sheet {...args} isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <SheetTemplate {...args} />,
  args: {
    title: 'Edit Profile',
    children: (
      <Flex direction="column" gap="4">
        <Text>
          Make changes to your profile here. Click save when you're done.
        </Text>
        <div
          style={{
            height: 600,
            background: 'var(--pittorica-slate-2)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text color="slate">Scrollable Content Area</Text>
        </div>
        <Button onClick={() => alert('Saved!')}>Save Changes</Button>
      </Flex>
    ),
  },
};

export const Right: Story = {
  render: (args) => <SheetTemplate {...args} />,
  args: {
    ...Default.args,
    side: 'right',
  },
};

export const Left: Story = {
  render: (args) => <SheetTemplate {...args} />,
  args: {
    ...Default.args,
    side: 'left',
  },
};

export const Top: Story = {
  render: (args) => <SheetTemplate {...args} />,
  args: {
    ...Default.args,
    side: 'top',
  },
};

export const Bottom: Story = {
  render: (args) => <SheetTemplate {...args} />,
  args: {
    ...Default.args,
    side: 'bottom',
  },
};

export const DarkMode: Story = {
  render: (args) => <SheetTemplate {...args} />,
  args: {
    ...Default.args,
    appearance: 'dark',
    title: 'Dark Mode Sheet',
  },
};
