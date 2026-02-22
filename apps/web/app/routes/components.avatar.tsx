import { Avatar, Flex } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function AvatarRoute() {
  return (
    <DocPage
      name="Avatar"
      description="Avatar is used to represent a user or entity. It supports images with automatic fallback to initials or icons if the image fails to load."
      packageName="avatar-react"
      props={[
        { name: 'src', type: 'string', description: 'The image source URL.' },
        { name: 'alt', type: 'string', description: 'Alt text for the image.' },
        {
          name: 'fallback',
          type: 'ReactNode',
          description: 'Content to show if image fails or is missing.',
        },
        {
          name: 'size',
          type: '1-9',
          default: '3',
          description: 'The size of the avatar.',
        },
        {
          name: 'radius',
          type: '"none" | "small" | "medium" | "large" | "full"',
          default: 'full',
          description: 'Border radius.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'indigo',
          description: 'Background color for the fallback.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'Avatars with images and fallbacks.',
          code: `<Flex gap="3">
  <Avatar src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" alt="Colm Tuite" />
  <Avatar fallback="JD" />
</Flex>`,
          render: (
            <Flex gap="3">
              <Avatar
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                /* eslint-disable-next-line @cspell/spellchecker */
                alt="Colm Tuite"
              />
              <Avatar fallback="JD" />
            </Flex>
          ),
        },
        {
          title: 'Sizes',
          description: 'Avatars come in 9 sizes.',
          code: `<Flex gap="3" align="center">
  <Avatar size="1" fallback="1" />
  <Avatar size="3" fallback="3" />
  <Avatar size="5" fallback="5" />
  <Avatar size="7" fallback="7" />
  <Avatar size="9" fallback="9" />
</Flex>`,
          render: (
            <Flex gap="3" align="center">
              <Avatar size="1" fallback="1" />
              <Avatar size="3" fallback="3" />
              <Avatar size="5" fallback="5" />
              <Avatar size="7" fallback="7" />
              <Avatar size="9" fallback="9" />
            </Flex>
          ),
        },
      ]}
    />
  );
}
