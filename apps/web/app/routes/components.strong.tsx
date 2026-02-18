import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Strong,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Text, Strong } from '@pittorica/react';

export const Example = () => {
  return (
    <Text>
      This is a <Strong>very important</Strong> statement.
    </Text>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Strong</Heading>
          <Text size="4" color="gray" mb="6">
            A typographic component for bold text emphasis. Typically used to
            indicate that its contents have strong importance, seriousness, or
            urgency.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/strong-react
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
            <Text size="5">
              Pittorica is a <Strong>painterly, CSS-first UI framework</Strong>{' '}
              that brings elegant structure to modern interfaces.
            </Text>
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
              Strong component inherits all props from the{' '}
              <Link href="/components/text">Text</Link> component and eredits
              all standard Box props.
            </Text>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
