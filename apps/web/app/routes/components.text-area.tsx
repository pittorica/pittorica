import { Box, TextArea } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function TextAreaRoute() {
  return (
    <DocPage
      name="TextArea"
      description="TextArea allows users to enter longer, multi-line text. It supports auto-resizing and multiple compact sizes."
      packageName="text-area-react"
      props={[
        {
          name: 'label',
          type: 'ReactNode',
          description: 'Label for the area.',
        },
        {
          name: 'helperText',
          type: 'ReactNode',
          description: 'Small text below the area.',
        },
        {
          name: 'size',
          type: '"xs" | "sm" | "md" | "lg" | "xl"',
          default: 'sm',
          description: 'Minimum height scaling.',
        },
        {
          name: 'autoResize',
          type: 'boolean',
          default: 'false',
          description: 'Grows vertically as the user types.',
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
          title: 'Auto-resizing',
          description: 'A text area that expands automatically.',
          code: `<TextArea.Root label="Biography">
  <TextArea.Content autoResize placeholder="Tell us about yourself..." />
</TextArea.Root>`,
          render: (
            <Box width="400px">
              <TextArea.Root label="Biography">
                <TextArea.Content
                  autoResize
                  placeholder="Tell us about yourself..."
                />
              </TextArea.Root>
            </Box>
          ),
        },
      ]}
    />
  );
}
