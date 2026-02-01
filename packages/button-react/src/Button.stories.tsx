import { Box } from '@pittorica/box-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'tonal', 'outlined', 'elevated', 'text'],
      description: 'MD3 Expressive button hierarchy',
    },
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'teal', 'amber', 'red', 'slate'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Gallery: Story = {
  render: (args) => (
    <Box
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <Button {...args} variant="filled">
        Filled
      </Button>
      <Button {...args} variant="tonal">
        Tonal
      </Button>
      <Button {...args} variant="elevated">
        Elevated
      </Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </Box>
  ),
};

export const SemanticColors: Story = {
  render: () => (
    <Box style={{ display: 'flex', gap: '16px' }}>
      <Button color="indigo">Primary</Button>
      <Button color="crimson" variant="tonal">
        Secondary
      </Button>
      <Button color="red" variant="outlined">
        Danger
      </Button>
    </Box>
  ),
};

export const AsLink: Story = {
  args: {
    children: 'Go to Documentation',
    href: '#',
    variant: 'outlined',
  },
};
