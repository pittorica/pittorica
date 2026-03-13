import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea.Root> = {
  title: 'Forms/TextArea',
  component: TextArea.Root,
  args: {},
};

export default meta;
type Story = StoryObj<typeof TextArea.Root>;

export const Default: Story = {
  render: (args) => (
    <TextArea.Root {...args}>
      <TextArea.Content placeholder="Type here..." />
    </TextArea.Root>
  ),
};
