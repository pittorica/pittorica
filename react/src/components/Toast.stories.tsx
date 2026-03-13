import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';
import { toast, ToastProvider } from './Toast';

const meta: Meta<typeof ToastProvider> = {
  title: 'Components/Toast',
  component: ToastProvider,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

export const Default: Story = {
  render: () => (
    <>
      <ToastProvider />
      <Button onClick={() => toast({ title: 'Toast message' })}>
        Show Toast
      </Button>
    </>
  ),
};
