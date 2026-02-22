import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Interactive/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['indigo', 'red', 'teal', 'amber', 'slate', 'source'], // Added 'source' to options
    },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onClick: fn(),
    label: 'Accept Terms and Conditions',
    color: 'indigo',
  },
  render: (args) => (
    <Flex p="4">
      {' '}
      {/* Added padding to wrapper */}
      <Checkbox {...args} />
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Checkbox label="Default Indigo" color="indigo" defaultChecked />
      <Checkbox label="Success Teal" color="teal" defaultChecked />
      <Checkbox label="Danger Red" color="red" defaultChecked />
      <Checkbox label="Warning Amber" color="amber" defaultChecked />
      <Checkbox label="Source Color" color="source" defaultChecked />
    </Flex>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <PittoricaTheme
      appearance="dark"
      style={{
        padding: '2rem',
        background: 'var(--pittorica-surface-0)',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Checkbox label="Dark Mode Option 1" color="indigo" defaultChecked />
      <Checkbox label="Dark Mode Option 2" color="teal" />
      <Checkbox
        label="Disabled Dark Mode"
        color="red"
        disabled
        defaultChecked
      />
    </PittoricaTheme>
  ),
};

export const RequiredExample: Story = {
  args: {
    label: 'I agree',
    helperText: 'Your feedback is important.',
    required: true,
  },
  render: (args) => (
    <Flex direction="column" gap="3" p="4">
      {' '}
      {/* Added padding */}
      <Checkbox {...args} label="I agree to the terms" />
      <Checkbox {...args} label="I agree to the privacy policy" />
    </Flex>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const element =
      canvas.queryByRole('button') ||
      canvas.queryByRole('checkbox') ||
      canvas.queryByRole('radio');
    if (element) {
      await userEvent.click(element);
      if (args.onClick) {
        await expect(args.onClick).toHaveBeenCalled();
      }
    }
  },
};
