import type { Meta, StoryObj } from '@storybook/react-vite';

import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  args: {},
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  render: (args) => (
    <CheckboxGroup {...args}>
      <label>
        <input type="checkbox" /> Option 1
      </label>
      <label>
        <input type="checkbox" /> Option 2
      </label>
    </CheckboxGroup>
  ),
};
