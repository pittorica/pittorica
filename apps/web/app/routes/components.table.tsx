import { Chip, Table, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function TableRoute() {
  return (
    <DocPage
      name="Table"
      description="Table component for displaying structured data. It supports headers, rows, cells, and alignment configurations."
      packageName="table-react"
      props={[
        {
          name: 'align',
          type: '"left" | "center" | "right"',
          default: '"left"',
          description: 'Cell content alignment.',
        },
        {
          name: 'as',
          type: 'string',
          description: 'Polymorphic tag override.',
        },
      ]}
      examples={[
        {
          title: 'Basic Table',
          description: 'A standard data table with different cell contents.',
          code: `<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeader>Name</Table.ColumnHeader>
      <Table.ColumnHeader>Status</Table.ColumnHeader>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell><Text weight="bold">Danilo C.</Text></Table.Cell>
      <Table.Cell><Chip color="teal">Active</Chip></Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>`,
          render: (
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Name</Table.ColumnHeader>
                  <Table.ColumnHeader>Status</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Text weight="bold">Danilo C.</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Chip color="teal" size="1">
                      Active
                    </Chip>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Text weight="bold">Zahra S.</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Chip color="slate" size="1">
                      Offline
                    </Chip>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          ),
        },
      ]}
    />
  );
}
