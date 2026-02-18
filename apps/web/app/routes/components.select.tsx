import { IconWorld } from '@tabler/icons-react';

import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Section,
  Select,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Select } from '@pittorica/react';

export const Example = () => {
  return (
    <Select.Root label="Region" color="teal">
      <Select.Content>
        <option value="eu">Europe</option>
        <option value="na">North America</option>
        <option value="as">Asia</option>
      </Select.Content>
    </Select.Root>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Select</Heading>
          <Text size="4" color="gray" mb="6">
            Displays a list of options for the user to pick from. Supports 5
            sizes, helper text, error states, and decorative slots for icons.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/select-react
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
              flexDirection: 'column',
              gap: 24,
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Flex gap="4" align="end" wrap="wrap">
              <Select.Root label="Standard Select" style={{ width: 200 }}>
                <Select.Content>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </Select.Content>
              </Select.Root>

              <Select.Root
                label="With Icon"
                color="teal"
                style={{ width: 200 }}
              >
                <Select.Slot>
                  <IconWorld size={16} />
                </Select.Slot>
                <Select.Content>
                  <option>Global</option>
                  <option>Local</option>
                </Select.Content>
              </Select.Root>

              <Select.Root
                label="Error State"
                error
                helperText="Please select an option"
                style={{ width: 200 }}
              >
                <Select.Content>
                  <option value="">None</option>
                  <option>Valid Choice</option>
                </Select.Content>
              </Select.Root>
            </Flex>
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
                Select.Root
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
                      <Code>label</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">ReactNode</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        The label displayed above the select.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>helperText</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">ReactNode</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Informational text below the select.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>size</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'xs' | 'sm' | 'md' | 'lg' | 'xl'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'sm'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The size of the select control.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>color</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">PittoricaColor</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'indigo'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The semantic color of the border.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>error</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">boolean</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">false</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">If true, applies the error state.</Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                Select.Content
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Box props and native HTML Select
                attributes.
              </Text>
            </Box>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
