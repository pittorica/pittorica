import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  RadioGroup,
  RadioGroupItem,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { RadioGroup, RadioGroupItem, Flex, Text } from '@pittorica/react';

export const Example = () => {
  return (
    <RadioGroup defaultValue="1">
      <Flex direction="column" gap="2">
        <Flex align="center" gap="2">
          <RadioGroupItem value="1" id="r1" />
          <Text as="label" htmlFor="r1">Option One</Text>
        </Flex>
        <Flex align="center" gap="2">
          <RadioGroupItem value="2" id="r2" />
          <Text as="label" htmlFor="r2">Option Two</Text>
        </Flex>
      </Flex>
    </RadioGroup>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Radio Group</Heading>
          <Text size="4" color="gray" mb="6">
            A set of checkable buttons where no more than one button can be
            checked at a time. Handles focus management and keyboard interaction
            automatically.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/radio-group-react
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
            <RadioGroup defaultValue="comfortable" color="indigo">
              <Flex direction="column" gap="4">
                <Flex align="center" gap="2">
                  <RadioGroupItem value="compact" id="g1" />
                  <Text as="label" htmlFor="g1" style={{ cursor: 'pointer' }}>
                    Compact density
                  </Text>
                </Flex>
                <Flex align="center" gap="2">
                  <RadioGroupItem value="comfortable" id="g2" />
                  <Text as="label" htmlFor="g2" style={{ cursor: 'pointer' }}>
                    Comfortable density
                  </Text>
                </Flex>
                <Flex align="center" gap="2">
                  <RadioGroupItem value="loose" id="g3" />
                  <Text as="label" htmlFor="g3" style={{ cursor: 'pointer' }}>
                    Loose density
                  </Text>
                </Flex>
              </Flex>
            </RadioGroup>
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
                RadioGroup
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
                      <Code>value</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">string</Text>
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
                      <Text size="2">string</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
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
                      <Text size="2">(val: string) ={'>'} void</Text>
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
                      <Code>color</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">PittoricaColor</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'indigo'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Semantic color for all items.</Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                RadioGroupItem
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Radio props.
              </Text>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Prop</Table.ColumnHeader>
                    <Table.ColumnHeader>Type</Table.ColumnHeader>
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
