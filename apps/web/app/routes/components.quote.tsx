import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Link,
  Quote,
  Section,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Text, Quote } from '@pittorica/react';

export const Example = () => {
  return (
    <Text>
      The author once said: <Quote>Simplicity is the ultimate sophistication.</Quote>
    </Text>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Quote</Heading>
          <Text size="4" color="gray" mb="6">
            A typographic component for short inline quotations, automatically
            rendered with appropriate quotation marks according to document
            language.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/quote-react
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
              Pittorica is described as a{' '}
              <Quote>
                painterly UI framework that brings elegant structure.
              </Quote>
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
              Quote component inherits all props from the{' '}
              <Link href="/components/text">Text</Link> component and eredits
              all standard Box props.
            </Text>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
