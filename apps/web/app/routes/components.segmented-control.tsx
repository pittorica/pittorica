import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react';

import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Section,
  SegmentedControl,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { SegmentedControl } from '@pittorica/react';

export const Example = () => {
  return (
    <SegmentedControl.Root defaultValue="preview">
      <SegmentedControl.Item value="preview">Preview</SegmentedControl.Item>
      <SegmentedControl.Item value="code">Code</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Segmented Control</Heading>
          <Text size="4" color="gray" mb="6">
            A linear set of segments, each of which functions as a button. Often
            used to switch between views or modes within a specific context.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/segmented-control-react
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
              alignItems: 'center',
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <SegmentedControl.Root defaultValue="preview">
              <SegmentedControl.Item value="preview">
                Preview
              </SegmentedControl.Item>
              <SegmentedControl.Item value="code">Code</SegmentedControl.Item>
              <SegmentedControl.Item value="assets">
                Assets
              </SegmentedControl.Item>
            </SegmentedControl.Root>

            <SegmentedControl.Root defaultValue="system" color="orange">
              <SegmentedControl.Item value="light">
                <IconSun size={16} />
              </SegmentedControl.Item>
              <SegmentedControl.Item value="dark">
                <IconMoon size={16} />
              </SegmentedControl.Item>
              <SegmentedControl.Item value="system">
                <IconDeviceDesktop size={16} />
              </SegmentedControl.Item>
            </SegmentedControl.Root>
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
                SegmentedControl.Root
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
                      <Code>value</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">string</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The controlled value of the control.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>defaultValue</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">string</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The initial value of the control.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>onValueChange</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">(val: string) ={'>'} void</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Callback fired when value changes.</Text>
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
                      <Text size="2">Semantic color for all segments.</Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                SegmentedControl.Item
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Box props.
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
                      <Code>value</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">string</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The unique value of the segment.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>disabled</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">boolean</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">If true, the segment is disabled.</Text>
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
