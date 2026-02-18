import {
  Avatar,
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  HoverCard,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { HoverCard, Text, Flex, Avatar, Box, Heading } from '@pittorica/react';

export const Example = () => {
  return (
    <Text>
      Hover over{' '}
      <HoverCard
        renderTrigger={({ ref }) => (
          <span ref={ref} style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            @dcdavidev
          </span>
        )}
      >
        <Flex gap="3" align="center">
          <Avatar fallback="DC" color="indigo" />
          <Box>
            <Heading size="3">Davide C.</Heading>
            <Text size="2" color="slate">@dcdavidev</Text>
          </Box>
        </Flex>
      </HoverCard>
    </Text>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Hover Card</Heading>
          <Text size="4" color="gray" mb="6">
            Displays a preview of content when the user hovers over a trigger
            element. Ideal for showing additional details about users, links, or
            entities.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/hover-card-react
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
            <Text size="4">
              Check out the profile of{' '}
              <HoverCard
                renderTrigger={({ ref }) => (
                  <span
                    ref={ref as React.RefObject<HTMLSpanElement>}
                    style={{
                      fontWeight: 'bold',
                      textDecoration: 'underline',
                      cursor: 'help',
                      color: 'var(--pittorica-indigo-9)',
                    }}
                  >
                    @pittorica_ui
                  </span>
                )}
              >
                <Flex direction="column" gap="3" style={{ width: 240 }}>
                  <Flex gap="3" align="center">
                    <Avatar fallback="P" color="indigo" />
                    <Box>
                      <Heading size="3">Pittorica UI</Heading>
                      <Text size="2" color="slate">
                        @pittorica_ui
                      </Text>
                    </Box>
                  </Flex>
                  <Text size="2">
                    A painterly, CSS-first UI framework built for modern
                    interfaces.
                  </Text>
                  <Flex gap="4">
                    <Text size="1">
                      <strong>1.2k</strong> Following
                    </Text>
                    <Text size="1">
                      <strong>45k</strong> Followers
                    </Text>
                  </Flex>
                </Flex>
              </HoverCard>
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
                    <Code>renderTrigger</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      (props: {'{'} ref {'}'}) ={'>'} ReactNode
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      Function that returns the trigger element.
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>openDelay</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">number</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">500</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Delay in ms before opening.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>closeDelay</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">number</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">300</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Delay in ms before closing.</Text>
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
