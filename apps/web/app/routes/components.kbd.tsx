import { Flex, Kbd, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function KbdRoute() {
  return (
    <DocPage
      name="Kbd"
      description="Kbd component for keyboard input representation. It is used to indicate keys or combinations of keys that the user can press."
      packageName="kbd-react"
      props={[
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The key name or icon.',
        },
      ]}
      examples={[
        {
          title: 'Combinations',
          description: 'Showing keyboard shortcuts.',
          code: `<Text>Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to search.</Text>`,
          render: (
            <Text>
              Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to search.
            </Text>
          ),
        },
        {
          title: 'Single Keys',
          description: 'Standard key names.',
          code: `<Flex gap="2">
  <Kbd>shift</Kbd>
  <Kbd>ctrl</Kbd>
  <Kbd>enter</Kbd>
</Flex>`,
          render: (
            <Flex gap="2">
              <Kbd>shift</Kbd>
              <Kbd>ctrl</Kbd>
              <Kbd>enter</Kbd>
            </Flex>
          ),
        },
      ]}
    />
  );
}
