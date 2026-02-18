import {
  Box,
  Card,
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
import { Text, Flex } from '@pittorica/react';

export const Example = () => {
  return (
    <Flex direction="column" gap="4">
      <Text size="9">Large Hero Text</Text>
      <Text size="4" color="indigo" weight="medium">Indigo Informational Text</Text>
      <Text align="center" truncate style={{ width: 200 }}>
        Truncated text that goes beyond the container limit.
      </Text>
    </Flex>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Text</Heading>
          <Text size="4" color="gray" mb="6">
            The foundational typographic component. Supports 9 sizes, multiple
            weights, alignments, and responsive behaviors.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/text-react
`}
            </Code>
          </Flex>
        </Flex>

        {/* Interactive Preview */}
        <Section>
          <Heading size="4" mb="4">
            Sizing Scale
          </Heading>
          <Card
            variant="outlined"
            p="9"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Text size="9">Text Size 9</Text>
            <Text size="8">Text Size 8</Text>
            <Text size="7">Text Size 7</Text>
            <Text size="6">Text Size 6</Text>
            <Text size="5">Text Size 5</Text>
            <Text size="4">Text Size 4</Text>
            <Text size="3">Text Size 3</Text>
            <Text size="2">Text Size 2</Text>
            <Text size="1">Text Size 1</Text>
          </Card>
        </Section>

        <Section>
          <Heading size="4" mb="4">
            Weights & Colors
          </Heading>
          <Card
            variant="outlined"
            p="9"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Text weight="light">Light Weight Text</Text>
            <Text weight="regular">Regular Weight Text</Text>
            <Text weight="medium">Medium Weight Text</Text>
            <Text weight="bold">Bold Weight Text</Text>
            <Text color="indigo">Indigo Semantic Color</Text>
            <Text color="crimson">Crimson Semantic Color</Text>
            <Text color="teal">Teal Semantic Color</Text>
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
            <Text mb="4" color="gray">
              Text component accepts all standard Box props in addition to the
              following:
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
                    <Code>size</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'1' | ... | '9'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      The size of the text. Supports responsive objects.
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>weight</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'light' | 'regular' | 'medium' | 'bold'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'regular'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The font weight of the text.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>align</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'left' | 'center' | 'right'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Text alignment.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>truncate</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">boolean</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">false</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">If true, adds ellipsis on overflow.</Text>
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
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The semantic color of the text.</Text>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
