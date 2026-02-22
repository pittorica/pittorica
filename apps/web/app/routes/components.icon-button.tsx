import {
  IconHeart,
  IconPlus,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';

import { Flex, IconButton } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function IconButtonRoute() {
  return (
    <DocPage
      name="IconButton"
      description="IconButton is a button component optimized for displaying a single icon. It supports all standard Button variants and sizes."
      packageName="icon-button-react"
      props={[
        {
          name: 'variant',
          type: '"filled" | "tonal" | "outlined" | "text"',
          default: 'filled',
          description: 'Visual variant.',
        },
        {
          name: 'size',
          type: '"1" | "2" | "3" | "4"',
          default: '3',
          description: 'Dimensions.',
        },
        {
          name: 'color',
          type: 'PittoricaColor',
          default: 'source',
          description: 'Semantic color.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'Disabled state.',
        },
      ]}
      examples={[
        {
          title: 'Variants',
          description: 'Standard icon button styles.',
          code: `<Flex gap="3">
  <IconButton variant="filled"><IconPlus size={20} /></IconButton>
  <IconButton variant="tonal"><IconSettings size={20} /></IconButton>
  <IconButton variant="outlined"><IconHeart size={20} /></IconButton>
</Flex>`,
          render: (
            <Flex gap="3">
              <IconButton variant="filled">
                <IconPlus size={20} />
              </IconButton>
              <IconButton variant="tonal">
                <IconSettings size={20} />
              </IconButton>
              <IconButton variant="outlined">
                <IconHeart size={20} />
              </IconButton>
              <IconButton variant="text">
                <IconTrash size={20} />
              </IconButton>
            </Flex>
          ),
        },
      ]}
    />
  );
}
