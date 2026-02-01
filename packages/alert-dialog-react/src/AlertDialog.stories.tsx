import { useState } from 'react';

import {
  DialogActions,
  DialogDescription,
  DialogTitle,
} from '@pittorica/dialog-react';
import type { Meta, StoryObj } from '@storybook/react';

import { AlertDialog } from './AlertDialog.js';

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    onClose: { action: 'closed' },
    closeOnOverlayClick: { control: 'boolean' },
    closeOnEsc: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Destructive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
      args.onClose?.();
    };

    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            border: '1px solid var(--pittorica-red-7)',
            borderRadius: '4px',
            background: 'var(--pittorica-red-2)',
            color: 'var(--pittorica-red-9)',
            fontWeight: 'bold',
          }}
        >
          Delete Account
        </button>

        <AlertDialog {...args} open={open} onClose={handleClose}>
          <DialogTitle color="red">Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          <DialogActions>
            <button
              type="button"
              onClick={handleClose}
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                border: '1px solid var(--pittorica-slate-4)',
                borderRadius: '4px',
                background: 'var(--pittorica-slate-2)',
                color: 'var(--pittorica-slate-12)',
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleClose}
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                border: 'none',
                borderRadius: '4px',
                background: 'var(--pittorica-red-9)',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Yes, delete account
            </button>
          </DialogActions>
        </AlertDialog>
      </>
    );
  },
};

export const ForcedInteraction: Story = {
  args: {
    closeOnOverlayClick: false,
    closeOnEsc: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Forced Interaction
        </button>

        <AlertDialog {...args} open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Critical Update</DialogTitle>
          <DialogDescription>
            Your session is about to expire. Please save your work before
            continuing. You cannot dismiss this by clicking outside.
          </DialogDescription>
          <DialogActions>
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                background: 'var(--pittorica-indigo-9)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              Understand
            </button>
          </DialogActions>
        </AlertDialog>
      </>
    );
  },
};
