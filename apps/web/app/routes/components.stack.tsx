import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Stack,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Stack, Box, Text } from '@pittorica/react';

export const Example = () => {
  return (
    <Stack gap="4" align="center">
      <Box p="4" style={{ background: 'var(--pittorica-indigo-3)' }}>Item 1</Box>
      <Box p="4" style={{ background: 'var(--pittorica-indigo-4)' }}>Item 2</Box>
      <Box p="4" style={{ background: 'var(--pittorica-indigo-5)' }}>Item 3</Box>
    </Stack>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Stack</Heading>
          <Text size="4" color="gray" mb="6">
            A layout component for building vertical one-dimensional layouts. It
            inherits all features from Flex but defaults to a column direction
            for quick vertical composition.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/stack-react
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
            <Stack gap="4" width="100%" maxWidth="400px">
              <Box
                p="4"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: 8,
                }}
              >
                <Text weight="bold">Item One</Text>
              </Box>
              <Box
                p="4"
                style={{
                  background: 'var(--pittorica-indigo-4)',
                  borderRadius: 8,
                }}
              >
                <Text weight="bold">Item Two</Text>
              </Box>
              <Box
                p="4"
                style={{
                  background: 'var(--pittorica-indigo-5)',
                  borderRadius: 8,
                }}
              >
                <Text weight="bold">Item Three</Text>
              </Box>
            </Stack>
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
              Stack component inherits all props from the{' '}
              <Link href="/components/flex">Flex</Link> component and eredits
              all standard Box props. It defaults direction to 'column'.
            </Text>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
