import {
  Box,
  Card,
  Chip,
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
import { Chip, Flex } from '@pittorica/react';

export const Example = () => {
  return (
    <Flex gap="2">
      <Chip variant="soft">React</Chip>
      <Chip variant="solid" color="indigo">TypeScript</Chip>
      <Chip variant="outline" onDelete={() => {}}>Removable</Chip>
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
            Often used for tags, filters, or choices.
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
            <Flex gap="4" align="center" wrap="wrap" justify="center">
              <Chip variant="soft" color="indigo">
                Indigo Soft
              </Chip>
              <Chip variant="solid" color="crimson">
                Crimson Solid
              </Chip>
              <Chip variant="outline" color="teal">
                Teal Outline
              </Chip>
              <Chip
                variant="soft"
                color="amber"
                onDelete={() => alert('Deleted')}
              >
                Deletable
              </Chip>
              <Chip variant="solid" size="1">
                Size 1
              </Chip>
              <Chip variant="solid" size="2">
                Size 2
              </Chip>
              <Chip variant="solid" size="3">
                Size 3
              </Chip>
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
                    <Text size="2">The visual variant of the chip.</Text>
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
                    <Text size="2">The size of the chip.</Text>
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
                    <Text size="2">The semantic color of the chip.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>startDecorator</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">ReactNode</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Icon or element to show at the start.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>endDecorator</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">ReactNode</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Icon or element to show at the end.</Text>
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
                      Callback fired when delete icon is clicked.
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
