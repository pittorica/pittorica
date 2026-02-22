import { CheckboxGroup } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function CheckboxGroupRoute() {
  return (
    <DocPage
      name="CheckboxGroup"
      description="CheckboxGroup allows users to select multiple options from a related set. It manages the state of nested Checkbox items."
      packageName="checkbox-group-react"
      props={[
        {
          name: 'defaultValue',
          type: 'string[]',
          description: 'Initially checked items.',
        },
        {
          name: 'onValueChange',
          type: '(value: string[]) => void',
          description: 'Callback when selection changes.',
        },
        {
          name: 'orientation',
          type: '"horizontal" | "vertical"',
          default: '"vertical"',
          description: 'Layout direction.',
        },
      ]}
      examples={[
        {
          title: 'Vertical List',
          description: 'A standard vertical list of checkboxes.',
          code: `<CheckboxGroup defaultValue={['apple']}>
  <CheckboxGroup.Item value="apple" label="Apple" />
  <CheckboxGroup.Item value="orange" label="Orange" />
</CheckboxGroup>`,
          render: (
            <CheckboxGroup defaultValue={['apple']}>
              <CheckboxGroup.Item value="apple" label="Apple" />
              <CheckboxGroup.Item value="orange" label="Orange" />
              <CheckboxGroup.Item value="banana" label="Banana" />
            </CheckboxGroup>
          ),
        },
      ]}
    />
  );
}
