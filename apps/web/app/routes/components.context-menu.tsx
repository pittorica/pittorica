import { Box, ContextMenu, ContextMenuItem, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function ContextMenuRoute() {
  return (
    <DocPage
      name="ContextMenu"
      description="ContextMenu appears when a user right-clicks an element. It provides actions that are specific to the clicked item."
      packageName="context-menu-react"
      props={[
        {
          name: 'trigger',
          type: 'ReactNode',
          description: 'The element that listens for right-clicks.',
        },
        {
          name: 'itemCount',
          type: 'number',
          description: 'Total number of top-level items.',
        },
        { name: 'children', type: 'ReactNode', description: 'Menu items.' },
      ]}
      examples={[
        {
          title: 'Basic Usage',
          description: 'Right-click the dashed area to see the menu.',
          code: `<ContextMenu
  itemCount={3}
  trigger={
    <Box p="9" style={{ border: '2px dashed var(--pittorica-gray-5)', borderRadius: '8px' }}>
      Right click here
    </Box>
  }
>
  <ContextMenuItem index={0}>Copy</ContextMenuItem>
  <ContextMenuItem index={1}>Paste</ContextMenuItem>
  <ContextMenuItem index={2} style={{ color: 'var(--pittorica-red-9)' }}>Delete</ContextMenuItem>
</ContextMenu>`,
          render: (
            <ContextMenu
              itemCount={3}
              trigger={
                <Box
                  p="9"
                  style={{
                    border: '2px dashed var(--pittorica-gray-5)',
                    borderRadius: '8px',
                    textAlign: 'center',
                    cursor: 'context-menu',
                  }}
                >
                  <Text color="gray">Right click here</Text>
                </Box>
              }
            >
              <ContextMenuItem index={0}>Copy</ContextMenuItem>
              <ContextMenuItem index={1}>Paste</ContextMenuItem>
              <ContextMenuItem
                index={2}
                style={{ color: 'var(--pittorica-red-9)' }}
              >
                Delete
              </ContextMenuItem>
            </ContextMenu>
          ),
        },
      ]}
    />
  );
}
