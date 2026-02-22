import {
  Button,
  Code,
  Flex,
  Heading,
  Link,
  Section,
  Text,
  toast,
} from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function ToastRoute() {
  return (
    <DocPage
      name="Toast"
      description="Toast component for brief, non-interruptive notifications. It supports different colors, durations, and requires a ToastProvider at the root."
      packageName="toast-react"
      setup={
        <Section size="1" id="setup">
          <Flex direction="column" gap="4">
            <Flex align="center" gap="2">
              <Link
                href="#setup"
                color="gray"
                underline="none"
                style={{ opacity: 0.5 }}
              >
                #
              </Link>
              <Heading size="6">Setup</Heading>
            </Flex>
            <Text mb="4">
              To use the toast system, you must render the{' '}
              <code>ToastProvider</code> at the root of your application. This
              component acts as the container for all dispatched notifications.
            </Text>

            <Code language="tsx">
              {`import { ToastProvider } from '@pittorica/react';

export default function Root() {
  return (
    <html>
      <body>
        {/* Your app content */}
        <ToastProvider />
      </body>
    </html>
  );
}`}
            </Code>
          </Flex>
        </Section>
      }
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
