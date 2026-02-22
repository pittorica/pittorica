import { Box, Flex, Heading, HoverCard, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function HoverCardRoute() {
  return (
    <DocPage
      name="HoverCard"
      description="HoverCard allows users to see a preview of content before navigating to it. It opens on hover after a short delay."
      packageName="hover-card-react"
      props={[
        {
          name: 'renderTrigger',
          type: '(props: { ref }) => ReactNode',
          description: 'Function to render trigger.',
        },
        {
          name: 'openDelay',
          type: 'number',
          default: '500',
          description: 'Delay before opening (ms).',
        },
        {
          name: 'closeDelay',
          type: 'number',
          default: '300',
          description: 'Delay before closing (ms).',
        },
      ]}
      examples={[
        {
          title: 'User Profile Preview',
          description: 'Hover the username to see the profile card.',
          code: `<HoverCard
  renderTrigger={({ ref }) => (
    <span ref={ref} style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
      @dcdavidev
    </span>
  )}
>
  <Flex direction="column" gap="3">
    <Heading size="3">Davide C.</Heading>
    <Text>Senior Software Architect building Pittorica UI.</Text>
  </Flex>
</HoverCard>`,
          render: (
            <Box p="4">
              <Text>
                Check out the profile of{' '}
                <HoverCard
                  renderTrigger={({ ref }) => (
                    <span
                      ref={ref as React.RefObject<HTMLSpanElement>}
                      style={{
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                        cursor: 'help',
                      }}
                    >
                      @dcdavidev
                    </span>
                  )}
                >
                  <Box p="4" style={{ width: '240px' }}>
                    <Flex direction="column" gap="2">
                      <Heading size="3">Davide C.</Heading>
                      <Text size="2" color="gray">
                        @dcdavidev
                      </Text>
                      <Text size="2">
                        Senior Software Architect and Glassmorphism enthusiast.
                      </Text>
                    </Flex>
                  </Box>
                </HoverCard>
              </Text>
            </Box>
          ),
        },
      ]}
    />
  );
}
