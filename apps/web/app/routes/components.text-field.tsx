import { IconMail } from '@tabler/icons-react';

import { Box, TextField } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function TextFieldRoute() {
  return (
    <DocPage
      name="TextField"
      description="TextField allows users to enter and edit text. It supports multiple sizes, input slots for icons, and error states."
      packageName="text-field-react"
      props={[
        {
          name: 'label',
          type: 'ReactNode',
          description: 'Label for the field.',
        },
        {
          name: 'helperText',
          type: 'ReactNode',
          description: 'Small text below the input.',
        },
        {
          name: 'size',
          type: '"xs" | "sm" | "md" | "lg" | "xl"',
          default: 'sm',
          description: 'Input height and typography scaling.',
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
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'Disabled state.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'A standard text input with label and helper text.',
          code: `<TextField.Root label="Full Name" helperText="Enter your first and last name.">
  <TextField.Input placeholder="e.g. Danilo C." />
</TextField.Root>`,
          render: (
            <Box width="300px">
              <TextField.Root
                label="Full Name"
                helperText="Enter your first and last name."
              >
                <TextField.Input placeholder="e.g. Danilo C." />
              </TextField.Root>
            </Box>
          ),
        },
        {
          title: 'With Icons',
          description: 'Use slots to add icons to the input.',
          code: `<TextField.Root label="Email">
  <TextField.Slot><IconMail size={16} /></TextField.Slot>
  <TextField.Input placeholder="mail@example.com" type="email" />
</TextField.Root>`,
          render: (
            <Box width="300px">
              <TextField.Root label="Email">
                <TextField.Slot>
                  <IconMail size={16} />
                </TextField.Slot>
                <TextField.Input placeholder="mail@example.com" type="email" />
              </TextField.Root>
            </Box>
          ),
        },
      ]}
    />
  );
}
