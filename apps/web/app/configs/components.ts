export interface ComponentGroup {
  title: string;
  components: string[];
}

export const componentGroups: ComponentGroup[] = [
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

export const formatComponentName = (name: string) =>
  name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
