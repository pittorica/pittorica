import { IconMail, IconSearch } from '@tabler/icons-react';

import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Section,
  Table,
  Text,
  TextField,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { TextField, Flex } from '@pittorica/react';
import { IconMail } from '@tabler/icons-react';

export const Example = () => {
  return (
    <TextField.Root label="Email" helperText="We'll never share your email.">
      <TextField.Slot>
        <IconMail size={16} />
      </TextField.Slot>
      <TextField.Input placeholder="mail@example.com" type="email" />
    </TextField.Root>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Text Field</Heading>
          <Text size="4" color="gray" mb="6">
            A single-line text input control. Supports 5 sizes, helper text,
            error states, and decorative slots for icons or shortcuts.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/text-field-react
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
              gap: 24,
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Flex gap="4" align="end" wrap="wrap">
              <TextField.Root label="Search" style={{ width: 240 }}>
                <TextField.Slot>
                  <IconSearch size={16} />
                </TextField.Slot>
                <TextField.Input placeholder="Type to search..." />
              </TextField.Root>

              <TextField.Root
                label="Email Address"
                color="teal"
                style={{ width: 240 }}
              >
                <TextField.Slot>
                  <IconMail size={16} />
                </TextField.Slot>
                <TextField.Input placeholder="mail@pittorica.it" />
              </TextField.Root>

              <TextField.Root
                label="Error State"
                error
                helperText="Invalid email format"
                style={{ width: 240 }}
              >
                <TextField.Input defaultValue="invalid-email" />
              </TextField.Root>
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

            <Box mb="6">
              <Heading size="3" mb="3">
                TextField.Root
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
                      <Code>label</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">ReactNode</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The label displayed above the field.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>helperText</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">ReactNode</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Informational text below the field.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>size</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'xs' | 'sm' | 'md' | 'lg' | 'xl'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'sm'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The size of the input control.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>error</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">boolean</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">false</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">If true, applies the error state.</Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                TextField.Input
              </Heading>
              <Text mb="4" color="gray">
                Accepts all native HTML Input attributes.
              </Text>
            </Box>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
