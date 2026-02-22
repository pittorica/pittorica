import { Button, Flex, toast } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function ToastRoute() {
  return (
    <DocPage
      name="Toast"
      description="Toast component for brief, non-interruptive notifications. It supports different colors, durations, and requires a ToastProvider at the root."
      packageName="toast-react"
      props={[
        {
          name: 'title',
          type: 'ReactNode',
          description: 'Main notification text.',
        },
        {
          name: 'description',
          type: 'ReactNode',
          description: 'Additional details.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'slate',
          description: 'Semantic color.',
        },
        {
          name: 'duration',
          type: 'number',
          default: '3000',
          description: 'Visible time in ms. 0 for persistent.',
        },
      ]}
      examples={[
        {
          title: 'Interactive Toasts',
          description: 'Click to dispatch notifications.',
          code: `<Button 
  onClick={() => toast({ title: 'Saved', description: 'Changes have been applied.', color: 'teal' })}
>
  Success Toast
</Button>`,
          render: (
            <Flex gap="3">
              <Button
                onClick={() =>
                  toast({
                    title: 'Saved',
                    description: 'Changes have been applied.',
                    color: 'teal',
                  })
                }
              >
                Success Toast
              </Button>
              <Button
                variant="tonal"
                color="red"
                onClick={() =>
                  toast({
                    title: 'Error',
                    description: 'Failed to upload.',
                    color: 'red',
                  })
                }
              >
                Error Toast
              </Button>
            </Flex>
          ),
        },
      ]}
    />
  );
}
