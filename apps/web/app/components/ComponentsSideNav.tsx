import { NavLink } from 'react-router';

import { Box, Flex, Heading, Link, Sheet } from '@pittorica/react';

interface ComponentsSideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const componentGroups = [
  {
    title: 'Layout',
    components: [
      'box',
      'flex',
      'grid',
      'container',
      'section',
      'inset',
      'stack',
    ],
  },
  {
    title: 'Typography',
    components: [
      'text',
      'heading',
      'blockquote',
      'quote',
      'kbd',
      'code',
      'link',
      'em',
    ],
  },
  {
    title: 'Interactive',
    components: [
      'button',
      'icon-button',
      'checkbox',
      'radio',
      'switch',
      'select',
      'slider',
      'text-field',
      'text-area',
    ],
  },
  {
    title: 'Feedback & Overlays',
    components: [
      'skeleton',
      'badge',
      'callout',
      'progress',
      'toast',
      'tooltip',
      'popover',
      'dialog',
      'alert-dialog',
      'sheet',
    ],
  },
  {
    title: 'Data Structures',
    components: ['card', 'table', 'data-list', 'divider'],
  },
  {
    title: 'Menus & Navigation',
    components: ['dropdown-menu', 'context-menu', 'tabs', 'segmented-control'],
  },
  {
    title: 'Layout & Media',
    components: ['aspect-ratio', 'avatar', 'carousel', 'chip'],
  },
  {
    title: 'Composite',
    components: [
      'checkbox-group',
      'checkbox-card',
      'radio-group',
      'radio-card',
      'hover-card',
    ],
  },
].map((group) => ({
  ...group,
  // eslint-disable-next-line unicorn/no-array-sort
  components: [...group.components].sort(),
}));

const formatName = (name: string) =>
  name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const ComponentsSideNav = ({
  isOpen,
  onClose,
}: ComponentsSideNavProps) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose} side="right" title="Components">
      <Flex direction="column" gap="5">
        {componentGroups.map((group) => (
          <Box key={group.title}>
            <Heading
              size="2"
              weight="bold"
              color="gray"
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 'var(--pittorica-space-3)',
                opacity: 0.6,
              }}
            >
              {group.title}
            </Heading>
            <Flex direction="column" gap="2">
              {group.components.map((component) => (
                <Link
                  key={component}
                  as={NavLink}
                  to={`/components/${component}`}
                  color="inherit"
                  onClick={onClose}
                  style={{
                    fontSize: 'var(--pittorica-font-size-2)',
                    paddingLeft: 'var(--pittorica-space-1)',
                  }}
                >
                  {formatName(component)}
                </Link>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Sheet>
  );
};
