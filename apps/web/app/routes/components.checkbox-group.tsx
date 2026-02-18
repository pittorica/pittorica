import {
  Box,
  Card,
  CheckboxGroup,
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
import { CheckboxGroup } from '@pittorica/react';

export const Example = () => {
  return (
    <CheckboxGroup defaultValue={['apple', 'orange']} color="teal">
      <CheckboxGroup.Item value="apple" label="Apple" />
      <CheckboxGroup.Item value="orange" label="Orange" />
      <CheckboxGroup.Item value="banana" label="Banana" />
    </CheckboxGroup>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Checkbox Group</Heading>
          <Text size="4" color="gray" mb="6">
            Orchestrates multiple checkboxes into a single controlled or
            uncontrolled group with shared properties.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/checkbox-group-react
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
            <Flex gap="9">
              <Box>
                <Text weight="bold" mb="3">
                  Vertical (Default)
                </Text>
                <CheckboxGroup defaultValue={['1']}>
                  <CheckboxGroup.Item value="1" label="Selection 1" />
                  <CheckboxGroup.Item value="2" label="Selection 2" />
                  <CheckboxGroup.Item value="3" label="Selection 3" />
                </CheckboxGroup>
              </Box>

              <Box>
                <Text weight="bold" mb="3">
                  Horizontal
                </Text>
                <CheckboxGroup orientation="horizontal" color="crimson">
                  <CheckboxGroup.Item value="s" label="Small" />
                  <CheckboxGroup.Item value="m" label="Medium" />
                  <CheckboxGroup.Item value="l" label="Large" />
                </CheckboxGroup>
              </Box>
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
                CheckboxGroup.Root
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Box props.
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
                      <Code>value</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">string[]</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The controlled value of the group.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>defaultValue</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">string[]</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">[]</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The initial value of the group.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>onValueChange</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">(val: string[]) ={'>'} void</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Callback fired when value changes.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>orientation</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'horizontal' | 'vertical'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'vertical'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Layout orientation.</Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                CheckboxGroup.Item
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Checkbox props.
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
                      <Code>value</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">string</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The unique value of the item.</Text>
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
