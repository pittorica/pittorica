import {
  Box,
  Card,
  Code,
  Container,
  Divider,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Divider, Box } from '@pittorica/react';

export const Example = () => {
  return (
    <Box>
      <Divider variant="solid" />
      <Divider variant="wave" color="indigo" />
      <Divider>OR</Divider>
    </Box>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Divider</Heading>
          <Text size="4" color="gray" mb="6">
            A component used to separate content with support for various
            patterns, SVG waves, and text labels.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/divider-react
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
              gap: 32,
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Box>
              <Text size="2" color="gray" mb="2">
                Solid (Default)
              </Text>
              <Divider />
            </Box>

            <Box>
              <Text size="2" color="gray" mb="2">
                Wave Pattern
              </Text>
              <Divider variant="wave" color="indigo" />
            </Box>

            <Box>
              <Text size="2" color="gray" mb="2">
                Scallop Pattern
              </Text>
              <Divider variant="scallop" color="crimson" />
            </Box>

            <Box>
              <Text size="2" color="gray" mb="2">
                With Text
              </Text>
              <Divider>SECTION BREAK</Divider>
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
              Divider component accepts all standard Box props in addition to
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
                    <Code>variant</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'solid' | 'wave' | 'zigzag' | 'square' | 'scallop' |
                      'dots' | 'dashed'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'solid'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The visual pattern of the divider.</Text>
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
                    <Text size="2">'slate'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The semantic color of the divider.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>thickness</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">string | number</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'1px'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Line thickness (for solid variant).</Text>
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
