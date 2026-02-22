import { Box, Code } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function CodeRoute() {
  return (
    <DocPage
      name="Code"
      description="Code component for displaying code snippets. It supports syntax highlighting via Prism, copy-to-clipboard functionality, and filename headers."
      packageName="code-react"
      props={[
        {
          name: 'language',
          type: 'string',
          default: 'typescript',
          description: 'The programming language for highlighting.',
        },
        {
          name: 'filename',
          type: 'string',
          description: 'Displays a filename in the header.',
        },
        {
          name: 'showLineNumbers',
          type: 'boolean',
          default: 'true',
          description: 'Toggle line numbers.',
        },
        { name: 'as', type: 'ElementType', description: 'Polymorphic tag.' },
      ]}
      examples={[
        {
          title: 'Inline Code',
          description: 'A simple inline code snippet.',
          code: `<Text>Install it using <Code>npm install pittorica</Code></Text>`,
          render: (
            <Box>
              Install it using <Code>npm install pittorica</Code>
            </Box>
          ),
        },
        {
          title: 'Code Block',
          description: 'A multi-line code block with a filename.',
          code: `<Code language="typescript" filename="Example.ts">
{\`const hello = "world";
console.log(hello); \`}
</Code>`,
          render: (
            <Code language="typescript" filename="Example.ts">
              {`const hello = "world";
console.log(hello); `}
            </Code>
          ),
        },
      ]}
    />
  );
}
