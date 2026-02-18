import { useState } from 'react';

import {
  AlertDialog,
  AlertDialogActions,
  AlertDialogDescription,
  AlertDialogTitle,
  Box,
  Button,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from '@pittorica/react';

export default function Route() {
  const [open, setOpen] = useState(false);

  const codeExample = `import 'pittorica';

import { useState } from 'react';

import {
  Button
  AlertDialog,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogActions
} from '@pittorica/react';

export const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="red" onClick={() => setOpen(true)}>
        Delete Account
      </Button>

      <AlertDialog open={open} onClose={() => setOpen(false)}>
        <AlertDialogTitle color="red">Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This data will be permanently removed.
        </AlertDialogDescription>
        <AlertDialogActions>
          <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="filled" color="red" onClick={() => setOpen(false)}>
            Yes, delete account
          </Button>
        </AlertDialogActions>
      </AlertDialog>
    </>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction={'column'} gap="4">
          <Heading size="8">Alert Dialog</Heading>
          <Text size="4" color="gray" mb="6">
            A modal dialog that interrupts the user with urgent content and
            expects a confirmation.
          </Text>
          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
              `}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/alert-dialog-react
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
            <Button
              variant="tonal"
              color="red"
              size="lg"
              onClick={() => setOpen(true)}
            >
              Delete Account
            </Button>
          </Card>
        </Section>

        {/* Implementation Code */}
        <Box>
          <Heading size="4" mb="4">
            Implementation
          </Heading>
          <Code language="typescript" filename="Example.tsx" showLineNumbers>
            {codeExample}
          </Code>
        </Box>

        {/* Component Instance */}
        <AlertDialog open={open} onClose={() => setOpen(false)}>
          <AlertDialogTitle color="red">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
          <AlertDialogActions>
            <Button variant="text" color="slate" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="filled" color="red" onClick={() => setOpen(false)}>
              Yes, delete account
            </Button>
          </AlertDialogActions>
        </AlertDialog>
      </Flex>
    </Container>
  );
}
