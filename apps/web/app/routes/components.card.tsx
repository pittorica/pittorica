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
import { Card, Flex, Avatar, Heading, Text, Box } from '@pittorica/react';

export const Example = () => {
  return (
    <Card style={{ width: 350, padding: 20 }}>
      <Flex gap="3" align="center" mb="3">
        <Avatar fallback="JD" />
        <Box>
          <Heading size="3">Jane Doe</Heading>
          <Text color="slate" size="2">Software Engineer</Text>
        </Box>
      </Flex>
      <Text>
        Building delightful user interfaces with Pittorica Design System.
      </Text>
    </Card>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Card</Heading>
          <Text size="4" color="gray" mb="6">
            A flexible container for content and actions. Supports surface
            variants and glassmorphism effects.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/card-react
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
            <Flex gap="6" wrap="wrap" justify="center">
              <Card style={{ width: 300, padding: 20 }}>
                <Heading size="4" mb="2">
                  Surface Card
                </Heading>
                <Text color="slate">
                  Default card style with a subtle shadow and background.
                </Text>
              </Card>

              <Card variant="outlined" style={{ width: 300, padding: 20 }}>
                <Heading size="4" mb="2">
                  Outlined Card
                </Heading>
                <Text color="slate">
                  A bordered card with no shadow, ideal for minimal UIs.
                </Text>
              </Card>

              <Box
                style={{
                  background: 'var(--pittorica-indigo-9)',
                  padding: 40,
                  borderRadius: 12,
                }}
              >
                <Card translucent style={{ width: 300, padding: 20 }}>
                  <Heading size="4" mb="2" color="white">
                    Glass Card
                  </Heading>
                  <Text color="white" style={{ opacity: 0.8 }}>
                    Translucent card with blur effect for overlaying content.
                  </Text>
                </Card>
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
            <Text mb="4" color="gray">
              Card component accepts all standard Box props in addition to the
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
                    <Code>variant</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'surface' | 'outlined' | 'ghost'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'surface'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The visual variant of the card.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>translucent</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">boolean</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">false</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      If true, applies a glassmorphism effect.
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
