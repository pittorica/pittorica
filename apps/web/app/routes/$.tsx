import { NavLink } from 'react-router';

import { IconHome, IconSearch } from '@tabler/icons-react';

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from '@pittorica/react';

export default function NotFound() {
  return (
    <main>
      <Section size="4">
        <Container maxWidth="md">
          <Flex direction="column" align="center" justify="center" gap="6">
            <Box
              style={{
                background: 'var(--pittorica-indigo-3)',
                color: 'var(--pittorica-indigo-9)',
                padding: '32px',
                borderRadius: 'var(--pittorica-radius-full)',
                display: 'flex',
                boxShadow: 'var(--pittorica-shadow-3)',
              }}
            >
              <IconSearch size={64} stroke={1.5} />
            </Box>

            <Flex
              direction="column"
              align="center"
              gap="2"
              style={{ textAlign: 'center' }}
            >
              <Heading size="9" weight="bold" variant="classic">
                404
              </Heading>
              <Heading size="6" color="gray">
                Page Not Found
              </Heading>
              <Text size="4" color="gray" style={{ maxWidth: '500px' }} mt="2">
                The page you are looking for doesn't exist or has been moved.
                Don't worry, you can always head back to our components.
              </Text>
            </Flex>

            <Flex gap="4">
              <Button as={NavLink} to="/" variant="filled" size="xl">
                <Flex align="center" gap="2">
                  <IconHome size={20} />
                  Return Home
                </Flex>
              </Button>
              <Button
                as={NavLink}
                to="/components"
                variant="outlined"
                color="gray"
                size="xl"
              >
                Explore Components
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </main>
  );
}
