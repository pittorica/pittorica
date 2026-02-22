import { IconInfoCircle } from '@tabler/icons-react';

import { Flex, Text, Tooltip } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function TooltipRoute() {
  return (
    <DocPage
      name="Tooltip"
      description="Tooltip is a small pop-up that appears when a user hovers over or focuses on an element, providing additional context or clarification."
      packageName="tooltip-react"
      props={[
        {
          name: 'content',
          type: 'ReactNode',
          description: 'The text or element to show inside the tooltip.',
        },
        {
          name: 'side',
          type: '"top" | "bottom"',
          default: '"top"',
          description: 'Preferred placement.',
        },
        {
          name: 'appearance',
          type: '"light" | "dark" | "inherit"',
          description: 'Theme override.',
        },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'Hover the icon to see the tooltip.',
          code: `<Tooltip content="This is extra information" side="top">
  <IconInfoCircle size={18} style={{ cursor: 'help' }} />
</Tooltip>`,
          render: (
            <Flex align="center" gap="2">
              <Text>Hover the icon</Text>
              <Tooltip content="This is extra information" side="top">
                <IconInfoCircle
                  size={18}
                  style={{ cursor: 'help', color: 'var(--pittorica-indigo-9)' }}
                />
              </Tooltip>
            </Flex>
          ),
        },
      ]}
    />
  );
}
