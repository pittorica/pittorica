import type { Meta, StoryObj } from '@storybook/react-vite';

import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl.Root> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl.Root,
  args: {},
};

export default meta;
type Story = StoryObj<typeof SegmentedControl.Root>;

export const Default: Story = {
  render: (args) => (
    <SegmentedControl.Root {...args} defaultValue="1">
      <SegmentedControl.Item value="1">Option 1</SegmentedControl.Item>
      <SegmentedControl.Item value="2">Option 2</SegmentedControl.Item>
    </SegmentedControl.Root>
  ),
};
