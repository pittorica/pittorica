import { useState } from 'react';

import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Radio } from './Radio.js';

const meta = {
  title: 'Interactive/Radio',
  args: { onClick: fn() },
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'teal', 'amber', 'red', 'slate', 'source'],
    },
    disabled: { control: 'boolean' },
    required: {
      control: 'boolean',
      description: 'Marks the radio input as required',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Flex align="center" gap="2">
        <Radio id="r1" checked={checked} onCheckedChange={setChecked} />
        <Text as="label" htmlFor="r1" style={{ cursor: 'pointer' }}>
          Accept terms and conditions
        </Text>
      </Flex>
    );
  },
};

export const Colors: Story = {
  render: () => (
    <Flex gap="4">
      <Radio checked color="indigo" />
      <Radio checked color="teal" />
      <Radio checked color="orange" />
      <Radio checked color="red" />
      <Radio checked color="source" />
    </Flex>
  ),
};

export const RequiredExample: Story = {
  render: () => (
    <form>
      <Flex direction="column" gap="2" p="4"> {/* Added padding */}
        <Radio
          label="Option 1"
          value="option1"
          name="myRadioGroup"
          required
          color="source"
        />
        <Radio label="Option 2" value="option2" name="myRadioGroup" />
      </Flex>
      <button type="submit">Submit</button>
    </form>
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
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <Radio color="teal" checked />
      <Radio color="indigo" />
      <Radio color="red" disabled />
      <Radio color="source" checked />
    </PittoricaTheme>
  ),
};

export const States: Story = {
  render: () => (
    <Flex gap="4" align="center">
      <Flex direction="column" align="center" gap="1">
        <Radio checked={false} />
        <Text>Unchecked</Text>
      </Flex>
      <Flex direction="column" align="center" gap="1">
        <Radio checked={true} />
        <Text>Checked</Text>
      </Flex>
      <Flex direction="column" align="center" gap="1">
        <Radio disabled checked={false} />
        <Text>Disabled</Text>
      </Flex>
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
