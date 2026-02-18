import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Kbd,
  Link,
  Section,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Kbd, Text } from '@pittorica/react';

export const Example = () => {
  return (
    <Text>
      Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to search.
    </Text>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Kbd</Heading>
          <Text size="4" color="gray" mb="6">
            A typographic component for keyboard input representation, typically
            used to display keyboard shortcuts.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/kbd-react
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
            <Flex direction="column" gap="4">
              <Text size="4">
                Global Search: <Kbd>⌘</Kbd> <Kbd>K</Kbd>
              </Text>
              <Text size="4">
                Save Changes: <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
              </Text>
              <Text size="4">
                Open Terminal: <Kbd>Alt</Kbd> + <Kbd>F12</Kbd>
              </Text>
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
              Kbd component inherits all props from the{' '}
              <Link href="/components/text">Text</Link> component and eredits
              all standard Box props.
            </Text>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
