import { Box, Heading, Section, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function SectionRoute() {
  return (
    <DocPage
      name="Section"
      description="Section is used for high-level page layout. It provides consistent vertical padding to separate different areas of a page."
      packageName="section-react"
      props={[
        {
          name: 'size',
          type: '"1" | "2" | "3" | "4"',
          default: '3',
          description: 'The vertical padding size.',
        },
        {
          name: 'as',
          type: 'string',
          default: 'section',
          description: 'The HTML tag.',
        },
      ]}
      examples={[
        {
          title: 'Page Structure',
          description: 'Using sections to divide a page.',
          code: `<Section size="3">
  <Heading>Hero Section</Heading>
</Section>
<Divider />
<Section size="2">
  <Heading>Features</Heading>
</Section>`,
          render: (
            <Box>
              <Section
                size="2"
                style={{ background: 'var(--pittorica-gray-2)' }}
              >
                <Heading size="6">Hero Section</Heading>
                <Text>Consistent vertical padding.</Text>
              </Section>
              <Section
                size="1"
                style={{ background: 'var(--pittorica-indigo-1)' }}
              >
                <Heading size="4">Sub Section</Heading>
                <Text>Smaller padding.</Text>
              </Section>
            </Box>
          ),
        },
      ]}
    />
  );
}
