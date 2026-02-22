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
  Text,
} from '@pittorica/react';

export default function Theming() {
  return (
    <Container>
      <Flex direction={'column'} gap="6">
        {/* Header */}
        <Section size="2">
          <Flex direction={'column'} gap="4" justify={'start'} align={'start'}>
            <header>
              <Heading size="8" mb="4">
                Theming
              </Heading>
              <Text size="4" color="gray">
                Pittorica is built on a dynamic, CSS-first theming system.
                Customize your application's appearance using semantic tokens
                and the Theme provider.
              </Text>
            </header>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        {/* PittoricaTheme Section */}
        <Section size="1" id="theme-provider">
          <Flex direction="column" gap="4">
            <Flex align="center" gap="2">
              <Link
                href="#theme-provider"
                color="gray"
                underline="none"
                style={{ opacity: 0.5 }}
              >
                #
              </Link>
              <Heading size="6">Theme Provider</Heading>
            </Flex>
            <Text mb="4">
              The <code>PittoricaTheme</code> component is the root of the
              theming system. It injects CSS variables and manages the
              appearance of nested components.
            </Text>

            <Card p="4" variant="outlined">
              <Flex direction="column" gap="3">
                <Heading size="3" weight="bold">
                  Props
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
                        <th style={{ padding: '8px' }}>Prop</th>
                        <th style={{ padding: '8px' }}>Type</th>
                        <th style={{ padding: '8px' }}>Default</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style={{
                          borderBottom: '1px solid var(--pittorica-gray-3)',
                        }}
                      >
                        <td style={{ padding: '8px' }}>
                          <code>sourceColor</code>
                        </td>
                        <td style={{ padding: '8px' }}>
                          <code>PittoricaSourceColor</code>
                        </td>
                        <td style={{ padding: '8px' }}>
                          <code>'indigo'</code>
                        </td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: '1px solid var(--pittorica-gray-3)',
                        }}
                      >
                        <td style={{ padding: '8px' }}>
                          <code>appearance</code>
                        </td>
                        <td style={{ padding: '8px' }}>
                          <code>'light' | 'dark' | 'inherit'</code>
                        </td>
                        <td style={{ padding: '8px' }}>
                          <code>'light'</code>
                        </td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: '1px solid var(--pittorica-gray-3)',
                        }}
                      >
                        <td style={{ padding: '8px' }}>
                          <code>radius</code>
                        </td>
                        <td style={{ padding: '8px' }}>
                          <code>
                            'none' | 'small' | 'medium' | 'large' | 'full'
                          </code>
                        </td>
                        <td style={{ padding: '8px' }}>
                          <code>'medium'</code>
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

        {/* Custom Colors Section */}
        <Section size="1" id="custom-colors">
          <Flex direction="column" gap="4">
            <Flex align="center" gap="2">
              <Link
                href="#custom-colors"
                color="gray"
                underline="none"
                style={{ opacity: 0.5 }}
              >
                #
              </Link>
              <Heading size="6">Custom Colors</Heading>
            </Flex>
            <Text mb="4">
              You can use predefined semantic colors or provide any valid CSS
              color (HEX, RGB, HSL). Pittorica will automatically generate
              complementary tokens for backgrounds, borders, and text.
            </Text>

            <Code language="typescript">
              {`// Using semantic color
<PittoricaTheme sourceColor="teal">
  <YourApp />
</PittoricaTheme>

// Using custom HEX color
<PittoricaTheme sourceColor="#ff5500">
  <YourApp />
</PittoricaTheme>`}
            </Code>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        {/* Nested Theming Section */}
        <Section size="1" id="nested-theming">
          <Flex direction="column" gap="4">
            <Flex align="center" gap="2">
              <Link
                href="#nested-theming"
                color="gray"
                underline="none"
                style={{ opacity: 0.5 }}
              >
                #
              </Link>
              <Heading size="6">Nested Theming</Heading>
            </Flex>
            <Text mb="4">
              Themes can be nested to create sections with different
              appearances. This is useful for dark sidebars in a light
              application or specialized dashboard panels.
            </Text>

            <Code language="typescript">
              {`<PittoricaTheme appearance="light">
  <MainContent />
  
  {/* Dark sidebar within light app */}
  <PittoricaTheme appearance="dark">
    <Sidebar />
  </PittoricaTheme>
</PittoricaTheme>`}
            </Code>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
