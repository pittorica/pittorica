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
import { Code } from '@pittorica/react';

export const Example = () => {
  return (
    <Code language="typescript" filename="Example.tsx" showLineNumbers>
      {\`const greeting = "Hello, Pittorica!";
console.log(greeting);\`}
    </Code>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Code</Heading>
          <Text size="4" color="gray" mb="6">
            A component for displaying code snippets with syntax highlighting,
            copy-to-clipboard functionality, and a dedicated header for file
            names.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/code-react
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
            <Box>
              <Text weight="bold" mb="2">
                Inline Code
              </Text>
              <Text>
                You can use <Code>npm install</Code> to add packages to your
                project.
              </Text>
            </Box>

            <Box>
              <Text weight="bold" mb="2">
                Code Block
              </Text>
              <Code language="javascript" filename="math.js" showLineNumbers>
                {`function add(a, b) {\n  return a + b;\n}\n\nexport default add;`}
              </Code>
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
            <Text mb="4" color="gray">
              Code component accepts all standard Box props in addition to the
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
                    <Code>language</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">string</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'typescript'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      The programming language for highlighting.
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>showLineNumbers</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">boolean</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">true</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Whether to display line numbers.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>filename</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">string</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      Optional file name displayed in header.
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
