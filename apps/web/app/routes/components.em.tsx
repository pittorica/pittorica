import {
  Box,
  Card,
  Code,
  Container,
  Em,
  Flex,
  Heading,
  Link,
  Section,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Text, Em } from '@pittorica/react';

export const Example = () => {
  return (
    <Text>
      The term <Em>painterly</Em> refers to a style of digital design.
    </Text>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Em</Heading>
          <Text size="4" color="gray" mb="6">
            A typographic component for emphasizing text, typically rendered in
            italics.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/em-react
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
              This is a standard text with an <Em>emphasized section</Em> inside
              it.
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
              Em component inherits all props from the{' '}
              <Link href="/components/text">Text</Link> component and eredits
              all standard Box props.
            </Text>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
