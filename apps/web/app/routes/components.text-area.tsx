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
  TextArea,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { TextArea, Flex } from '@pittorica/react';

export const Example = () => {
  return (
    <TextArea.Root label="Bio" helperText="Tell us about yourself.">
      <TextArea.Content placeholder="Write something..." autoResize />
    </TextArea.Root>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Text Area</Heading>
          <Text size="4" color="gray" mb="6">
            A multi-line text input control. Supports multiple sizes, manual or
            automatic resizing, and standard form features like labels and
            errors.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/text-area-react
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
            <TextArea.Root label="Standard Bio" style={{ width: '400px' }}>
              <TextArea.Content placeholder="Tell us your story..." />
            </TextArea.Root>

            <TextArea.Root
              label="Auto-Resizing"
              color="indigo"
              helperText="This field grows vertically as you type."
              style={{ width: '400px' }}
            >
              <TextArea.Content
                placeholder="Start typing a long text..."
                autoResize
              />
            </TextArea.Root>

            <TextArea.Root
              label="Error State"
              error
              helperText="Message is too short."
              style={{ width: '400px' }}
            >
              <TextArea.Content placeholder="Oops..." />
            </TextArea.Root>
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

            <Box mb="6">
              <Heading size="3" mb="3">
                TextArea.Root
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Box props in addition to the following:
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
                      <Code>label</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">ReactNode</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The label displayed above the field.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>helperText</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">ReactNode</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Informational text below the field.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>size</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'xs' | 'sm' | 'md' | 'lg' | 'xl'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'sm'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The size of the textarea control.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>error</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">boolean</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">false</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">If true, applies the error state.</Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                TextArea.Content
              </Heading>
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
                      <Code>autoResize</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">boolean</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">false</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        Automatically adjusts height to content.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
