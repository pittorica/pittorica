import { Strong, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function StrongRoute() {
  return (
    <DocPage
      name="Strong"
      description="Strong component for bold text emphasis. It maps to the <strong> tag and applies bold weight from the design system."
      packageName="strong-react"
      props={[
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The text to embolden.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'Used within a text block.',
          code: `<Text>This is a <Strong>very important</Strong> announcement.</Text>`,
          render: (
            <Text>
              This is a <Strong>very important</Strong> announcement.
            </Text>
          ),
        },
      ]}
    />
  );
}
