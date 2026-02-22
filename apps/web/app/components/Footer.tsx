import { NavLink } from 'react-router';

import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
  IconExternalLink,
} from '@tabler/icons-react';

import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Section,
  Text,
} from '@pittorica/react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      style={{
        background: 'var(--pittorica-surface-1)',
        borderTop: '1px solid var(--pittorica-slate-4)',
      }}
    >
      <Section size="3">
        <Container>
          <Grid columns={{ initial: '1', md: '4' }} gap="8">
            {/* Brand Column */}
            <Flex direction="column" gap="4" style={{ gridColumn: 'span 1.5' }}>
              <Flex align="center" gap="3">
                <Avatar
                  src="/static/logo/square.png"
                  fallback="P"
                  size="3"
                  style={{ backgroundColor: '#29294b' }}
                />
                <Heading size="6" weight="bold">
                  Pittorica
                </Heading>
              </Flex>
              <Text size="2" color="gray" style={{ maxWidth: '300px' }}>
                A painterly, CSS-first UI framework designed for aesthetic
                precision and modern React development.
              </Text>
              <Flex gap="2">
                <IconButton
                  as="a"
                  href="https://github.com/pittorica/pittorica"
                  variant="soft"
                  color="gray"
                  size="1"
                >
                  <IconBrandGithub size={18} />
                </IconButton>
                <IconButton variant="soft" color="gray" size="1">
                  <IconBrandX size={18} />
                </IconButton>
                <IconButton variant="soft" color="gray" size="1">
                  <IconBrandDiscord size={18} />
                </IconButton>
              </Flex>
            </Flex>

            {/* Links Columns */}
            <Flex direction="column" gap="4">
              <Heading size="3" weight="bold">
                Framework
              </Heading>
              <Flex direction="column" gap="2">
                <Link as={NavLink} to="/get-started" color="gray" size="2">
                  Get Started
                </Link>
                <Link as={NavLink} to="/components" color="gray" size="2">
                  Components
                </Link>
                <Link as={NavLink} to="/theming" color="gray" size="2">
                  Theming
                </Link>
                <Link as={NavLink} to="/colors" color="gray" size="2">
                  Colors
                </Link>
              </Flex>
            </Flex>

            <Flex direction="column" gap="4">
              <Heading size="3" weight="bold">
                Legal
              </Heading>
              <Flex direction="column" gap="2">
                <Link as={NavLink} to="/privacy" color="gray" size="2">
                  Privacy Policy
                </Link>
                <Link as={NavLink} to="/terms" color="gray" size="2">
                  Terms of Service
                </Link>
                <Link
                  as="a"
                  href="https://github.com/pittorica/pittorica/blob/main/LICENSE"
                  target="_blank"
                  color="gray"
                  size="2"
                >
                  <Flex align="center" gap="1">
                    MIT License <IconExternalLink size={14} />
                  </Flex>
                </Link>
              </Flex>
            </Flex>
          </Grid>

          <Divider variant="wave" color="gray" mt="8" mb="6" />

          <Flex
            direction={{ initial: 'column', sm: 'row' }}
            justify="between"
            align="center"
            gap="4"
          >
            <Text size="1" color="gray">
              © {currentYear} Pittorica UI Framework. All rights reserved.
            </Text>
            <Text size="1" color="gray">
              Built with precision by{' '}
              <Link
                href="https://dcdavidev.me"
                target="_blank"
                weight="bold"
                color="indigo"
              >
                dcdavidev
              </Link>
            </Text>
          </Flex>
        </Container>
      </Section>
    </Box>
  );
};
