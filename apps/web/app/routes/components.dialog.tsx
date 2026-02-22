import { useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogDescription,
  DialogTitle,
} from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function DialogRoute() {
  const [open, setOpen] = useState(false);

  return (
    <DocPage
      name="Dialog"
      description="Dialog is a modal window that overlays the primary window, rendering the content underneath inert. It is used for tasks that require user focus."
      packageName="dialog-react"
      props={[
        {
          name: 'open',
          type: 'boolean',
          description: 'If true, the dialog is open.',
        },
        {
          name: 'onClose',
          type: '() => void',
          description: 'Callback fired when the dialog is closed.',
        },
        {
          name: 'closeOnOverlayClick',
          type: 'boolean',
          default: 'true',
          description: 'Allow closing via backdrop click.',
        },
        {
          name: 'closeOnEsc',
          type: 'boolean',
          default: 'true',
          description: 'Allow closing via Esc key.',
        },
      ]}
      examples={[
        {
          title: 'Interactive Dialog',
          description: 'A standard dialog with actions.',
          code: `const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Dialog</Button>

<Dialog open={open} onClose={() => setOpen(false)}>
  <DialogTitle>Dialog Title</DialogTitle>
  <DialogDescription>This is a description of the dialog content.</DialogDescription>
  <DialogActions>
    <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="filled" onClick={() => setOpen(false)}>Confirm</Button>
  </DialogActions>
</Dialog>`,
          render: (
            <>
              <Button onClick={() => setOpen(true)}>Open Dialog</Button>
              <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a description of the dialog content.
                </DialogDescription>
                <DialogActions>
                  <Button variant="text" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="filled" onClick={() => setOpen(false)}>
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          ),
        },
      ]}
    />
  );
}
