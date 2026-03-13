import { IconInfoCircle } from '@tabler/icons-react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Callout } from './Callout';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    children: (
      <>
        <Callout.Icon>
          <IconInfoCircle />
        </Callout.Icon>
        <Callout.Text>
          This is a callout message with an icon and description.
        </Callout.Text>
      </>
    ),
    color: 'indigo',
    size: 'md',
    variant: 'soft',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'radio',
      options: ['soft', 'outline'],
    },
    color: {
      control: 'select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Callout {...args} size="xs">
        <Callout.Text>Extra Small Callout</Callout.Text>
      </Callout>
      <Callout {...args} size="sm">
        <Callout.Text>Small Callout</Callout.Text>
      </Callout>
      <Callout {...args} size="md">
        <Callout.Text>Medium Callout (Default)</Callout.Text>
      </Callout>
      <Callout {...args} size="lg">
        <Callout.Text>Large Callout</Callout.Text>
      </Callout>
      <Callout {...args} size="xl">
        <Callout.Text>Extra Large Callout</Callout.Text>
      </Callout>
    </div>
  ),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    color: 'crimson',
  },
};
