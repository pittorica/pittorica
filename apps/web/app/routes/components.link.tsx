import { Link, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function LinkRoute() {
  return (
    <DocPage
      name="Link"
      description="Link is used for navigation. It defaults to an anchor tag but is fully polymorphic and can be used with router libraries."
      packageName="link-react"
      props={[
        {
          name: 'href',
          type: 'string',
          description: 'The URL the link points to.',
        },
        {
          name: 'underline',
          type: '"always" | "hover" | "none"',
          default: '"hover"',
          description: 'Underline behavior.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          description: 'Semantic color.',
        },
        {
          name: 'as',
          type: 'ElementType',
          default: '"a"',
          description: 'The component to render as.',
        },
      ]}
      examples={[
        {
          title: 'Basic Link',
          description: 'A standard link with hover underline.',
          code: `<Link href="https://github.com/pittorica/pittorica" target="_blank" rel="noopener noreferrer">
  GitHub Repository
</Link>`,
          render: (
            <Link
              href="https://github.com/pittorica/pittorica"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </Link>
          ),
        },
        {
          title: 'Colored Links',
          description: 'Using semantic colors for links.',
          code: `<Flex gap="4">
  <Link href="#" color="indigo">Primary</Link>
  <Link href="#" color="red">Destructive</Link>
</Flex>`,
          render: (
            <Text style={{ display: 'flex', gap: '1rem' }}>
              <Link href="#" color="indigo">
                Primary
              </Link>
              <Link href="#" color="red">
                Destructive
              </Link>
            </Text>
          ),
        },
      ]}
    />
  );
}
