import {
  Box,
  Button,
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
import { Button, Flex } from '@pittorica/react';

export const Example = () => {
  return (
    <Flex gap="4" align="center">
      {/* Hierarchy variants */}
      <Button variant="filled">Filled (Primary)</Button>
      <Button variant="tonal">Tonal (Secondary)</Button>
      <Button variant="outlined">Outlined</Button>
      
      {/* Semantic colors */}
      <Button color="crimson">Crimson Action</Button>
      <Button variant="text" color="slate">Cancel</Button>
    </Flex>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Button</Heading>
          <Text size="4" color="gray" mb="6">
            An interactive element used to trigger actions or navigate. Supports
            MD3 hierarchy variants, multiple sizes, and semantic color tokens.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/button-react
`}
            </Code>
          </Flex>
        </Flex>

        {/* Interactive Preview - Variants */}
        <Section>
          <Heading size="4" mb="4">
            Variants Gallery
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
              <Button variant="elevated">Elevated</Button>
              <Button variant="filled">Filled</Button>
              <Button variant="tonal">Tonal</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
            </Flex>
          </Card>
        </Section>

        {/* Interactive Preview - Colors & States */}
        <Section>
          <Heading size="4" mb="4">
            Colors & States
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
              <Button color="indigo">Indigo</Button>
              <Button color="crimson">Crimson</Button>
              <Button color="teal" variant="tonal">
                Teal Tonal
              </Button>
              <Button color="red" variant="outlined">
                Danger
              </Button>
              <Button variant="filled" disabled>
                Disabled
              </Button>
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
              Button component accepts all standard Box props in addition to the
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
                    <Text size="2">
                      'filled' | 'tonal' | 'outlined' | 'elevated' | 'text'
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
                    <Code>size</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'xs' | 'sm' | 'md' | 'lg' | 'xl'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'sm'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The size of the button.</Text>
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
