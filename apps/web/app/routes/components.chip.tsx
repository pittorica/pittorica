import {
  Box,
  Card,
  Chip,
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
import { Chip, Flex } from '@pittorica/react';

export const Example = () => {
  return (
    <Flex gap="2">
      <Chip variant="solid" color="indigo">Active</Chip>
      <Chip variant="soft" color="teal">Success</Chip>
      <Chip variant="outline" color="crimson" onDelete={() => {}}>Removable</Chip>
    </Flex>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Chip</Heading>
          <Text size="4" color="gray" mb="6">
            Compact elements that represent an input, attribute, or action.
            Commonly used for tags, filters, and status indicators.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/chip-react
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
            <Flex gap="3" align="center" wrap="wrap" justify="center">
              <Chip variant="solid" color="indigo">
                Indigo Solid
              </Chip>
              <Chip variant="soft" color="teal">
                Teal Soft
              </Chip>
              <Chip variant="outline" color="orange">
                Orange Outline
              </Chip>
              <Chip variant="soft" color="crimson" onDelete={() => {}}>
                Deletable
              </Chip>
            </Flex>
          </Card>
        </Section>

        {/* Dark Mode Preview */}
        <Section>
          <Heading size="4" mb="4">
            Dark Mode Preview
          </Heading>
          <PittoricaTheme appearance="dark">
            <Card
              variant="outlined"
              p="9"
              style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'var(--pittorica-black)',
              }}
            >
              <Flex gap="3" align="center" wrap="wrap" justify="center">
                <Chip variant="solid" color="indigo">
                  Indigo Solid
                </Chip>
                <Chip variant="soft" color="teal">
                  Teal Soft
                </Chip>
                <Chip variant="outline" color="orange">
                  Orange Outline
                </Chip>
                <Chip variant="soft" color="crimson" onDelete={() => {}}>
                  Deletable
                </Chip>
              </Flex>
            </Card>
          </PittoricaTheme>
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
              Chip component accepts all standard Box props in addition to the
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
                    <Text size="2">'solid' | 'soft' | 'outline'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'soft'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The visual style of the chip.</Text>
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
                    <Text size="2">'indigo'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The semantic color palette.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>size</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'1' | '2' | '3'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'2'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The vertical size of the chip.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>onDelete</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">() ={'>'} void</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      Callback triggered when the delete icon is clicked.
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
