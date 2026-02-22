import {
  Box,
  Code,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  Text,
} from '@pittorica/react';

const colors = [
  'source',
  'indigo',
  'blue',
  'teal',
  'success',
  'warning',
  'danger',
  'error',
  'info',
  'crimson',
  'red',
  'amber',
  'orange',
  'purple',
  'pink',
  'slate',
  'gray',
];

const shades = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export default function Colors() {
  return (
    <Container>
      <Flex direction="column" gap="6">
        {/* Header */}
        <Section size="2">
          <header>
            <Heading size="8" mb="4">
              Colors
            </Heading>
            <Text size="4" color="gray">
              Pittorica provides a comprehensive set of color scales and
              semantic tokens. Each color includes 9 steps designed for
              consistent contrast and aesthetic harmony.
            </Text>
          </header>
        </Section>

        <Divider variant="wave" color="gray" />

        {/* Usage Section */}
        <Section size="1" id="usage">
          <Flex direction="column" gap="4">
            <Flex align="center" gap="2">
              <Link
                href="#usage"
                color="gray"
                underline="none"
                style={{ opacity: 0.5 }}
              >
                #
              </Link>
              <Heading size="6">How to use</Heading>
            </Flex>
            <Text>
              Colors are available as CSS variables following the pattern{' '}
              <code>--pittorica-[color]-[step]</code>. For each step, there is
              also a corresponding "on" color{' '}
              <code>--pittorica-on-[color]-[step]</code> for text or icons
              rendered over that background.
            </Text>
            <Code language="css">
              {`.my-box {
  background-color: var(--pittorica-indigo-9);
  color: var(--pittorica-on-indigo-9);
  border: 1px solid var(--pittorica-indigo-6);
}`}
            </Code>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        {/* Color Palettes Section */}
        <Section size="1" id="palettes">
          <Flex direction="column" gap="8">
            <Flex align="center" gap="2">
              <Link
                href="#palettes"
                color="gray"
                underline="none"
                style={{ opacity: 0.5 }}
              >
                #
              </Link>
              <Heading size="6">Color Palettes</Heading>
            </Flex>

            {colors.map((color) => (
              <Box key={color}>
                <Heading
                  size="4"
                  mb="3"
                  style={{ textTransform: 'capitalize' }}
                >
                  {color}
                </Heading>
                <Grid columns={{ initial: '1', sm: '3', md: '9' }} gap="2">
                  {shades.map((shade) => (
                    <Flex
                      key={shade}
                      direction="column"
                      align="center"
                      justify="center"
                      p="3"
                      style={{
                        background: `var(--pittorica-${color}-${shade})`,
                        color: `var(--pittorica-on-${color}-${shade})`,
                        borderRadius: 'var(--pittorica-radius-2)',
                        minHeight: '80px',
                        border:
                          shade === '1'
                            ? '1px solid var(--pittorica-slate-4)'
                            : 'none',
                      }}
                    >
                      <Text size="1" weight="bold">
                        Step {shade}
                      </Text>
                      <Text size="1" style={{ opacity: 0.8 }}>
                        On {color}
                      </Text>
                    </Flex>
                  ))}
                </Grid>
              </Box>
            ))}
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
