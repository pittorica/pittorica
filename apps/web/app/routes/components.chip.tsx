import { Chip, Flex } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function ChipRoute() {
  return (
    <DocPage
      name="Chip"
      description="Chip is a compact element used for tags, labels, or selections. It supports multiple variants and can be clickable or deletable."
      packageName="chip-react"
      props={[
        {
          name: 'variant',
          type: '"solid" | "soft" | "outline"',
          default: 'soft',
          description: 'Visual style.',
        },
        {
          name: 'size',
          type: '"1" | "2" | "3"',
          default: '2',
          description: 'Dimensions.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'indigo',
          description: 'Semantic color.',
        },
        {
          name: 'onDelete',
          type: '() => void',
          description: 'Callback for delete action.',
        },
        {
          name: 'startDecorator',
          type: 'ReactNode',
          description: 'Content at the start.',
        },
      ]}
      examples={[
        {
          title: 'Variants',
          description: 'Solid, soft, and outline styles.',
          code: `<Flex gap="2">
  <Chip variant="solid">Solid</Chip>
  <Chip variant="soft">Soft</Chip>
  <Chip variant="outline">Outline</Chip>
</Flex>`,
          render: (
            <Flex gap="2">
              <Chip variant="solid">Solid</Chip>
              <Chip variant="soft">Soft</Chip>
              <Chip variant="outline">Outline</Chip>
            </Flex>
          ),
        },
        {
          title: 'Deletable',
          description: 'Chips can be removed by the user.',
          code: `<Chip color="crimson" onDelete={() => alert('Delete')}>Remove Me</Chip>`,
          render: (
            <Chip color="crimson" onDelete={() => alert('Delete')}>
              Remove Me
            </Chip>
          ),
        },
      ]}
    />
  );
}
