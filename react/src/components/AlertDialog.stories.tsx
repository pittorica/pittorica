import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  AlertDialog,
  AlertDialogActions,
  AlertDialogDescription,
  AlertDialogTitle,
} from './AlertDialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  args: {
    open: true,
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTitle>Alert Title</AlertDialogTitle>
      <AlertDialogDescription>
        This is a description of the alert dialog.
      </AlertDialogDescription>
      <AlertDialogActions>
        <button onClick={() => {}}>Cancel</button>
        <button onClick={() => {}}>Confirm</button>
      </AlertDialogActions>
    </AlertDialog>
  ),
};
