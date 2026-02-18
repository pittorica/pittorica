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
import { Container, Box, Text } from '@pittorica/react';

export const Example = () => {
  return (
    <Container maxWidth="md">
      <Box p="4" style={{ backgroundColor: 'var(--pittorica-slate-3)' }}>
        <Text>I am centered and constrained to a medium breakpoint.</Text>
      </Box>
    </Container>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Container</Heading>
          <Text size="4" color="gray" mb="6">
            A layout component that centers your content horizontally and
            provides responsive constraints based on design system breakpoints.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/container-react
`}
            </Code>
          </Flex>
        </Flex>

        {/* Interactive Preview */}
        <Section>
          <Heading size="4" mb="4">
            Breakpoints Visualization
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
            <Container
              maxWidth="xs"
              style={{ background: 'var(--pittorica-indigo-3)', padding: 12 }}
            >
              <Text align="center">xs (extra small)</Text>
            </Container>
            <Container
              maxWidth="sm"
              style={{ background: 'var(--pittorica-indigo-4)', padding: 12 }}
            >
              <Text align="center">sm (small)</Text>
            </Container>
            <Container
              maxWidth="md"
              style={{ background: 'var(--pittorica-indigo-5)', padding: 12 }}
            >
              <Text align="center">md (medium)</Text>
            </Container>
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
              Container component accepts all standard Box props in addition to
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
                    <Code>maxWidth</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'lg'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The maximum width of the container.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>fixed</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">boolean</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">false</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      Whether to adapt width to current breakpoint.
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>disableGutters</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">boolean</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">false</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      Removes default left and right padding.
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
