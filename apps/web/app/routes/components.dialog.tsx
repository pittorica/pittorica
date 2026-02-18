import { useState } from 'react';

import {
  Box,
  Button,
  Card,
  Code,
  Container,
  Dialog,
  DialogActions,
  DialogDescription,
  DialogTitle,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const [open, setOpen] = useState(false);

  const codeExample = `import 'pittorica';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogDescription, DialogActions, Button } from '@pittorica/react';

export const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Update Profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
        <DialogActions>
          <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Dialog</Heading>
          <Text size="4" color="gray" mb="6">
            A window overlaid on either the primary window or another dialog
            window, rendering the content underneath inert.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/dialog-react
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
            <Button size="lg" onClick={() => setOpen(true)}>
              Launch Dialog
            </Button>
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
                Dialog
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
                      <Code>open</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">boolean</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The controlled open state.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>onClose</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">() ={'>'} void</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        Callback fired when the dialog is closed.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>appearance</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'light' | 'dark' | 'inherit'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'inherit'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Forces a specific theme appearance.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>closeOnOverlayClick</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">boolean</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">true</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Allow closing via overlay click.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>closeOnEsc</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">boolean</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">true</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Allow closing via Esc key.</Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>
          </Flex>
        </Section>

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a standard Pittorica dialog. It supports focus trapping,
            scroll locking, and automatic appearance adaptation.
          </DialogDescription>
          <DialogActions>
            <Button variant="text" color="slate" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button color="indigo" onClick={() => setOpen(false)}>
              Confirm Action
            </Button>
          </DialogActions>
        </Dialog>
      </Flex>
    </Container>
  );
}
