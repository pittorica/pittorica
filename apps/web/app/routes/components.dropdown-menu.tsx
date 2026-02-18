import {
  IconChevronDown,
  IconLogout,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';

import {
  Box,
  Button,
  Card,
  Code,
  Container,
  DropdownMenu,
  DropdownMenuItem,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { DropdownMenu, DropdownMenuItem, Button } from '@pittorica/react';

export const Example = () => {
  return (
    <DropdownMenu
      itemCount={3}
      renderTrigger={({ ref, onClick }) => (
        <Button ref={ref} onClick={onClick}>
          Options
        </Button>
      )}
    >
      <DropdownMenuItem index={0}>Profile</DropdownMenuItem>
      <DropdownMenuItem index={1}>Settings</DropdownMenuItem>
      <DropdownMenuItem index={2}>Logout</DropdownMenuItem>
    </DropdownMenu>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Dropdown Menu</Heading>
          <Text size="4" color="gray" mb="6">
            Displays a list of options, typically triggered by a button, used
            for navigation or actions.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/dropdown-menu-react
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
            <DropdownMenu
              itemCount={3}
              renderTrigger={({ ref, onClick }) => (
                <span
                  ref={ref as React.RefObject<HTMLSpanElement>}
                  onClick={onClick}
                >
                  <Button size="lg">
                    Account Options
                    <IconChevronDown size={18} style={{ marginLeft: 8 }} />
                  </Button>
                </span>
              )}
            >
              <DropdownMenuItem index={0} icon={<IconUser size={18} />}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem index={1} icon={<IconSettings size={18} />}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                index={2}
                icon={<IconLogout size={18} />}
                style={{ color: 'var(--pittorica-red-9)' }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenu>
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
                DropdownMenu
              </Heading>
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
                      <Code>renderTrigger</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        (props: {'{'} ref, onClick {'}'}) ={'>'} ReactNode
                      </Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        Function that returns the trigger element.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>itemCount</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">number</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        Total number of items for navigation.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                DropdownMenuItem
              </Heading>
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
                      <Code>index</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">number</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        The unique index for keyboard navigation.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>icon</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">ReactNode</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        Optional icon to display at the start.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>shortcut</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">string</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Optional keyboard shortcut hint.</Text>
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
