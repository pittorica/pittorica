import { NavLink } from 'react-router';

import { IconBrandGithub, IconRocket } from '@tabler/icons-react';

import {
  Avatar,
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from '@pittorica/react';

export default function Route() {
  return (
    <main>
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
    </main>
  );
}
