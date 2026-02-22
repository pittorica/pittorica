import { useState } from 'react';

import {
  AlertDialog,
  AlertDialogActions,
  AlertDialogDescription,
  AlertDialogTitle,
  Button,
} from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function AlertDialogRoute() {
  const [open, setOpen] = useState(false);

  return (
    <DocPage
      name="AlertDialog"
      description="AlertDialog is a variation of Dialog used for mandatory confirmations or destructive actions. It cannot be dismissed by clicking the overlay by default."
      packageName="alert-dialog-react"
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
          default: 'false',
          description: 'Allow closing via backdrop click.',
        },
        {
          name: 'closeOnEsc',
          type: 'boolean',
          default: 'false',
          description: 'Allow closing via Esc key.',
        },
      ]}
      examples={[
        {
          title: 'Destructive Action',
          description: 'Used for confirming irreversible actions.',
          code: `<Button variant="tonal" color="red" onClick={() => setOpen(true)}>Delete Account</Button>

<AlertDialog open={open} onClose={() => setOpen(false)}>
  <AlertDialogTitle color="red">Are you absolutely sure?</AlertDialogTitle>
  <AlertDialogDescription>This action cannot be undone. This will permanently delete your data.</AlertDialogDescription>
  <AlertDialogActions>
    <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="filled" color="red" onClick={() => setOpen(false)}>Yes, delete account</Button>
  </AlertDialogActions>
</AlertDialog>`,
          render: (
            <>
              <Button variant="tonal" color="red" onClick={() => setOpen(true)}>
                Delete Account
              </Button>
              <AlertDialog open={open} onClose={() => setOpen(false)}>
                <AlertDialogTitle color="red">
                  Are you absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your data.
                </AlertDialogDescription>
                <AlertDialogActions>
                  <Button variant="text" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button
                    variant="filled"
                    color="red"
                    onClick={() => setOpen(false)}
                  >
                    Yes, delete account
                  </Button>
                </AlertDialogActions>
              </AlertDialog>
            </>
          ),
        },
      ]}
    />
  );
}
