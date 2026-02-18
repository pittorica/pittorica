import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  PittoricaTheme,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { PittoricaTheme, Box, Text } from '@pittorica/react';

export const Example = () => {
  return (
    <PittoricaTheme sourceColor="crimson" appearance="dark" radius="large">
      <Box p="4">
        <Text>I am themed with crimson color and dark appearance.</Text>
      </Box>
    </PittoricaTheme>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Theme</Heading>
          <Text size="4" color="gray" mb="6">
            A provider component that manages the visual theme of your
            application. Controls primary colors, light/dark mode, and global
            border radius.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/theme-react
`}
            </Code>
          </Flex>
        </Flex>

        {/* Interactive Preview */}
        <Section>
          <Heading size="4" mb="4">
            Appearance & Colors
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
            <Flex gap="4" wrap="wrap">
              <PittoricaTheme
                sourceColor="indigo"
                appearance="light"
                style={{
                  padding: 24,
                  background: 'white',
                  borderRadius: 12,
                  border: '1px solid var(--pittorica-slate-4)',
                  flex: 1,
                  minWidth: 200,
                }}
              >
                <Heading size="3" mb="2">
                  Light Theme
                </Heading>
                <Text size="2">Indigo primary color.</Text>
              </PittoricaTheme>

              <PittoricaTheme
                sourceColor="crimson"
                appearance="dark"
                style={{
                  padding: 24,
                  background: '#1a1a1a',
                  borderRadius: 12,
                  color: 'white',
                  flex: 1,
                  minWidth: 200,
                }}
              >
                <Heading size="3" mb="2" color="white">
                  Dark Theme
                </Heading>
                <Text size="2">Crimson primary color.</Text>
              </PittoricaTheme>
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
              Theme component is a provider that sets the design system context:
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
                    <Code>sourceColor</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">PittoricaSourceColor</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'indigo'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The primary source color for tokens.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>appearance</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'light' | 'dark' | 'inherit'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'light'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The visual appearance mode.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>radius</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'none' | 'small' | 'medium' | 'large' | 'full'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'medium'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The global border radius scale.</Text>
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
