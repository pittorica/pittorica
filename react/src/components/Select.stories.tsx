import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from './Select';

const meta: Meta<typeof Select.Root> = {
  title: 'Components/Select',
  component: Select.Root,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Select.Root>;

export const Default: Story = {
  render: (args) => (
    <Select.Root {...args} label="Select an option">
      <Select.Content>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select.Content>
    </Select.Root>
  ),
};
