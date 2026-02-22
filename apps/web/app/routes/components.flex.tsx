import { Box, Flex } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function FlexRoute() {
  return (
    <DocPage
      name="Flex"
      description="Flex is a layout component built on Flexbox. It supports responsive direction, alignment, and distribution of space between items."
      packageName="flex-react"
      props={[
        {
          name: 'direction',
          type: 'Responsive<"row" | "column">',
          default: 'row',
          description: 'Sets the flex-direction.',
        },
        {
          name: 'justify',
          type: 'Responsive<"start" | "center" | "end" | "between" | "around" | "evenly">',
          default: 'start',
          description: 'Aligns items along the main axis.',
        },
        {
          name: 'align',
          type: 'Responsive<"start" | "center" | "end" | "baseline" | "stretch">',
          default: 'start',
          description: 'Aligns items along the cross axis.',
        },
        {
          name: 'gap',
          type: 'Responsive<0-9>',
          description: 'Sets the spacing between children using tokens.',
        },
        {
          name: 'wrap',
          type: 'Responsive<"nowrap" | "wrap" | "wrap-reverse">',
          default: 'nowrap',
          description: 'Sets flex-wrap.',
        },
        {
          name: 'basis',
          type: 'string',
          description:
            'Sets flex-basis. Supports "auto-200px" for fluid layouts.',
        },
      ]}
      examples={[
        {
          title: 'Basic Flex',
          description: 'A horizontal flex container with gap.',
          code: `<Flex gap="4" align="center">
  <Box p="3" style={{ background: 'var(--pittorica-indigo-3)' }}>1</Box>
  <Box p="3" style={{ background: 'var(--pittorica-indigo-3)' }}>2</Box>
  <Box p="3" style={{ background: 'var(--pittorica-indigo-3)' }}>3</Box>
</Flex>`,
          render: (
            <Flex gap="4" align="center">
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: '4px',
                  width: '40px',
                  textAlign: 'center',
                }}
              >
                1
              </Box>
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: '4px',
                  width: '40px',
                  textAlign: 'center',
                }}
              >
                2
              </Box>
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: '4px',
                  width: '40px',
                  textAlign: 'center',
                }}
              >
                3
              </Box>
            </Flex>
          ),
        },
        {
          title: 'Responsive Direction',
          description:
            'Direction changes from column to row at the md breakpoint.',
          code: `<Flex direction={{ initial: 'column', md: 'row' }} gap="4">
  <Box p="3" style={{ background: 'var(--pittorica-teal-3)' }}>Item A</Box>
  <Box p="3" style={{ background: 'var(--pittorica-teal-3)' }}>Item B</Box>
</Flex>`,
          render: (
            <Flex direction={{ initial: 'column', md: 'row' }} gap="4">
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-teal-3)',
                  borderRadius: '4px',
                }}
              >
                Item A
              </Box>
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-teal-3)',
                  borderRadius: '4px',
                }}
              >
                Item B
              </Box>
            </Flex>
          ),
        },
      ]}
    />
  );
}
