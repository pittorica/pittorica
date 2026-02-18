import {
  Box,
  Card,
  Chip,
  Code,
  Container,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Table, Text, Chip } from '@pittorica/react';

export const Example = () => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Status</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell><Text weight="bold">Danilo C.</Text></Table.Cell>
          <Table.Cell><Chip color="success">Active</Chip></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Table</Heading>
          <Text size="4" color="gray" mb="6">
            A component for displaying data in a structured tabular format.
            Includes support for headers, bodies, alignment, and responsive
            containers.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/table-react
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
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Full name</Table.ColumnHeader>
                  <Table.ColumnHeader>Email</Table.ColumnHeader>
                  <Table.ColumnHeader>Group</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Text weight="bold">Danilo C. De Rossi</Text>
                  </Table.Cell>
                  <Table.Cell>danilo@pittorica.it</Table.Cell>
                  <Table.Cell>
                    <Chip color="indigo" size="1">
                      Developer
                    </Chip>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Text weight="bold">Zahra S. Smith</Text>
                  </Table.Cell>
                  <Table.Cell>zahra@pittorica.it</Table.Cell>
                  <Table.Cell>
                    <Chip color="teal" size="1">
                      Admin
                    </Chip>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Text weight="bold">Marco V. Rossi</Text>
                  </Table.Cell>
                  <Table.Cell>marco@pittorica.it</Table.Cell>
                  <Table.Cell>
                    <Chip color="slate" size="1">
                      Viewer
                    </Chip>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
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

            <Box mb="6">
              <Heading size="3" mb="3">
                Table.Root
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Box props and native HTML Table attributes.
              </Text>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                Table.Cell / Table.ColumnHeader
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
                      <Code>align</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'left' | 'center' | 'right'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'left'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Text alignment within the cell.</Text>
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
