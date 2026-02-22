import { useState } from 'react';

import { Checkbox, Flex } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function CheckboxRoute() {
  const [checked, setChecked] = useState(false);

  return (
    <DocPage
      name="Checkbox"
      description="Checkbox allows the user to select one or more items from a set, or to switch between two states."
      packageName="checkbox-react"
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
          name: 'onChange',
          type: '(checked: boolean) => void',
          description: 'Callback fired when state changes.',
        },
        { name: 'label', type: 'string', description: 'The label text.' },
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
          description: 'If true, the checkbox is disabled.',
        },
        {
          name: 'required',
          type: 'boolean',
          default: 'false',
          description: 'Marks the input as required.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'A standard checkbox with a label.',
          code: `const [checked, setChecked] = useState(false);

<Checkbox 
  label="Accept terms and conditions" 
  checked={checked} 
  onChange={setChecked} 
/>`,
          render: (
            <Checkbox
              label="Accept terms and conditions"
              checked={checked}
              onChange={setChecked}
            />
          ),
        },
        {
          title: 'Colors',
          description: 'Checkboxes support semantic color tokens.',
          code: `<Flex direction="column" gap="2">
  <Checkbox label="Default" defaultChecked />
  <Checkbox label="Success" color="teal" defaultChecked />
  <Checkbox label="Warning" color="amber" defaultChecked />
</Flex>`,
          render: (
            <Flex direction="column" gap="2">
              <Checkbox label="Default" defaultChecked />
              <Checkbox label="Success" color="teal" defaultChecked />
              <Checkbox label="Warning" color="amber" defaultChecked />
            </Flex>
          ),
        },
      ]}
    />
  );
}
