import { useState } from 'react';

import { Flex, Switch, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function SwitchRoute() {
  const [checked, setChecked] = useState(false);

  return (
    <DocPage
      name="Switch"
      description="Switch is used for binary toggling between two states, such as 'on' and 'off'."
      packageName="switch-react"
      props={[
        {
          name: 'checked',
          type: 'boolean',
          description: 'Controlled checked state.',
        },
        {
          name: 'defaultChecked',
          type: 'boolean',
          description: 'Initial checked state.',
        },
        {
          name: 'onCheckedChange',
          type: '(checked: boolean) => void',
          description: 'Callback fired when state changes.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'source',
          description: 'Semantic color.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'If true, the switch is disabled.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'A standard switch toggle.',
          code: `const [checked, setChecked] = useState(false);

<Flex align="center" gap="3">
  <Switch checked={checked} onCheckedChange={setChecked} id="s1" />
  <Text as="label" htmlFor="s1">Enable notifications</Text>
</Flex>`,
          render: (
            <Flex align="center" gap="3">
              <Switch checked={checked} onCheckedChange={setChecked} id="s1" />
              <Text as="label" htmlFor="s1" style={{ cursor: 'pointer' }}>
                Enable notifications
              </Text>
            </Flex>
          ),
        },
        {
          title: 'Colors',
          description: 'Switches support semantic color tokens.',
          code: `<Flex gap="4">
  <Switch defaultChecked color="teal" />
  <Switch defaultChecked color="red" />
  <Switch defaultChecked color="amber" />
</Flex>`,
          render: (
            <Flex gap="4">
              <Switch defaultChecked color="teal" />
              <Switch defaultChecked color="red" />
              <Switch defaultChecked color="amber" />
            </Flex>
          ),
        },
      ]}
    />
  );
}
