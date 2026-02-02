import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea.Root> = {
  title: 'Components/TextArea',
  component: TextArea.Root,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj = {
  render: () => (
    <TextArea.Root
      label="Description"
      helperText="Write a brief overview of your project."
    >
      <TextArea.Input placeholder="Type something..." />
    </TextArea.Root>
  ),
};

export const AutoResizing: StoryObj = {
  render: () => (
    <TextArea.Root
      label="Auto-expanding field"
      autoResize
      helperText="This field grows as you type."
      color="teal"
    >
      <TextArea.Input placeholder="Start typing a long text to see me grow..." />
    </TextArea.Root>
  ),
};

export const States: StoryObj = {
  render: () => (
    <Flex direction="column" gap="4" width="400px">
      <TextArea.Root label="Disabled state" disabled>
        <TextArea.Input defaultValue="I am disabled and cannot be edited." />
      </TextArea.Root>

      <TextArea.Root
        label="Error state"
        error
        helperText="This field is required."
      >
        <TextArea.Input placeholder="Fix the error..." />
      </TextArea.Root>
    </Flex>
  ),
};
