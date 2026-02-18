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
import { Box } from '@pittorica/react';

export const Example = () => {
  return (
    <Box 
      p="4" 
      style={{ 
        backgroundColor: 'var(--pittorica-indigo-3)', 
        borderRadius: 'var(--pittorica-radius-3)',
        border: '1px solid var(--pittorica-indigo-5)'
      }}
    >
      <Text>I am inside a Box with padding and custom styles.</Text>
    </Box>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Box</Heading>
          <Text size="4" color="gray" mb="6">
            The foundation of all components. A polymorphic primitive that
            provides spacing, alignment, and display utility props.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/box-react
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
            <Flex direction="column" gap="4" width="100%">
              <Box
                p="4"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: 8,
                  border: '1px solid var(--pittorica-indigo-5)',
                }}
              >
                <Text weight="bold" color="indigo">
                  Box with Padding
                </Text>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  gap: 16,
                  padding: 16,
                  background: 'var(--pittorica-teal-3)',
                  borderRadius: 8,
                }}
              >
                <Box
                  p="3"
                  style={{ background: 'white', borderRadius: 4, flex: 1 }}
                >
                  <Text align="center">Flex Child 1</Text>
                </Box>
                <Box
                  p="3"
                  style={{ background: 'white', borderRadius: 4, flex: 1 }}
                >
                  <Text align="center">Flex Child 2</Text>
                </Box>
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
              Box is the base primitive component. It supports polymorphic
              rendering via the <Code>as</Code> prop and provides the following
              utility props:
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
                    <Code>as</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">ElementType</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The HTML tag or component to render.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>display</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'none' | 'inline' | 'block' | 'inline-block' | 'flex' |
                      'inline-flex' | 'grid'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets the CSS display property.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>m, mt, mr, mb, ml, mx, my</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'0' | ... | '9'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      Margin utility props using spacing tokens.
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>p, pt, pr, pb, pl, px, py</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'0' | ... | '9'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      Padding utility props using spacing tokens.
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>width, height</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">string</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets fixed dimensions.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>position</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets the CSS position property.</Text>
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
