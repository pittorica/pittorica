import { AspectRatio, Box, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function AspectRatioRoute() {
  return (
    <DocPage
      name="AspectRatio"
      description="AspectRatio maintains a consistent width-to-height ratio for its child element, which is useful for responsive images, videos, or maps."
      packageName="aspect-ratio-react"
      props={[
        {
          name: 'ratio',
          type: 'number',
          default: '1 / 1',
          description: 'The desired aspect ratio (e.g. 16/9).',
        },
      ]}
      examples={[
        {
          title: 'Widescreen (16:9)',
          description: 'Maintaining a 16:9 ratio for an image.',
          code: `<AspectRatio ratio={16 / 9}>
  <img src="landscape.jpg" alt="Landscape" style={{ objectFit: 'cover' }} />
</AspectRatio>`,
          render: (
            <Box width="400px">
              <AspectRatio
                ratio={16 / 9}
                style={{ borderRadius: '8px', overflow: 'hidden' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1769251297393-8178b5988b08?q=80&w=1170&auto=format&fit=crop"
                  alt="Landscape"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AspectRatio>
            </Box>
          ),
        },
        {
          title: 'Square (1:1)',
          description: 'Maintaining a perfect square ratio.',
          code: `<AspectRatio ratio={1}>
  <Box style={{ background: 'var(--pittorica-teal-3)' }} />
</AspectRatio>`,
          render: (
            <Box width="100px">
              <AspectRatio
                ratio={1}
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: 'var(--pittorica-teal-3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text color="teal">1:1</Text>
              </AspectRatio>
            </Box>
          ),
        },
      ]}
    />
  );
}
