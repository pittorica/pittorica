import { Avatar, Badge, Box, Flex } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function BadgeRoute() {
  return (
    <DocPage
      name="Badge"
      description="Badge is used to show a small numerical value or status descriptor, typically on icons or avatars."
      packageName="badge-react"
      props={[
        {
          name: 'badgeContent',
          type: 'ReactNode',
          description: 'The content to show inside the badge.',
        },
        {
          name: 'variant',
          type: '"standard" | "dot"',
          default: 'standard',
          description: 'The visual style.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'indigo',
          description: 'Semantic color.',
        },
        {
          name: 'invisible',
          type: 'boolean',
          default: 'false',
          description: 'If true, the badge is hidden.',
        },
        {
          name: 'max',
          type: 'number',
          default: '99',
          description: 'Max value to display (e.g. 99+).',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'Badges on boxes and avatars.',
          code: `<Flex gap="6">
  <Badge badgeContent={4} color="indigo">
    <Box width="40px" height="40px" style={{ background: 'var(--pittorica-gray-3)', borderRadius: '4px' }} />
  </Badge>
  <Badge badgeContent={1} color="red">
    <Avatar fallback="JD" />
  </Badge>
</Flex>`,
          render: (
            <Flex gap="6">
              <Badge badgeContent={4} color="indigo">
                <Box
                  width="40px"
                  height="40px"
                  style={{
                    background: 'var(--pittorica-gray-3)',
                    borderRadius: '4px',
                  }}
                />
              </Badge>
              <Badge badgeContent={1} color="red">
                <Avatar fallback="JD" />
              </Badge>
            </Flex>
          ),
        },
        {
          title: 'Dot Variant',
          description: 'A simple indicator dot.',
          code: `<Badge variant="dot" color="success">
  <Avatar fallback="JD" />
</Badge>`,
          render: (
            <Badge variant="dot" color="success">
              <Avatar fallback="JD" />
            </Badge>
          ),
        },
      ]}
    />
  );
}
