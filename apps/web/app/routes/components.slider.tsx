import { useState } from 'react';

import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Section,
  Slider,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const [value, setValue] = useState(50);

  const codeExample = `import 'pittorica';
import { useState } from 'react';
import { Slider, Text, Box } from '@pittorica/react';

export const Example = () => {
  const [value, setValue] = useState(50);

  return (
    <Box>
      <Text mb="4">Value: {value}</Text>
      <Slider value={value} onValueChange={setValue} color="indigo" />
    </Box>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Slider</Heading>
          <Text size="4" color="gray" mb="6">
            An input control that allows the user to select a value from a range
            by moving a thumb along a track. Ideal for volume, brightness, or
            numerical ranges.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/slider-react
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
              gap: 32,
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Box>
              <Text weight="bold" mb="4">
                Current Value: {value}
              </Text>
              <Slider value={value} onValueChange={setValue} color="indigo" />
            </Box>

            <Box>
              <Text weight="bold" mb="4">
                Stepped Slider (step=20)
              </Text>
              <Slider defaultValue={20} step={20} color="teal" />
            </Box>

            <Box>
              <Text weight="bold" mb="4" color="red">
                Disabled State
              </Text>
              <Slider defaultValue={75} disabled color="red" />
            </Box>
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
              Slider component accepts all standard Box props in addition to the
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
                    <Code>value</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">number</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The controlled numeric value.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>defaultValue</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">number</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">0</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The initial numeric value.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>min</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">number</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">0</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The minimum allowed value.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>max</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">number</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">100</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The maximum allowed value.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>step</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">number</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">1</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The granularity of the slider thumb.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>onValueChange</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">(val: number) ={'>'} void</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Callback fired when value changes.</Text>
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
                    <Text size="2">The semantic color of the track.</Text>
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
                    <Text size="2">If true, prevents user interaction.</Text>
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
