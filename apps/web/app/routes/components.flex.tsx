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
import { Flex, Box } from '@pittorica/react';

export const Example = () => {
  return (
    <Flex gap="4" align="center" justify="between">
      <Box p="4" style={{ background: 'var(--pittorica-indigo-3)' }}>Item 1</Box>
      <Box p="4" style={{ background: 'var(--pittorica-teal-3)' }}>Item 2</Box>
    </Flex>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Flex</Heading>
          <Text size="4" color="gray" mb="6">
            A layout component for building responsive and fluid one-dimensional
            layouts using CSS Flexbox. Supports responsive objects for
            direction, gap, and alignment.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/flex-react
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
                Responsive Direction
              </Text>
              <Flex
                direction={{ initial: 'column', md: 'row' }}
                gap={{ initial: '2', md: '6' }}
              >
                <Box
                  p="4"
                  style={{ background: 'var(--pittorica-indigo-3)', flex: 1 }}
                >
                  Item 1
                </Box>
                <Box
                  p="4"
                  style={{ background: 'var(--pittorica-indigo-4)', flex: 1 }}
                >
                  Item 2
                </Box>
                <Box
                  p="4"
                  style={{ background: 'var(--pittorica-indigo-5)', flex: 1 }}
                >
                  Item 3
                </Box>
              </Flex>
            </Box>

            <Box>
              <Text weight="bold" mb="2">
                Fluid Basis (auto-wrapping)
              </Text>
              <Flex basis="auto-200px" gap="4" width="100%">
                {[1, 2, 3, 4].map((i) => (
                  <Box
                    key={i}
                    p="4"
                    style={{
                      background: 'var(--pittorica-teal-3)',
                      flexGrow: 1,
                    }}
                  >
                    Wrapped {i}
                  </Box>
                ))}
              </Flex>
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
              Flex component accepts all standard Box props in addition to the
              following (all support responsive object syntax):
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
                    <Code>direction</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'row' | 'column' | 'row-reverse' | 'column-reverse'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets the flex-direction.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>justify</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'start' | 'center' | 'end' | 'between' | 'around' |
                      'evenly'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets the justify-content.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>align</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'start' | 'center' | 'end' | 'baseline' | 'stretch'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets the align-items.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>wrap</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'nowrap' | 'wrap' | 'wrap-reverse'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets the flex-wrap.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>gap</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'0' | ... | '9'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Spacing between items.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>basis</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">string</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Supports 'auto-px' for fluid layouts.</Text>
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
