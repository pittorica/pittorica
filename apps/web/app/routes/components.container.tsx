import { Box, Container, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function ContainerRoute() {
  return (
    <DocPage
      name="Container"
      description="Container centers and constrains your content horizontally. It follows design system breakpoints to provide consistent layouts."
      packageName="container-react"
      props={[
        {
          name: 'maxWidth',
          type: '"xs" | "sm" | "md" | "lg" | "xl" | false',
          default: 'lg',
          description: 'The maximum width constraint.',
        },
        {
          name: 'fixed',
          type: 'boolean',
          default: 'false',
          description:
            'If true, adapts max-width to the current breakpoint instead of being fluid.',
        },
        {
          name: 'disableGutters',
          type: 'boolean',
          default: 'false',
          description: 'Removes default horizontal padding.',
        },
      ]}
      examples={[
        {
          title: 'Basic Container',
          description: 'A centered container with a max width.',
          code: `<Container maxWidth="sm">
  <Box p="4" style={{ background: 'var(--pittorica-gray-2)' }}>
    Content constrained to 'sm' breakpoint.
  </Box>
</Container>`,
          render: (
            <Container maxWidth="sm">
              <Box
                p="4"
                style={{
                  background: 'var(--pittorica-gray-2)',
                  border: '1px dashed var(--pittorica-gray-6)',
                }}
              >
                <Text>Content constrained to 'sm' breakpoint.</Text>
              </Box>
            </Container>
          ),
        },
      ]}
    />
  );
}
