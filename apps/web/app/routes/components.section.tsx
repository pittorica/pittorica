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
import { Section, Heading, Text } from '@pittorica/react';

export const Example = () => {
  return (
    <Section size="3">
      <Heading mb="2">Main Section</Heading>
      <Text>Content goes here.</Text>
    </Section>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Section</Heading>
          <Text size="4" color="gray" mb="6">
            A layout component used to define a significant section of content,
            providing consistent vertical padding and responsive spacing.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/section-react
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
              gap: 16,
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Section
              size="1"
              style={{
                background: 'var(--pittorica-indigo-3)',
                textAlign: 'center',
              }}
            >
              <Text weight="bold">Section Size 1</Text>
            </Section>
            <Section
              size="2"
              style={{
                background: 'var(--pittorica-indigo-4)',
                textAlign: 'center',
              }}
            >
              <Text weight="bold">Section Size 2</Text>
            </Section>
            <Section
              size="3"
              style={{
                background: 'var(--pittorica-indigo-5)',
                textAlign: 'center',
              }}
            >
              <Text weight="bold">Section Size 3</Text>
            </Section>
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
              Section component accepts all standard Box props in addition to
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
                    <Text size="2">'1' | '2' | '3'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'3'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The vertical padding size.</Text>
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
