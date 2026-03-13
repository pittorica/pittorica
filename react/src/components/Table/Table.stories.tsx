import type { Meta, StoryObj } from '@storybook/react-vite';

import { Table } from './Table';

const meta: Meta<typeof Table.Root> = {
  title: 'Data Display/Table',
  component: Table.Root,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Table.Root>;

export const Default: Story = {
  render: (args) => (
    <Table.Root {...args}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Role</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jane Smith</Table.Cell>
          <Table.Cell>Designer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};
