import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Dialog,
  DialogActions,
  DialogDescription,
  DialogTitle,
} from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  args: {
    open: true,
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a description of the dialog.
      </DialogDescription>
      <DialogActions>
        <button onClick={args.onClose}>Close</button>
      </DialogActions>
    </Dialog>
  ),
};
