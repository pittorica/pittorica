import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Link, Flex } from '@pittorica/react';

export const Example = () => {
  return (
    <Flex gap="4">
      <Link href="https://google.com" target="_blank">External Link</Link>
      <Link color="crimson" underline="always">Important Action</Link>
    </Flex>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Link</Heading>
          <Text size="4" color="gray" mb="6">
            A typographic component for navigation. Supports customizable
            underline behaviors, semantic colors, and polymorphic rendering.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/link-react
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
              gap: 16,
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Text size="4">
              Visit the{' '}
              <Link href="#" color="indigo">
                Pittorica Documentation
              </Link>{' '}
              to learn more.
            </Text>
            <Text size="4">
              <Link href="#" underline="always">
                This link is always underlined.
              </Link>
            </Text>
            <Text size="4">
              <Link href="#" color="crimson" underline="none">
                Crimson link with no underline.
              </Link>
            </Text>
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
              Link component inherits all props from the{' '}
              <Link href="/components/text">Text</Link> component in addition to
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
                    <Code>underline</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'always' | 'hover' | 'none'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'hover'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Controls the underline behavior.</Text>
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
