import { useState } from 'react';

import {
  Box,
  Button,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Section,
  Sheet,
  Text,
} from '@pittorica/react';

export default function Route() {
  const [open, setOpen] = useState(false);

  const codeExample = `import 'pittorica';
import { useState } from 'react';
import { Sheet, Button, Text } from '@pittorica/react';

export const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Sheet</Button>
      <Sheet isOpen={open} onClose={() => setOpen(false)} title="Menu" side="right">
        <Text>I am a side sheet content!</Text>
      </Sheet>
    </>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Sheet</Heading>
          <Text size="4" color="gray" mb="6">
            A modal panel that slides out from the edge of the screen. Ideal for
            navigation, filters, or sub-views that need to be accessed without
            leaving the current context.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/sheet-react
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
              Launch Side Sheet
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
            <Text mb="4" color="gray">
              Sheet component accepts all standard Box props.
            </Text>
          </Flex>
        </Section>

        <Sheet
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Configuration"
          side="right"
        >
          <Flex direction="column" gap="4">
            <Text weight="medium">General Settings</Text>
            <Text color="slate" size="2">
              Adjust your preferences for the current project. These changes
              will be applied immediately.
            </Text>
            <Box
              p="4"
              style={{
                background: 'var(--pittorica-slate-3)',
                borderRadius: 8,
              }}
            >
              <Text size="2">Additional information block.</Text>
            </Box>
          </Flex>
        </Sheet>
      </Flex>
    </Container>
  );
}
