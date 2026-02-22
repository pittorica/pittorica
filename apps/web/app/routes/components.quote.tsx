import { Quote, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function QuoteRoute() {
  return (
    <DocPage
      name="Quote"
      description="Quote component for short inline quotations. It maps to the <q> tag and automatically adds quotation marks."
      packageName="quote-react"
      props={[
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The text to quote.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'Used for brief inline quotes.',
          code: `<Text>As they say, <Quote>less is more</Quote>.</Text>`,
          render: (
            <Text>
              As they say, <Quote>less is more</Quote>.
            </Text>
          ),
        },
      ]}
    />
  );
}
