import { useState } from 'react';

import { Flex, Radio, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function RadioRoute() {
  const [checked, setChecked] = useState(false);

  return (
    <DocPage
      name="Radio"
      description="Radio allows the user to select one option from a set. It should typically be used within a RadioGroup."
      packageName="radio-react"
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
          description: 'If true, the radio is disabled.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'A standard radio button.',
          code: `const [checked, setChecked] = useState(false);

<Flex align="center" gap="2">
  <Radio id="r1" checked={checked} onCheckedChange={setChecked} />
  <Text as="label" htmlFor="r1">Option 1</Text>
</Flex>`,
          render: (
            <Flex align="center" gap="2">
              <Radio id="r1" checked={checked} onCheckedChange={setChecked} />
              <Text as="label" htmlFor="r1" style={{ cursor: 'pointer' }}>
                Option 1
              </Text>
            </Flex>
          ),
        },
        {
          title: 'Colors',
          description: 'Radios support semantic color tokens.',
          code: `<Flex gap="4">
  <Radio checked color="indigo" />
  <Radio checked color="teal" />
  <Radio checked color="orange" />
</Flex>`,
          render: (
            <Flex gap="4">
              <Radio checked color="indigo" />
              <Radio checked color="teal" />
              <Radio checked color="orange" />
            </Flex>
          ),
        },
      ]}
    />
  );
}
