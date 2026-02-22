import { Box } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function BoxRoute() {
  return (
    <DocPage
      name="Box"
      description="Box is the most basic layout component. It provides a way to apply spacing and layout tokens directly via props, and defaults to a <div> element."
      packageName="box-react"
      props={[
        {
          name: 'as',
          type: 'ElementType',
          default: 'div',
          description: 'The component or HTML tag to render.',
        },
        {
          name: 'display',
          type: 'string',
          description: 'Sets the CSS display property.',
        },
        {
          name: 'm',
          type: '0-9',
          description: 'Sets the margin for all sides using a spacing token.',
        },
        {
          name: 'mt, mr, mb, ml',
          type: '0-9',
          description: 'Sets margin for specific sides.',
        },
        {
          name: 'mx, my',
          type: '0-9',
          description: 'Sets horizontal or vertical margin.',
        },
        {
          name: 'p',
          type: '0-9',
          description: 'Sets the padding for all sides using a spacing token.',
        },
        {
          name: 'pt, pr, pb, pl',
          type: '0-9',
          description: 'Sets padding for specific sides.',
        },
        {
          name: 'px, py',
          type: '0-9',
          description: 'Sets horizontal or vertical padding.',
        },
        {
          name: 'width, height',
          type: 'string',
          description: 'Sets dimensions.',
        },
        { name: 'position', type: 'string', description: 'Sets CSS position.' },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'A Box with margin and padding using tokens.',
          code: `<Box p="4" m="2" style={{ backgroundColor: 'var(--pittorica-gray-3)' }}>
  Content inside a Box
</Box>`,
          render: (
            <Box
              p="4"
              m="2"
              style={{
                backgroundColor: 'var(--pittorica-gray-3)',
                borderRadius: 'var(--pittorica-radius-2)',
              }}
            >
              Content inside a Box
            </Box>
          ),
        },
        {
          title: 'Polymorphic Box',
          description:
            'Render a Box as a different HTML tag using the "as" prop.',
          code: `<Box as="section" p="5" style={{ border: '1px solid var(--pittorica-indigo-6)' }}>
  This is a section tag
</Box>`,
          render: (
            <Box
              as="section"
              p="5"
              style={{
                border: '1px solid var(--pittorica-indigo-6)',
                borderRadius: 'var(--pittorica-radius-2)',
              }}
            >
              This is a section tag
            </Box>
          ),
        },
      ]}
    />
  );
}
