import {
  Box,
  Card,
  Code,
  Container,
  DataList,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { DataList, Text } from '@pittorica/react';

export const Example = () => {
  return (
    <DataList>
      <DataList.Item>
        <DataList.Label>Customer ID</DataList.Label>
        <DataList.Value>#12345</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label>Status</DataList.Label>
        <DataList.Value>
          <Text color="success">● Active</Text>
        </DataList.Value>
      </DataList.Item>
    </DataList>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Data List</Heading>
          <Text size="4" color="gray" mb="6">
            A component for displaying key-value pairs in a structured list,
            typically used for metadata, specifications, or settings.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/data-list-react
`}
            </Code>
          </Flex>
        </Flex>

        {/* Interactive Preview */}
        <Section>
          <Heading size="4" mb="4">
            Usage Preview
          </Heading>
          <Card
            variant="outlined"
            p="9"
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Box style={{ width: '100%', maxWidth: '400px' }}>
              <DataList>
                <DataList.Item>
                  <DataList.Label>Full Name</DataList.Label>
                  <DataList.Value>Danilo C. De Rossi</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label>Email</DataList.Label>
                  <DataList.Value>
                    <Text
                      color="indigo"
                      style={{ textDecoration: 'underline' }}
                    >
                      danilo@pittorica.it
                    </Text>
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label>Role</DataList.Label>
                  <DataList.Value>Senior Architect</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label>Location</DataList.Label>
                  <DataList.Value>Milan, Italy</DataList.Value>
                </DataList.Item>
              </DataList>
            </Box>
          </Card>
        </Section>

        {/* Implementation Code */}
        <Box mb="9">
          <Heading size="4" mb="4">
            Implementation
          </Heading>
          <Code language="typescript" filename="Example.tsx" showLineNumbers>
            {codeExample}
          </Code>
        </Box>

        {/* Api Reference */}
        <Section>
          <Flex direction="column" gap="4">
            <Heading size="4" mb="4">
              Api
            </Heading>

            <Box>
              <Heading size="3" mb="3">
                DataList
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Box props in addition to the following:
              </Text>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Prop</Table.ColumnHeader>
                    <Table.ColumnHeader>Type</Table.ColumnHeader>
                    <Table.ColumnHeader>Default</Table.ColumnHeader>
                    <Table.ColumnHeader>Description</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Code>orientation</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'horizontal' | 'vertical'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'horizontal'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The layout orientation of the list.</Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
