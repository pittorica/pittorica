import { IconAlertTriangle, IconInfoCircle } from '@tabler/icons-react';

import { Callout } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function CalloutRoute() {
  return (
    <DocPage
      name="Callout"
      description="Callout provides important contextual information or feedback to the user. It can be used for informational, success, warning, or error messages."
      packageName="callout-react"
      props={[
        {
          name: 'variant',
          type: '"soft" | "outline"',
          default: 'soft',
          description: 'The visual style.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'indigo',
          description: 'Semantic color.',
        },
        {
          name: 'size',
          type: '"xs" | "sm" | "md" | "lg" | "xl"',
          default: 'md',
          description: 'Dimensions.',
        },
        {
          name: 'direction',
          type: '"row" | "column"',
          default: 'row',
          description: 'Flex direction.',
        },
      ]}
      examples={[
        {
          title: 'Basic Callout',
          description: 'A standard informational callout.',
          code: `<Callout color="indigo">
  <Callout.Icon><IconInfoCircle size={20} /></Callout.Icon>
  <Callout.Text>You will need to verify your email address to complete the registration.</Callout.Text>
</Callout>`,
          render: (
            <Callout color="indigo">
              <Callout.Icon>
                <IconInfoCircle size={20} />
              </Callout.Icon>
              <Callout.Text>
                You will need to verify your email address to complete the
                registration.
              </Callout.Text>
            </Callout>
          ),
        },
        {
          title: 'Warning State',
          description: 'Using a different color and size.',
          code: `<Callout color="amber" variant="outline" size="lg">
  <Callout.Icon><IconAlertTriangle size={24} /></Callout.Icon>
  <Callout.Text>Your subscription is about to expire in 3 days.</Callout.Text>
</Callout>`,
          render: (
            <Callout color="amber" variant="outline" size="lg">
              <Callout.Icon>
                <IconAlertTriangle size={24} />
              </Callout.Icon>
              <Callout.Text>
                Your subscription is about to expire in 3 days.
              </Callout.Text>
            </Callout>
          ),
        },
      ]}
    />
  );
}
