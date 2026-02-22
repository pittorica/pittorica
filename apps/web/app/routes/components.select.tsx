import { IconWorld } from '@tabler/icons-react';

import { Box, Select } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function SelectRoute() {
  return (
    <DocPage
      name="Select"
      description="Select allows users to pick one option from a dropdown list. It uses native HTML select for accessibility and custom styling for aesthetic consistency."
      packageName="select-react"
      props={[
        {
          name: 'label',
          type: 'ReactNode',
          description: 'Label for the select.',
        },
        {
          name: 'helperText',
          type: 'ReactNode',
          description: 'Small text below the select.',
        },
        {
          name: 'size',
          type: '"xs" | "sm" | "md" | "lg" | "xl"',
          default: 'sm',
          description: 'Height scaling.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'source',
          description: 'Semantic color.',
        },
        {
          name: 'error',
          type: 'boolean',
          default: 'false',
          description: 'Visual error state.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'A standard select dropdown.',
          code: `<Select.Root label="Country">
  <Select.Content>
    <option value="it">Italy</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
  </Select.Content>
</Select.Root>`,
          render: (
            <Box width="300px">
              <Select.Root label="Country">
                <Select.Content>
                  <option value="it">Italy</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                </Select.Content>
              </Select.Root>
            </Box>
          ),
        },
        {
          title: 'With Icons',
          description: 'Add icons using the Slot component.',
          code: `<Select.Root label="Region" color="teal">
  <Select.Slot><IconWorld size={16} /></Select.Slot>
  <Select.Content>
    <option value="eu">Europe</option>
    <option value="na">North America</option>
  </Select.Content>
</Select.Root>`,
          render: (
            <Box width="300px">
              <Select.Root label="Region" color="teal">
                <Select.Slot>
                  <IconWorld size={16} />
                </Select.Slot>
                <Select.Content>
                  <option value="eu">Europe</option>
                  <option value="na">North America</option>
                </Select.Content>
              </Select.Root>
            </Box>
          ),
        },
      ]}
    />
  );
}
