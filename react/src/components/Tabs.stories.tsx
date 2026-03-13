import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs.Root> = {
  title: 'Navigation/Tabs',
  component: Tabs.Root,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Tabs.Root>;

export const Default: Story = {
  render: (args) => (
    <Tabs.Root {...args} defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Content for Tab 1</Tabs.Content>
      <Tabs.Content value="tab2">Content for Tab 2</Tabs.Content>
    </Tabs.Root>
  ),
};
