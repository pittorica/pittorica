import { useState } from 'react';

import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Radio,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const [checked, setChecked] = useState(false);

  const codeExample = `import 'pittorica';
import { useState } from 'react';
import { Radio, Flex, Text } from '@pittorica/react';

export const Example = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Flex align="center" gap="2">
      <Radio id="r1" checked={checked} onCheckedChange={setChecked} />
      <Text as="label" htmlFor="r1">Accept terms</Text>
    </Flex>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Radio</Heading>
          <Text size="4" color="gray" mb="6">
            A control that allows the user to select one option from a set.
            Supports custom colors, controlled/uncontrolled states, and standard
            accessibility features.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/radio-react
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
            <Flex gap="6" wrap="wrap" justify="center">
              <Flex align="center" gap="2">
                <Radio
                  id="demo-radio"
                  checked={checked}
                  onCheckedChange={setChecked}
                />
                <Text
                  as="label"
                  htmlFor="demo-radio"
                  style={{ cursor: 'pointer' }}
                >
                  Click to toggle
                </Text>
              </Flex>

              <Flex gap="4">
                <Radio checked color="indigo" />
                <Radio checked color="teal" />
                <Radio checked color="orange" />
                <Radio checked color="red" />
              </Flex>

              <Radio disabled checked />
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
              Radio component accepts all standard Box props in addition to the
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
                    <Code>checked</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">boolean</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The controlled checked state.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>onCheckedChange</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">(checked: boolean) ={'>'} void</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Callback fired when state changes.</Text>
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
                    <Text size="2">The semantic color of the radio.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>disabled</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">boolean</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">false</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">If true, the radio will be disabled.</Text>
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
