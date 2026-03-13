import type { Meta, StoryObj } from '@storybook/react-vite';

import { Code } from './Code';
import { Flex } from './Flex';
import { Text } from './Text';

const meta: Meta<typeof Code> = {
  title: 'Typography/Code',
  component: Code,
  args: {
    children: 'console.log("Hello World")',
  },
  argTypes: {
    language: {
      control: 'select',
      options: ['typescript', 'javascript', 'bash', 'json', 'css', 'html'],
    },
    showLineNumbers: { control: 'boolean' },
    copyable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {};

export const Inline: Story = {
  render: () => (
    <Text>
      You can install the package using <Code>pnpm add pittorica</Code>. Click
      the code to copy it!
    </Text>
  ),
};

const tsCode = `import React from 'react';

export const MyComponent = () => {
  return (
    <div>
      <h1>Hello Pittorica</h1>
    </div>
  );
};`;

export const Multiline: Story = {
  args: {
    children: tsCode,
    language: 'typescript',
    filename: 'MyComponent.tsx',
  },
};

export const Languages: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Code language="bash" filename="install.sh">
        pnpm install pittorica
      </Code>
      <Code language="json" filename="package.json">
        {`{
  "name": "my-app",
  "dependencies": {
    "pittorica": "latest"
  }
}`}
      </Code>
      <Code language="css" filename="styles.css">
        {`.container {
  display: flex;
  padding: 20px;
  background-color: var(--pittorica-slate-1);
}`}
      </Code>
    </Flex>
  ),
};

export const NoLineNumbers: Story = {
  args: {
    children: tsCode,
    showLineNumbers: false,
  },
};

export const NotCopyable: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Text>
        This inline code is not copyable:{' '}
        <Code copyable={false}>secret-key</Code>
      </Text>
      <Code copyable={false} language="typescript">
        {`// This code block has no copy button
const x = 10;`}
      </Code>
    </Flex>
  ),
};
