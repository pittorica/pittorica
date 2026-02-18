import { IconAlertTriangle, IconInfoCircle } from '@tabler/icons-react';

import {
  Box,
  Callout,
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
import { Callout } from '@pittorica/react';
import { IconInfoCircle } from '@tabler/icons-react';

export const Example = () => {
  return (
    <Callout color="indigo">
      <Callout.Icon>
        <IconInfoCircle size={18} />
      </Callout.Icon>
      <Callout.Text>
        You will need to verify your email address to complete the registration.
      </Callout.Text>
    </Callout>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Callout</Heading>
          <Text size="4" color="gray" mb="6">
            Provides important information, warnings, or feedback to the user in
            a prominent way.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/callout-react
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
            <Flex direction="column" gap="4" width="100%">
              <Callout color="indigo">
                <Callout.Icon>
                  <IconInfoCircle size={18} />
                </Callout.Icon>
                <Callout.Text>
                  Verification required: Check your inbox for the activation
                  link.
                </Callout.Text>
              </Callout>

              <Callout color="amber" variant="outline">
                <Callout.Icon>
                  <IconAlertTriangle size={18} />
                </Callout.Icon>
                <Callout.Text>
                  Your subscription will expire in 3 days. Renew now to avoid
                  interruption.
                </Callout.Text>
              </Callout>

              <Callout color="red">
                <Callout.Text>
                  An unexpected error occurred while processing your request.
                </Callout.Text>
              </Callout>
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
              Callout component accepts all standard Box props in addition to
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
                    <Code>variant</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'soft' | 'outline'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'soft'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The visual variant of the callout.</Text>
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
                    <Text size="2">The semantic color of the callout.</Text>
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
