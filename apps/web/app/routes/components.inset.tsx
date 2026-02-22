import { Box, Inset, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function InsetRoute() {
  return (
    <DocPage
      name="Inset"
      description="Inset is used to stretch content to the edges of its container, ignoring the parent's padding. It's often used for full-width images in cards."
      packageName="inset-react"
      props={[
        {
          name: 'side',
          type: '"all" | "x" | "y" | "top" | "bottom"',
          default: '"all"',
          description: 'Which sides to inset.',
        },
        {
          name: 'clip',
          type: 'boolean',
          default: 'true',
          description: 'Clip content to parent border radius.',
        },
      ]}
      examples={[
        {
          title: 'Top Inset',
          description: 'A full-width image at the top of a card.',
          code: `<Card p="4">
  <Inset side="top">
    <img src="header.jpg" alt="Header" />
  </Inset>
  <Text mt="3">Card Content</Text>
</Card>`,
          render: (
            <Box
              p="4"
              style={{
                border: '1px solid var(--pittorica-gray-4)',
                borderRadius: '8px',
                width: '300px',
                background: 'var(--pittorica-gray-1)',
              }}
            >
              <Inset
                side="top"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text color="indigo">Full-width Header</Text>
              </Inset>
              <Box pt="3">
                <Text weight="bold">Pittorica Project</Text>
                <Text color="gray" size="2">
                  Modular and accessible design system.
                </Text>
              </Box>
            </Box>
          ),
        },
      ]}
    />
  );
}
