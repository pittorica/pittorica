import {
  Box,
  Button,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Popover, PopoverTrigger, PopoverContent, Button, Text } from '@pittorica/react';

export const Example = () => {
  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Button variant="outlined">Click me</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Text>I am a popover content!</Text>
      </PopoverContent>
    </Popover>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Popover</Heading>
          <Text size="4" color="gray" mb="6">
            Displays a transient view of content when a trigger element is
            clicked. Built with Floating UI for smart positioning and dismissal.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/popover-react
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
              gap: '1rem',
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Popover placement="bottom">
              <PopoverTrigger>
                <Button size="lg">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent style={{ width: 240 }}>
                <Box p="1">
                  <Heading size="3" mb="2">
                    Information
                  </Heading>
                  <Text size="2" color="slate">
                    This content is dynamically positioned using Floating UI. It
                    will flip automatically if there is not enough space.
                  </Text>
                </Box>
              </PopoverContent>
            </Popover>

            <Popover placement="bottom" appearance="dark">
              <PopoverTrigger>
                <Button size="lg" variant="tonal" color="indigo">
                  Open Dark Popover
                </Button>
              </PopoverTrigger>
              <PopoverContent style={{ width: 240 }}>
                <Box p="1">
                  <Heading size="3" mb="2">
                    Dark Theme
                  </Heading>
                  <Text size="2">
                    This popover is explicitly set to dark mode. Nested
                    components inherit this theme.
                  </Text>
                </Box>
              </PopoverContent>
            </Popover>
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
                Popover
              </Heading>
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
                      <Code>placement</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Placement</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'bottom'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        The preferred placement of the popover.
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
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        The theme appearance of the popover content.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box mb="6">
              <Heading size="3" mb="3">
                PopoverTrigger
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Box props.
              </Text>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                PopoverContent
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Box props.
              </Text>
            </Box>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
