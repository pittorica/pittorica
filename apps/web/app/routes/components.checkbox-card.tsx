import {
  Box,
  Card,
  CheckboxCard,
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
import { CheckboxCard, Flex, Heading, Text } from '@pittorica/react';

export const Example = () => {
  return (
    <CheckboxCard.Root defaultValue={['1']}>
      <CheckboxCard.Item value="1" style={{ width: 200 }}>
        <Flex direction="column" gap="1">
          <Heading size="2">Basic</Heading>
          <Text color="slate" size="2">Free forever for individuals</Text>
        </Flex>
      </CheckboxCard.Item>
      <CheckboxCard.Item value="2" style={{ width: 200 }}>
        <Flex direction="column" gap="1">
          <Heading size="2">Pro</Heading>
          <Text color="slate" size="2">$12/month per user</Text>
        </Flex>
      </CheckboxCard.Item>
    </CheckboxCard.Root>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Checkbox Card</Heading>
          <Text size="4" color="gray" mb="6">
            A card-based selection control that functions like a checkbox,
            allowing for rich content within each option.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/checkbox-card-react
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
            <CheckboxCard orientation="horizontal" defaultValue={['1']}>
              <CheckboxCard.Item value="1" style={{ width: '200px' }}>
                <Flex direction="column" gap="1">
                  <Heading size="3">Essential</Heading>
                  <Text color="slate" size="2">
                    All core features included.
                  </Text>
                </Flex>
              </CheckboxCard.Item>
              <CheckboxCard.Item value="2" style={{ width: '200px' }}>
                <Flex direction="column" gap="1">
                  <Heading size="3">Advanced</Heading>
                  <Text color="slate" size="2">
                    Plus automation & insights.
                  </Text>
                </Flex>
              </CheckboxCard.Item>
            </CheckboxCard>
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
                CheckboxCard.Root
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
                CheckboxCard.Item
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Card props.
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
