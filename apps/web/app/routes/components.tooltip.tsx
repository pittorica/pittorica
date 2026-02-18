import { IconInfoCircle } from '@tabler/icons-react';

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
  Tooltip,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Tooltip, Text } from '@pittorica/react';
import { IconInfoCircle } from '@tabler/icons-react';

export const Example = () => {
  return (
    <Tooltip content="More information about this action" side="top">
      <IconInfoCircle size={18} />
    </Tooltip>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Tooltip</Heading>
          <Text size="4" color="gray" mb="6">
            Displays informative text when users hover over, focus on, or tap an
            element. Automatically manages positioning and overflow.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/tooltip-react
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
            <Flex align="center" gap="3">
              <Text size="4">Hover the icon for info:</Text>
              <Tooltip content="This is extra information" side="top">
                <IconInfoCircle
                  size={24}
                  style={{ cursor: 'help', color: 'var(--pittorica-indigo-9)' }}
                />
              </Tooltip>
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
              Tooltip component accepts all standard Box props in addition to
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
                    <Code>content</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">ReactNode</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      The content displayed inside the tooltip.
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>side</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'top' | 'bottom'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'top'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The preferred side of the trigger.</Text>
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
