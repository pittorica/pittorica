import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Section,
  Table,
  Tabs,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Tabs, Box, Text } from '@pittorica/react';

export const Example = () => {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab One</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab Two</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <Text>Content for the first tab.</Text>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <Text>Content for the second tab.</Text>
      </Tabs.Content>
    </Tabs.Root>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Tabs</Heading>
          <Text size="4" color="gray" mb="6">
            A set of layered sections of content displayed one at a time.
            Supports keyboard navigation (arrows, home, end) and Roving
            Tabindex.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/tabs-react
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
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Tabs.Root defaultValue="account">
              <Tabs.List>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="password">Password</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="account">
                <Box p="4">
                  <Text weight="bold" mb="2">
                    Account Details
                  </Text>
                  <Text color="slate">
                    Manage your profile information and account preferences
                    here.
                  </Text>
                </Box>
              </Tabs.Content>

              <Tabs.Content value="password">
                <Box p="4">
                  <Text weight="bold" mb="2">
                    Password
                  </Text>
                  <Text color="slate">
                    Change your security credentials and set up two-factor
                    authentication.
                  </Text>
                </Box>
              </Tabs.Content>

              <Tabs.Content value="settings">
                <Box p="4">
                  <Text weight="bold" mb="2">
                    General Settings
                  </Text>
                  <Text color="slate">
                    Customize your experience and notification preferences.
                  </Text>
                </Box>
              </Tabs.Content>
            </Tabs.Root>
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
                Tabs.Root
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
                      <Text size="2">
                        The controlled value of the active tab.
                      </Text>
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
                      <Text size="2">The initial active tab value.</Text>
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
                      <Text size="2">
                        Callback fired when active tab changes.
                      </Text>
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
                      <Text size="2">
                        Semantic color for the active indicator.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box mb="6">
              <Heading size="3" mb="3">
                Tabs.Trigger
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
                      <Text size="2">
                        The unique value associated with the tab.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                Tabs.Content
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
                      <Text size="2">
                        The value matching the trigger to show.
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
