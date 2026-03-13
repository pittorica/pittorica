import type { Meta, StoryObj } from '@storybook/react-vite';

import { DataList } from './DataList';

const meta: Meta<typeof DataList> = {
  title: 'Data Display/DataList',
  component: DataList,
  args: {},
};

export default meta;
type Story = StoryObj<typeof DataList>;

export const Default: Story = {
  render: (args) => (
    <DataList {...args}>
      <DataList.Item>
        <DataList.Label>Name</DataList.Label>
        <DataList.Value>John Doe</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label>Email</DataList.Label>
        <DataList.Value>john@example.com</DataList.Value>
      </DataList.Item>
    </DataList>
  ),
};
