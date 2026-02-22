import { useState } from 'react';

import { Button } from '@pittorica/button-react';
import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Sheet } from './Sheet';

const meta: Meta<typeof Sheet> = {
  title: 'Feedback/Sheet',
  component: Sheet,
  tags: ['autodocs'],
};
export default meta;

export const SideExample: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Side Sheet</Button>
        <Sheet
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Filters"
          side="right"
        >
          <Text color="slate">
            Side sheets show secondary content on desktop.
          </Text>
        </Sheet>
      </>
    );
  },
};

export const DarkSidebar: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="tonal" onClick={() => setOpen(true)}>
          Open Dark Sidebar
        </Button>
        <Sheet
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Navigation"
          side="left"
          appearance="dark"
        >
          <Flex direction="column" gap="4">
            <Text weight="medium">Main Menu</Text>
            <Flex direction="column" gap="2">
              <Button variant="text" style={{ justifyContent: 'flex-start' }}>
                Dashboard
              </Button>
              <Button variant="text" style={{ justifyContent: 'flex-start' }}>
                Projects
              </Button>
              <Button variant="text" style={{ justifyContent: 'flex-start' }}>
                Settings
              </Button>
            </Flex>
          </Flex>
        </Sheet>
      </>
    );
  },
};

export const BottomExample: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Bottom Sheet</Button>
        <Sheet
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Actions"
          side="bottom"
        >
          <Text color="slate">
            Bottom sheets are ideal for mobile interactions.
          </Text>
        </Sheet>
      </>
    );
  },
};
