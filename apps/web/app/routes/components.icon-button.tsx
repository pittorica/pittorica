import {
  IconBell,
  IconPlus,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';

import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  IconButton,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { IconButton } from '@pittorica/react';
import { IconPlus } from '@tabler/icons-react';

export const Example = () => {
  return (
    <IconButton variant="filled" color="indigo">
      <IconPlus size={20} />
    </IconButton>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Icon Button</Heading>
          <Text size="4" color="gray" mb="6">
            A button component optimized for displaying a single icon. Supports
            all standard button variants and circular/square scaling.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/icon-button-react
`}
            </Code>
          </Flex>
        </Flex>

        {/* Interactive Preview */}
        <Section>
          <Heading size="4" mb="4">
            Variants & Colors
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
            <Flex gap="4" wrap="wrap" justify="center">
              <IconButton variant="filled" color="indigo">
                <IconPlus size={20} />
              </IconButton>
              <IconButton variant="tonal" color="teal">
                <IconSearch size={20} />
              </IconButton>
              <IconButton variant="outlined" color="slate">
                <IconSettings size={20} />
              </IconButton>
              <IconButton variant="text" color="red">
                <IconTrash size={20} />
              </IconButton>
              <IconButton variant="filled" color="amber">
                <IconBell size={20} />
              </IconButton>
            </Flex>
          </Card>
        </Section>

        <Section>
          <Heading size="4" mb="4">
            Sizes
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
            <Flex gap="4" align="center" justify="center">
              <IconButton size="1">
                <IconPlus size={14} />
              </IconButton>
              <IconButton size="2">
                <IconPlus size={16} />
              </IconButton>
              <IconButton size="3">
                <IconPlus size={20} />
              </IconButton>
              <IconButton size="4">
                <IconPlus size={24} />
              </IconButton>
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
              Icon Button component accepts all standard Box props in addition
              to the following:
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
                      'filled' | 'tonal' | 'outlined' | 'text'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'filled'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The visual variant of the button.</Text>
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
                    <Text size="2">The semantic color of the button.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>size</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'1' | '2' | '3' | '4'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'3'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The size of the button.</Text>
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
                    <Text size="2">false</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">If true, the button will be disabled.</Text>
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
