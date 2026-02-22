import { NavLink } from 'react-router';

import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Section,
  Text,
} from '@pittorica/react';

import { componentGroups, formatComponentName } from '../configs/components';

export default function ComponentsIndex() {
  return (
    <main>
      <Section size="3">
        <Container>
          <Flex direction="column" gap="4" align="start">
            <Heading size="8" mb="2">
              Components
            </Heading>
            <Text size="4" color="gray" mb="6">
              Pittorica provides a rich set of React components designed for
              speed, accessibility, and aesthetic precision.
            </Text>

            <Text mb="4">
              All components are built using our CSS-first token system,
              ensuring they remain lightweight and fully customizable through
              CSS variables. Explore the categories to find the right building
              blocks for your next project.
            </Text>

            <Divider
              variant="wave"
              color="gray"
              style={{ width: '100%', margin: '2rem 0' }}
            />

            <Box style={{ width: '100%' }}>
              <Flex direction="column" gap="6">
                {componentGroups.map((group) => (
                  <Box key={group.title}>
                    <Heading
                      size="4"
                      weight="bold"
                      mb="4"
                      style={{
                        borderBottom: '1px solid var(--pittorica-gray-3)',
                        paddingBottom: '0.5rem',
                      }}
                    >
                      {group.title}
                    </Heading>
                    <Flex wrap="wrap" gap="4">
                      {group.components.map((component) => (
                        <Link
                          key={component}
                          as={NavLink}
                          to={`/components/${component}`}
                          color="inherit"
                          style={{
                            minWidth: '150px',
                            padding: 'var(--pittorica-space-2)',
                            borderRadius: 'var(--pittorica-radius-2)',
                            backgroundColor: 'var(--pittorica-gray-2)',
                            fontSize: 'var(--pittorica-font-size-2)',
                            textAlign: 'center',
                            border: '1px solid var(--pittorica-gray-4)',
                          }}
                        >
                          {formatComponentName(component)}
                        </Link>
                      ))}
                    </Flex>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Section>
    </main>
  );
}
