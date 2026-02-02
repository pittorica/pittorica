import { IconWorld } from '@tabler/icons-react';

import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select.js';

const meta: Meta<typeof Select.Root> = {
  title: 'Components/Select',
  component: Select.Root,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj = {
  render: () => (
    <Select.Root
      label="Theme"
      helperText="Select your preferred interface appearance."
    >
      <Select.Content defaultValue="system">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </Select.Content>
    </Select.Root>
  ),
};

export const WithStartDecorator: StoryObj = {
  render: () => (
    <Select.Root label="Region" color="teal">
      <Select.Slot>
        <IconWorld size={16} />
      </Select.Slot>
      <Select.Content>
        <option value="eu">Europe</option>
        <option value="na">North America</option>
        <option value="as">Asia</option>
      </Select.Content>
    </Select.Root>
  ),
};

export const States: StoryObj = {
  render: () => (
    <Flex direction="column" gap="4" width="300px">
      <Select.Root
        label="Error State"
        error
        helperText="Please select a valid option."
      >
        <Select.Content>
          <option value="">Choose...</option>
        </Select.Content>
      </Select.Root>

      <Select.Root label="Disabled State" disabled>
        <Select.Content defaultValue="locked">
          <option value="locked">Locked option</option>
        </Select.Content>
      </Select.Root>
    </Flex>
  ),
};
