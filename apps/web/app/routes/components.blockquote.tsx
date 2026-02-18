import {
  Blockquote,
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Blockquote } from '@pittorica/react';

export const Example = () => {
  return (
    <Blockquote>
      Pittorica is a painterly, CSS-first UI framework that brings elegant, 
      lightweight structure to modern interfaces.
    </Blockquote>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Blockquote</Heading>
          <Text size="4" color="gray" mb="6">
            A component for extended quotations, providing a clean visual
            separation from the surrounding text.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/blockquote-react
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
            <Box style={{ maxWidth: '500px' }}>
              <Blockquote>
                Design is not just what it looks like and feels like. Design is
                how it works. We believe that UI should be both beautiful and
                highly functional.
              </Blockquote>
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
              Blockquote component inherits all props from the{' '}
              <Link href="/components/text">Text</Link> component and eredits
              all standard Box props.
            </Text>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
