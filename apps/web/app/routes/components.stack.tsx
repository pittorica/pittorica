import { Box, Stack } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function StackRoute() {
  return (
    <DocPage
      name="Stack"
      description="Stack is a convenience component for vertical linear layouts. It inherits all Flex properties but defaults direction to 'column'."
      packageName="stack-react"
      props={[
        {
          name: 'gap',
          type: '0-9',
          default: '0',
          description: 'The space between stack items.',
        },
        {
          name: 'align',
          type: 'string',
          description: 'Horizontal alignment of items.',
        },
        {
          name: 'justify',
          type: 'string',
          description: 'Vertical distribution of space.',
        },
      ]}
      examples={[
        {
          title: 'Vertical Stack',
          description: 'Stacking items vertically with a gap.',
          code: `<Stack gap="3">
  <Box p="3" style={{ background: 'var(--pittorica-gray-3)' }}>Item 1</Box>
  <Box p="3" style={{ background: 'var(--pittorica-gray-3)' }}>Item 2</Box>
  <Box p="3" style={{ background: 'var(--pittorica-gray-3)' }}>Item 3</Box>
</Stack>`,
          render: (
            <Stack gap="3">
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-gray-3)',
                  borderRadius: '4px',
                }}
              >
                Item 1
              </Box>
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-gray-3)',
                  borderRadius: '4px',
                }}
              >
                Item 2
              </Box>
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-gray-3)',
                  borderRadius: '4px',
                }}
              >
                Item 3
              </Box>
            </Stack>
          ),
        },
      ]}
    />
  );
}
