import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Grid, Box } from '@pittorica/react';

export const Example = () => {
  return (
    <Grid columns="3" gap="4">
      <Box p="4" style={{ background: 'var(--pittorica-indigo-3)' }}>1</Box>
      <Box p="4" style={{ background: 'var(--pittorica-teal-3)' }}>2</Box>
      <Box p="4" style={{ background: 'var(--pittorica-amber-3)' }}>3</Box>
    </Grid>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Grid</Heading>
          <Text size="4" color="gray" mb="6">
            A layout component for building complex two-dimensional layouts
            using CSS Grid. Supports responsive column spans and fluid
            auto-fitting columns.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/grid-react
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
            <Box>
              <Text weight="bold" mb="2">
                Fixed Responsive Columns
              </Text>
              <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="4">
                {[1, 2, 3, 4].map((i) => (
                  <Box
                    key={i}
                    p="4"
                    style={{
                      background: 'var(--pittorica-indigo-3)',
                      textAlign: 'center',
                    }}
                  >
                    Column {i}
                  </Box>
                ))}
              </Grid>
            </Box>

            <Box>
              <Text weight="bold" mb="2">
                Fluid Auto-Fit (auto-150px)
              </Text>
              <Grid columns="auto-150px" gap="4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Box
                    key={i}
                    p="4"
                    style={{
                      background: 'var(--pittorica-teal-3)',
                      textAlign: 'center',
                    }}
                  >
                    Fluid {i}
                  </Box>
                ))}
              </Grid>
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
              Grid component accepts all standard Box props in addition to the
              following (all support responsive object syntax):
            </Text>
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
                    <Code>columns</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'1' | ... | '12' | 'auto-px'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets grid columns or fluid auto-fit.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>rows</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'1' | ... | '12' | 'auto-px'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets grid rows or fluid auto-fit.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>gap, gapX, gapY</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'0' | ... | '9'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets grid gaps.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>flow</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'row' | 'column' | 'dense' | 'row-dense' | 'column-dense'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets grid-auto-flow.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>justify</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'start' | 'center' | 'end' | 'between' | 'around' |
                      'evenly' | 'stretch'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets justify-content.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>align</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'start' | 'center' | 'end' | 'baseline' | 'stretch'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">Sets align-items.</Text>
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
