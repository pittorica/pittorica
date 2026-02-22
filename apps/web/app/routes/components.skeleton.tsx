import { Box, Flex, Skeleton } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function SkeletonRoute() {
  return (
    <DocPage
      name="Skeleton"
      description="Skeleton is a placeholder component used to represent content that is still loading. It helps reduce perceived latency and layout shift."
      packageName="skeleton-react"
      props={[
        {
          name: 'loading',
          type: 'boolean',
          default: 'true',
          description: 'If true, shows the skeleton. If false, shows children.',
        },
        {
          name: 'variant',
          type: '"rect" | "circle" | "text"',
          default: '"rect"',
          description: 'The shape of the skeleton.',
        },
        {
          name: 'width, height',
          type: 'string',
          description: 'Explicit dimensions.',
        },
      ]}
      examples={[
        {
          title: 'Loading States',
          description: 'Common placeholders for text and media.',
          code: `<Flex direction="column" gap="3" width="300px">
  <Skeleton variant="text" width="60%" />
  <Skeleton variant="rect" height="100px" />
  <Skeleton variant="text" />
</Flex>`,
          render: (
            <Flex direction="column" gap="3" width="300px">
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="rect" height="100px" />
              <Skeleton variant="text" />
            </Flex>
          ),
        },
        {
          title: 'Profile Placeholder',
          description: 'Combining circle and text skeletons.',
          code: `<Flex align="center" gap="3">
  <Skeleton variant="circle" width="48px" height="48px" />
  <Box width="150px">
    <Skeleton variant="text" mb="1" />
    <Skeleton variant="text" width="60%" />
  </Box>
</Flex>`,
          render: (
            <Flex align="center" gap="3">
              <Skeleton variant="circle" width="48px" height="48px" />
              <Box width="150px">
                <Skeleton variant="text" mb="1" />
                <Skeleton variant="text" width="60%" />
              </Box>
            </Flex>
          ),
        },
      ]}
    />
  );
}
