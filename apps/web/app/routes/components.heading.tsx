import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Heading, Flex } from '@pittorica/react';

export const Example = () => {
  return (
    <Flex direction="column" gap="4">
      <Heading size="9">Hero Title</Heading>
      <Heading size="6" color="indigo">Section Heading</Heading>
      <Heading size="3" weight="medium">Small Subtitle</Heading>
    </Flex>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Heading</Heading>
          <Text size="4" color="gray" mb="6">
            A typographic component for titles and section headings. Supports
            polymorphic HTML tags (h1-h6) and responsive sizing from 1 to 9.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/heading-react
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
              gap: 16,
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Heading size="9">Heading Size 9</Heading>
            <Heading size="8">Heading Size 8</Heading>
            <Heading size="7">Heading Size 7</Heading>
            <Heading size="6">Heading Size 6</Heading>
            <Heading size="5">Heading Size 5</Heading>
            <Heading size="4">Heading Size 4</Heading>
            <Heading size="3">Heading Size 3</Heading>
            <Heading size="2">Heading Size 2</Heading>
            <Heading size="1">Heading Size 1</Heading>
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
              Heading component inherits all props from the{' '}
              <Link href="/components/text">Text</Link> component in addition to
              the following:
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
                    <Text size="2">'6'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      The size of the heading. Supports responsive objects.
                    </Text>
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
