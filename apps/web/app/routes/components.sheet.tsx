import { useState } from 'react';

import { Button, Flex, Sheet, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function SheetRoute() {
  const [open, setOpen] = useState(false);

  return (
    <DocPage
      name="Sheet"
      description="Sheet component for modal panels that slide in from any side of the screen. Ideal for navigation drawers or detailed forms."
      packageName="sheet-react"
      props={[
        {
          name: 'isOpen',
          type: 'boolean',
          description: 'If true, the sheet is open.',
        },
        {
          name: 'onClose',
          type: '() => void',
          description: 'Callback when closing.',
        },
        {
          name: 'side',
          type: '"left" | "right" | "top" | "bottom"',
          default: '"right"',
          description: 'Slide-in direction.',
        },
        { name: 'title', type: 'string', description: 'Header title.' },
      ]}
      examples={[
        {
          title: 'Basic Sheet',
          description: 'A standard side panel.',
          code: `const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Filters</Button>
<Sheet isOpen={open} onClose={() => setOpen(false)} title="Filters">
  <Text>Configure your view options here.</Text>
</Sheet>`,
          render: (
            <>
              <Button onClick={() => setOpen(true)}>Open Filters</Button>
              <Sheet
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Filters"
              >
                <Flex direction="column" gap="4">
                  <Text color="gray">Configure your view options here.</Text>
                  <Button variant="filled" onClick={() => setOpen(false)}>
                    Apply
                  </Button>
                </Flex>
              </Sheet>
            </>
          ),
        },
      ]}
    />
  );
}
