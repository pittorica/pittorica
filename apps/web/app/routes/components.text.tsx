import { Em, Link, Strong, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function TextRoute() {
  return (
    <DocPage
      name="Text"
      description="The Text component is the primary building block for typography. It provides a way to apply typography tokens directly via props and defaults to a <span> element."
      packageName="text-react"
      props={[
        {
          name: 'as',
          type: 'string',
          default: 'span',
          description: 'The component or HTML tag to render.',
        },
        {
          name: 'size',
          type: '1-9',
          description: 'Sets the font size using a typography token.',
        },
        {
          name: 'weight',
          type: '"light" | "regular" | "medium" | "bold"',
          default: 'regular',
          description: 'Sets the font weight.',
        },
        {
          name: 'align',
          type: '"left" | "center" | "right"',
          description: 'Sets text alignment.',
        },
        {
          name: 'truncate',
          type: 'boolean',
          default: 'false',
          description: 'If true, truncates text with an ellipsis.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          description: 'Semantic color token.',
        },
      ]}
      examples={[
        {
          title: 'Mixed Typography',
          description: 'Combining Text with Strong, Em, and Link.',
          code: `<Text as="p">
  This is a paragraph with <Strong>bold words</Strong>, some 
  <Em>emphasized text</Em>, and an <Link href="#">inline link</Link>.
</Text>`,
          render: (
            <Text as="p">
              This is a paragraph with <Strong>bold words</Strong>, some
              <Em>emphasized text</Em>, and an <Link href="#">inline link</Link>
              .
            </Text>
          ),
        },
        {
          title: 'Truncation',
          description: 'Truncating text when it exceeds its container width.',
          code: `<Text truncate style={{ width: '200px', display: 'block' }}>
  This is a very long text that will be truncated with an ellipsis.
</Text>`,
          render: (
            <Text
              truncate
              style={{
                width: '200px',
                display: 'block',
                border: '1px solid var(--pittorica-gray-4)',
                padding: '4px',
              }}
            >
              This is a very long text that will be truncated with an ellipsis.
            </Text>
          ),
        },
      ]}
    />
  );
}
