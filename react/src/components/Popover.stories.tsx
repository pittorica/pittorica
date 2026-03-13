import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';
import { Flex } from './Flex';
import { Popover } from './Popover';
import { Text } from './Text';
import { TextField } from './TextField';

const meta: Meta<typeof Popover> = {
  title: 'Overlays/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <Popover.Trigger>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Text size="2">This is the popover content.</Text>
      </Popover.Content>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: (args) => (
    <Popover {...args}>
      <Popover.Trigger>
        <Button variant="tonal">Settings</Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 260 }}>
        <Flex direction="column" gap="3">
          <Text weight="bold" size="3">
            Dimensions
          </Text>
          <Text size="2" color="slate" mb="2">
            Set the dimensions for the layer.
          </Text>
          <Flex direction="column" gap="2">
            <TextField.Root>
              <TextField.Input placeholder="Width" defaultValue="100%" />
            </TextField.Root>
            <TextField.Root>
              <TextField.Input placeholder="Height" defaultValue="300px" />
            </TextField.Root>
          </Flex>
        </Flex>
      </Popover.Content>
    </Popover>
  ),
};

export const CustomPlacement: Story = {
  args: {
    placement: 'right',
  },
  render: (args) => (
    <Popover {...args}>
      <Popover.Trigger>
        <Button variant="outlined">Right Placement</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Text size="2">I appear on the right!</Text>
      </Popover.Content>
    </Popover>
  ),
};
