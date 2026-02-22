import { Box, Tabs, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function TabsRoute() {
  return (
    <DocPage
      name="Tabs"
      description="Tabs organize content into separate views that users can switch between. It supports keyboard navigation and semantic coloring."
      packageName="tabs-react"
      props={[
        {
          name: 'defaultValue',
          type: 'string',
          description: 'Initial active tab value.',
        },
        {
          name: 'value',
          type: 'string',
          description: 'Controlled active tab value.',
        },
        {
          name: 'onValueChange',
          type: '(value: string) => void',
          description: 'Callback when tab changes.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'indigo',
          description: 'Color of the active tab indicator.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'A simple tabbed interface.',
          code: `<Tabs.Root defaultValue="account">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">
    <Box p="4"><Text>Account settings content.</Text></Box>
  </Tabs.Content>
  <Tabs.Content value="password">
    <Box p="4"><Text>Password security content.</Text></Box>
  </Tabs.Content>
</Tabs.Root>`,
          render: (
            <Tabs.Root defaultValue="account">
              <Tabs.List>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="password">Password</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="account">
                <Box p="4">
                  <Text>Account settings content.</Text>
                </Box>
              </Tabs.Content>
              <Tabs.Content value="password">
                <Box p="4">
                  <Text>Password security content.</Text>
                </Box>
              </Tabs.Content>
            </Tabs.Root>
          ),
        },
      ]}
    />
  );
}
