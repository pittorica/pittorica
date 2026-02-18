import {
  Avatar,
  Badge,
  Box,
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
import { Badge, Avatar, Box } from '@pittorica/react';

export const Example = () => {
  return (
    <Flex gap="6" align="center">
      {/* Standard Notification */}
      <Badge badgeContent={5} color="indigo">
        <Box style={{ width: 40, height: 40, background: 'var(--pittorica-slate-3)', borderRadius: 4 }} />
      </Badge>

      {/* Online Status Dot */}
      <Badge variant="dot" color="success">
        <Avatar fallback="JD" />
      </Badge>

      {/* Counter with Max Value */}
      <Badge badgeContent={120} max={99} color="danger">
        <Text>Inbox</Text>
      </Badge>
    </Flex>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Badge</Heading>
          <Text size="4" color="gray" mb="6">
            Small numerical value or status descriptor for UI elements,
            typically used for notifications or status indicators.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/box-react
`}
            </Code>
          </Flex>
        </Flex>

        {/* Interactive Preview - Variants */}
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
            <Flex
              gap="8"
              align="center"
              style={{ flexWrap: 'wrap', justifyContent: 'center' }}
            >
              {/* Basic with Icon placeholder */}
              <Badge badgeContent={4} color="indigo">
                <Box
                  style={{
                    width: 40,
                    height: 40,
                    background: 'var(--pittorica-slate-4)',
                    borderRadius: 6,
                  }}
                />
              </Badge>

              {/* Avatar with notification */}
              <Badge badgeContent={1} color="red">
                <Avatar
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&q=80"
                  alt="User"
                />
              </Badge>

              {/* Status Indicator */}
              <Badge variant="dot" color="success">
                <Avatar fallback="JD" />
              </Badge>

              {/* Max Counter */}
              <Badge badgeContent={150} max={99} color="danger">
                <Box
                  p="2"
                  style={{
                    border: '1px solid var(--pittorica-slate-5)',
                    borderRadius: 4,
                  }}
                >
                  <Text size="2">Messages</Text>
                </Box>
              </Badge>
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
              Badge component accepts all standard Box props in addition to the
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
                    <Code>badgeContent</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">ReactNode</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      The content to display inside the badge.
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>variant</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'standard' | 'dot'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'standard'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The visual variant of the badge.</Text>
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
                    <Text size="2">The semantic color of the badge.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>max</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">number</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">99</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Max value to display (e.g. 99+).</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>invisible</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">boolean</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">false</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">If true, the badge is hidden.</Text>
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
