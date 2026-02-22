import { Flex, Heading } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function HeadingRoute() {
  return (
    <DocPage
      name="Heading"
      description="Heading component for titles. Supports polymorphic tags (h1-h6), responsive sizes (1-9), and semantic color tokens."
      packageName="heading-react"
      props={[
        {
          name: 'as',
          type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
          default: 'h1',
          description: 'The semantic HTML tag.',
        },
        {
          name: 'size',
          type: 'Responsive<1-9>',
          default: '6',
          description: 'Responsive size scaling.',
        },
        {
          name: 'weight',
          type: '"light" | "regular" | "medium" | "bold"',
          default: 'bold',
          description: 'Font weight.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          description: 'Semantic color token.',
        },
        {
          name: 'variant',
          type: '"classic" | "soft" | "outline"',
          default: 'classic',
          description: 'Visual variant.',
        },
      ]}
      examples={[
        {
          title: 'Responsive Sizes',
          description: 'Headings scale from 1 to 9.',
          code: `<Flex direction="column" gap="4">
  <Heading size="9">Size 9</Heading>
  <Heading size="7">Size 7</Heading>
  <Heading size="5">Size 5</Heading>
</Flex>`,
          render: (
            <Flex direction="column" gap="4">
              <Heading size="9">Size 9</Heading>
              <Heading size="7">Size 7</Heading>
              <Heading size="5">Size 5</Heading>
            </Flex>
          ),
        },
        {
          title: 'Soft Variant',
          description: 'A decorative variant with a soft background.',
          code: `<Heading variant="soft" color="indigo" size="6">Soft Heading</Heading>`,
          render: (
            <Heading variant="soft" color="indigo" size="6">
              Soft Heading
            </Heading>
          ),
        },
      ]}
    />
  );
}
