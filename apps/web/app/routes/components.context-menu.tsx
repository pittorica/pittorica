import {
  Box,
  Card,
  Code,
  Container,
  ContextMenu as PittoricaContextMenu,
  ContextMenuItem,
  ContextMenuSub,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { ContextMenu, ContextMenuItem, ContextMenuSub, Box } from '@pittorica/react';

export const Example = () => {
  return (
    <ContextMenu
      itemCount={3}
      trigger={
        <Box p="9" style={{ border: '2px dashed var(--pittorica-slate-5)', textAlign: 'center' }}>
          Right click here
        </Box>
      }
    >
      <ContextMenuItem index={0}>Copy</ContextMenuItem>
      <ContextMenuItem index={1}>Paste</ContextMenuItem>
      <ContextMenuSub label="Share..." index={2} itemCount={2}>
        <ContextMenuItem index={0}>Email</ContextMenuItem>
        <ContextMenuItem index={1}>Social Media</ContextMenuItem>
      </ContextMenuSub>
    </ContextMenu>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Context Menu</Heading>
          <Text size="4" color="gray" mb="6">
            Displays a menu of actions triggered by a right-click or long-press.
            Supports nested submenus and keyboard navigation.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/context-menu-react
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
            <PittoricaContextMenu
              itemCount={3}
              trigger={
                <Box
                  p="9"
                  style={{
                    border: '2px dashed var(--pittorica-slate-5)',
                    borderRadius: 'var(--pittorica-radius-4)',
                    cursor: 'context-menu',
                    backgroundColor: 'white',
                    width: '300px',
                    textAlign: 'center',
                  }}
                >
                  <Text color="slate">Right click inside this area</Text>
                </Box>
              }
            >
              <ContextMenuItem index={0}>New Tab</ContextMenuItem>
              <ContextMenuItem index={1}>Refresh</ContextMenuItem>
              <ContextMenuSub label="Share Options" index={2} itemCount={2}>
                <ContextMenuItem index={0}>Copy Link</ContextMenuItem>
                <ContextMenuItem index={1}>Email Page</ContextMenuItem>
              </ContextMenuSub>
            </PittoricaContextMenu>
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
                ContextMenu
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Box props.
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
                      <Code>trigger</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">ReactNode</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The element that triggers the menu.</Text>
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
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Total number of top-level items.</Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box mb="6">
              <Heading size="3" mb="3">
                ContextMenuItem
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
                </Table.Body>
              </Table.Root>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                ContextMenuSub
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
                      <Code>label</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">string</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        The text label for the submenu trigger.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
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
                      <Code>itemCount</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">number</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        Total number of items in the submenu.
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
