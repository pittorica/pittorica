import { Blockquote, Flex } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function BlockquoteRoute() {
  return (
    <DocPage
      name="Blockquote"
      description="Blockquote is used for extended quotations. It supports multiple decorative variants, including a 'fancy' style with a large background quote mark."
      packageName="blockquote-react"
      props={[
        {
          name: 'variant',
          type: '"classic" | "soft" | "solid" | "outline" | "fancy"',
          default: '"classic"',
          description: 'The visual style.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          description: 'Semantic color.',
        },
      ]}
      examples={[
        {
          title: 'Variants',
          description: 'Classic, soft, and fancy styles.',
          code: `<Blockquote variant="classic">Classic quotation style.</Blockquote>
<Blockquote variant="fancy" color="indigo">Fancy style with a decorative quote mark.</Blockquote>`,
          render: (
            <Flex direction="column" gap="6">
              <Blockquote variant="classic">
                Design is not just what it looks like and feels like. Design is
                how it works.
              </Blockquote>
              <Blockquote variant="fancy" color="indigo">
                The details are not the details. They make the design.
              </Blockquote>
              <Blockquote variant="soft" color="teal">
                Simplicity is the ultimate sophistication.
              </Blockquote>
            </Flex>
          ),
        },
      ]}
    />
  );
}
