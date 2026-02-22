import { DataList } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function DataListRoute() {
  return (
    <DocPage
      name="DataList"
      description="DataList is used to display a list of key-value pairs, typically for user profiles or metadata."
      packageName="data-list-react"
      props={[
        {
          name: 'orientation',
          type: '"horizontal" | "vertical"',
          default: '"horizontal"',
          description: 'Layout orientation.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'A horizontal list of metadata.',
          code: `<DataList>
  <DataList.Item>
    <DataList.Label>Customer ID</DataList.Label>
    <DataList.Value>#12345</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>Status</DataList.Label>
    <DataList.Value>Active</DataList.Value>
  </DataList.Item>
</DataList>`,
          render: (
            <DataList>
              <DataList.Item>
                <DataList.Label>Customer ID</DataList.Label>
                <DataList.Value>#12345</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Status</DataList.Label>
                <DataList.Value>
                  <span style={{ color: 'var(--pittorica-teal-9)' }}>●</span>{' '}
                  Active
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Email</DataList.Label>
                <DataList.Value>dev@pittorica.it</DataList.Value>
              </DataList.Item>
            </DataList>
          ),
        },
      ]}
    />
  );
}
