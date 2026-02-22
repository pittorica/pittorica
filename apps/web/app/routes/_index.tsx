import { NavLink } from 'react-router';

import {
  IconArrowRight,
  IconBrandGithub,
  IconComponents,
  IconHeart,
  IconRocket,
} from '@tabler/icons-react';

import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  IconButton,
  Section,
  Tabs,
  Text,
} from '@pittorica/react';

export default function Route() {
  return (
    <main>
      {/* Hero Section */}
      <Section size="4">
        <Container>
          <Flex direction="column" align="center" justify="center" gap="6">
            <Avatar
              src="/static/logo/square.png"
              fallback="P"
              size="9"
              style={{
                backgroundColor: '#29294b',
                boxShadow: 'var(--pittorica-shadow-5)',
              }}
            />

            <Flex
              direction="column"
              align="center"
              gap="3"
              style={{ textAlign: 'center' }}
            >
              <Heading size="9" weight="bold" variant="classic">
                Pittorica
              </Heading>
              <Text size="5" color="gray" style={{ maxWidth: '600px' }}>
                A painterly, CSS-first UI framework that brings elegant,
                lightweight structure to modern interfaces. Built for React and
                designed for aesthetic precision.
              </Text>
            </Flex>

            <Flex gap="4" wrap="wrap" justify="center">
              <Button size="xl" as={NavLink} to="/get-started">
                <Flex gap="2" align="center">
                  <IconRocket size={20} />
                  Get Started
                </Flex>
              </Button>
              <Button
                size="xl"
                variant="outlined"
                color="gray"
                as="a"
                href="https://github.com/pittorica/pittorica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flex gap="2" align="center">
                  <IconBrandGithub size={20} />
                  GitHub
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>

      {/* Component Gallery */}
      <Section size="3" style={{ background: 'var(--pittorica-surface-1)' }}>
        <Container>
          <Flex direction="column" gap="8" align="center">
            <Heading size="7">Meet the Palette</Heading>

            <Grid
              columns={{ initial: '1', sm: '2', md: '3' }}
              gap="6"
              width="100%"
            >
              {/* Interactive Card */}
              <Card p="6">
                <Flex direction="column" gap="4">
                  <Flex justify="between" align="center">
                    <Badge color="indigo">Interactive</Badge>
                    <IconButton variant="soft" size="1" color="red">
                      <IconHeart size={16} />
                    </IconButton>
                  </Flex>
                  <Heading size="4">Buttons & Badges</Heading>
                  <Text size="2" color="gray">
                    Combine interactive elements with semantic badges for clear
                    communication.
                  </Text>
                  <Flex gap="2">
                    <Button variant="soft" size="sm">
                      Soft
                    </Button>
                    <Button variant="tonal" size="sm" color="teal">
                      Tonal
                    </Button>
                  </Flex>
                </Flex>
              </Card>

              {/* Navigation Card */}
              <Card p="6">
                <Flex direction="column" gap="4">
                  <Tabs.Root defaultValue="one">
                    <Tabs.List>
                      <Tabs.Trigger value="one">Design</Tabs.Trigger>
                      <Tabs.Trigger value="two">Code</Tabs.Trigger>
                    </Tabs.List>
                  </Tabs.Root>
                  <Heading size="4">Tabs & Organization</Heading>
                  <Text size="2" color="gray">
                    Keep your interfaces organized with smooth, responsive tab
                    components.
                  </Text>
                  <Flex gap="2" wrap="wrap">
                    <Chip size="1" variant="outline">
                      Modern
                    </Chip>
                    <Chip size="1" variant="outline">
                      Fast
                    </Chip>
                    <Chip size="1" variant="outline">
                      Clean
                    </Chip>
                  </Flex>
                </Flex>
              </Card>

              {/* Selection Card */}
              <Card p="6">
                <Flex direction="column" gap="4">
                  <Flex align="center" gap="3">
                    <Avatar fallback="JD" color="amber" />
                    <Box>
                      <Text size="2" weight="bold">
                        User Selection
                      </Text>
                      <Text size="1" color="gray">
                        Active preference
                      </Text>
                    </Box>
                  </Flex>
                  <Heading size="4">Avatars & Controls</Heading>
                  <Flex direction="column" gap="2">
                    <Checkbox label="Enable notifications" defaultChecked />
                    <Checkbox label="Auto-save changes" />
                  </Flex>
                </Flex>
              </Card>
            </Grid>

            {/* The promised Divider showcase */}
            <Box width="100%" mt="4">
              <Flex direction="column" gap="4">
                <Text size="2" color="gray" style={{ textAlign: 'center' }}>
                  And of course, our artistic Dividers
                </Text>
                <Divider variant="wave" color="indigo" />
              </Flex>
            </Box>

            <Button
              as={NavLink}
              to="/components"
              size="lg"
              variant="tonal"
              color="gray"
            >
              <Flex align="center" gap="2">
                <IconComponents size={20} />
                Browse all components
                <IconArrowRight size={18} />
              </Flex>
            </Button>
          </Flex>
        </Container>
      </Section>
    </main>
  );
}
