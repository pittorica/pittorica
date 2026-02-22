import {
  Box,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function PopoverRoute() {
  return (
    <DocPage
      name="Popover"
      description="Popover is a non-modal container that appears next to a trigger element. It is commonly used for secondary actions or detailed information."
      packageName="popover-react"
      props={[
        {
          name: 'placement',
          type: 'string',
          default: '"bottom"',
          description: 'Alignment relative to trigger.',
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
          description: 'Click the button to open the popover.',
          code: `<Popover placement="bottom">
  <PopoverTrigger>
    <Button variant="outlined">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <Box p="1">
      <Text weight="bold">Popover Title</Text>
      <Text color="gray">Detailed information goes here.</Text>
    </Box>
  </PopoverContent>
</Popover>`,
          render: (
            <Popover placement="bottom">
              <PopoverTrigger>
                <Button variant="outlined">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent p="4" style={{ width: '200px' }}>
                <Box>
                  <Text
                    weight="bold"
                    style={{ display: 'block', marginBottom: '4px' }}
                  >
                    Popover Title
                  </Text>
                  <Text color="gray" size="2">
                    Detailed information goes here.
                  </Text>
                </Box>
              </PopoverContent>
            </Popover>
          ),
        },
      ]}
    />
  );
}
