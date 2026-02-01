import { useState } from 'react';

import { PittoricaTheme } from '@pittorica/react-theme';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Dialog,
  DialogActions,
  DialogDescription,
  DialogTitle,
} from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'If true, the dialog is rendered.',
    },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
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
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: '#fff',
          }}
        >
          Open Dialog
        </button>
        <Dialog {...args} open={open} onClose={handleClose}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of the dialog content. It provides context for
            the user regarding the action they are about to take.
          </DialogDescription>
          <DialogActions>
            <button
              type="button"
              onClick={handleClose}
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                marginRight: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                background: '#f5f5f5',
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
                border: '1px solid #000',
                borderRadius: '4px',
                background: '#000',
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              Confirm
            </button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

export const Dark: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
      args.onClose?.();
    };

    return (
      <PittoricaTheme
        appearance="dark"
        style={{
          padding: '2rem',
          background: 'var(--pittorica-surface-0)',
          color: 'var(--pittorica-surface-9)',
        }}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            border: '1px solid var(--pittorica-surface-4)',
            borderRadius: '4px',
            background: 'var(--pittorica-surface-2)',
            color: 'inherit',
          }}
        >
          Open Dark Dialog
        </button>
        <Dialog {...args} open={open} onClose={handleClose}>
          <DialogTitle>Dark Theme Dialog</DialogTitle>
          <DialogDescription>
            This dialog demonstrates the dark theme appearance. The overlay and
            content adapt to the dark color scheme.
          </DialogDescription>
          <DialogActions>
            <button
              type="button"
              onClick={handleClose}
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                border: 'none',
                borderRadius: '4px',
                background: 'var(--pittorica-source-color)',
                color: 'var(--pittorica-on-source-color)',
                fontWeight: 'bold',
              }}
            >
              Close
            </button>
          </DialogActions>
        </Dialog>
      </PittoricaTheme>
    );
  },
};
