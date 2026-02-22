import { Em, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function EmRoute() {
  return (
    <DocPage
      name="Em"
      description="Em component for italic text emphasis. It maps to the <em> tag and applies italic styling."
      packageName="em-react"
      props={[
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The text to emphasize.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'Used within a text block.',
          code: `<Text>You <Em>must</Em> read the instructions carefully.</Text>`,
          render: (
            <Text>
              You <Em>must</Em> read the instructions carefully.
            </Text>
          ),
        },
      ]}
    />
  );
}
