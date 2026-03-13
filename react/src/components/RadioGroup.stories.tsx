import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  args: {},
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <label>
        <input type="radio" name="radio" /> Option 1
      </label>
      <label>
        <input type="radio" name="radio" /> Option 2
      </label>
    </RadioGroup>
  ),
};
