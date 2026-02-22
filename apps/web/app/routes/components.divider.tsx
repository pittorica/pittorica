import { Box, Divider } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function DividerRoute() {
  return (
    <DocPage
      name="Divider"
      description="Divider is used to separate content visually. It supports multiple variants including solid lines and SVG patterns like waves and zigzags."
      packageName="divider-react"
      props={[
        {
          name: 'variant',
          type: '"solid" | "double" | "dots" | "wave" | "scallop" | "zigzag"',
          default: 'solid',
          description: 'The visual pattern.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'slate',
          description: 'Semantic color.',
        },
        {
          name: 'thickness',
          type: 'string | number',
          default: '1px',
          description: 'Line thickness (solid only).',
        },
        {
          name: 'children',
          type: 'ReactNode',
          description: 'Optional text or icon (solid only).',
        },
      ]}
      examples={[
        {
          title: 'SVG Patterns',
          description: 'Stylized dividers for creative layouts.',
          code: `<Divider variant="wave" color="indigo" />
<Divider variant="scallop" color="teal" />`,
          render: (
            <Box
              width="100%"
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <Divider variant="wave" color="indigo" />
              <Divider variant="scallop" color="teal" />
              <Divider variant="zigzag" color="orange" />
            </Box>
          ),
        },
        {
          title: 'With Content',
          description: 'A solid divider with text in the middle.',
          code: `<Divider>OR CONTINUE WITH</Divider>`,
          render: (
            <Box width="100%">
              <Divider>OR CONTINUE WITH</Divider>
            </Box>
          ),
        },
      ]}
    />
  );
}
