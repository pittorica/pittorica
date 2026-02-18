import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Inset,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Card, Inset, Text, Box } from '@pittorica/react';

export const Example = () => {
  return (
    <Card style={{ width: 300 }}>
      <Inset side="top">
        <img src="https://picsum.photos/id/10/400/200" alt="Cover" />
      </Inset>
      <Box p="4">
        <Text>Content inside the card with a full-bleed top image.</Text>
      </Box>
    </Card>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Inset</Heading>
          <Text size="4" color="gray" mb="6">
            A layout component used to stretch content to the edges of its
            container. Often used for full-bleed images or backgrounds within
            cards and panels.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/inset-react
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
            <Card style={{ width: '320px', overflow: 'hidden' }}>
              <Inset side="top">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400"
                  alt="Abstract"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                  }}
                />
              </Inset>
              <Box p="4">
                <Heading size="3" mb="2">
                  Project Title
                </Heading>
                <Text size="2" color="slate">
                  This card uses an Inset component to display the image without
                  any padding at the top and sides.
                </Text>
              </Box>
            </Card>
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
              Inset component accepts all standard Box props in addition to the
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
                    <Code>side</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'all' | 'x' | 'y' | 'top' | 'bottom'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'all'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Which sides should be inset.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>clip</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">boolean</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">true</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      Whether to clip content to parent radius.
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
