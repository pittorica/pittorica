import {
  Box,
  Card,
  Code,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Section,
  Tabs,
  Text,
} from '@pittorica/react';

export default function Typography() {
  return (
    <Container>
      <Flex direction={'column'} gap="6">
        {/* Header */}
        <Section size="2">
          <Flex direction={'column'} gap="4" justify={'start'} align={'start'}>
            <header>
              <Heading size="8" mb="4">
                Typography
              </Heading>
              <Text size="4" color="gray">
                Pittorica uses CSS variables to manage font families across the
                entire framework. You can easily swap fonts by redefining these
                tokens in your global CSS.
              </Text>
            </header>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        {/* Font Tokens Section */}
        <Section size="1" id="font-tokens">
          <Flex direction="column" gap="4">
            <Flex align="center" gap="2">
              <Link
                href="#font-tokens"
                color="gray"
                underline="none"
                style={{ opacity: 0.5 }}
              >
                #
              </Link>
              <Heading size="6">Font Tokens</Heading>
            </Flex>
            <Text mb="4">
              Redefine these variables in your <code>:root</code> or{' '}
              <code>.pittorica-theme</code> scope to change the typography.
            </Text>

            <Card p="4" variant="outlined">
              <Flex direction="column" gap="3">
                <Heading size="3" weight="bold">
                  CSS Variables
                </Heading>
                <Box style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr
                        style={{
                          textAlign: 'left',
                          borderBottom: '1px solid var(--pittorica-gray-5)',
                        }}
                      >
                        <th style={{ padding: '8px' }}>Variable</th>
                        <th style={{ padding: '8px' }}>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style={{
                          borderBottom: '1px solid var(--pittorica-gray-3)',
                        }}
                      >
                        <td style={{ padding: '8px' }}>
                          <code>--pittorica-font-family</code>
                        </td>
                        <td style={{ padding: '8px' }}>Primary body font.</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: '1px solid var(--pittorica-gray-3)',
                        }}
                      >
                        <td style={{ padding: '8px' }}>
                          <code>--pittorica-font-heading</code>
                        </td>
                        <td style={{ padding: '8px' }}>
                          Font for all Heading components.
                        </td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: '1px solid var(--pittorica-gray-3)',
                        }}
                      >
                        <td style={{ padding: '8px' }}>
                          <code>--pittorica-font-code</code>
                        </td>
                        <td style={{ padding: '8px' }}>
                          Font for Code and monospaced text.
                        </td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: '1px solid var(--pittorica-gray-3)',
                        }}
                      >
                        <td style={{ padding: '8px' }}>
                          <code>--pittorica-font-quote</code>
                        </td>
                        <td style={{ padding: '8px' }}>
                          Font for Blockquote and citations.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </Flex>
            </Card>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        {/* Example Section */}
        <Section size="1" id="custom-fonts-example">
          <Flex direction="column" gap="4">
            <Flex align="center" gap="2">
              <Link
                href="#custom-fonts-example"
                color="gray"
                underline="none"
                style={{ opacity: 0.5 }}
              >
                #
              </Link>
              <Heading size="6">Custom Fonts Example</Heading>
            </Flex>
            <Text mb="4">
              Here is how we configured the fonts for this documentation site
              using <code>@fontsource</code>:
            </Text>

            <Tabs.Root defaultValue="css" style={{ width: '100%' }}>
              <Tabs.List>
                <Tabs.Trigger value="css">app.css</Tabs.Trigger>
                <Tabs.Trigger value="react">root.tsx</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="css">
                <Code language="css">
                  {`:root {
  --font-inter-variable: 'Inter Variable', sans-serif;
  --font-inknut-antiqua: 'Inknut Antiqua', cursive;
  --font-kode-mono-variable: 'Kode Mono Variable', monospace;

  --pittorica-font-family: var(--font-inter-variable);
  --pittorica-font-heading: var(--font-inknut-antiqua);
  --pittorica-font-code: var(--font-kode-mono-variable);
  --pittorica-font-quote: var(--font-inknut-antiqua);
}`}
                </Code>
              </Tabs.Content>

              <Tabs.Content value="react">
                <Code language="typescript">
                  {`import '@fontsource-variable/inter';
import '@fontsource/inknut-antiqua';
import '@fontsource-variable/kode-mono';

// ... rest of your root file`}
                </Code>
              </Tabs.Content>
            </Tabs.Root>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
