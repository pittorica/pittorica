import type { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from './Flex';
import { RadioCard } from './RadioCard';
import { Text } from './Text';

const meta: Meta<typeof RadioCard> = {
  title: 'Components/RadioCard',
  component: RadioCard,
  args: {
    defaultValue: '1',
    columns: '3',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'amber', 'teal', 'slate'],
    },
    columns: {
      control: 'select',
      options: ['1', '2', '3'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioCard>;

export const Default: Story = {
  render: (args) => (
    <RadioCard {...args}>
      <RadioCard.Item value="1">
        <Text weight="bold">Personal</Text>
        <Text size="2" color="slate">
          For individuals and hobbyists.
        </Text>
      </RadioCard.Item>
      <RadioCard.Item value="2">
        <Text weight="bold">Team</Text>
        <Text size="2" color="slate">
          For small teams and startups.
        </Text>
      </RadioCard.Item>
      <RadioCard.Item value="3">
        <Text weight="bold">Enterprise</Text>
        <Text size="2" color="slate">
          For large organizations.
        </Text>
      </RadioCard.Item>
    </RadioCard>
  ),
};

export const SingleColumn: Story = {
  args: {
    columns: '1',
  },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <RadioCard {...args}>
        <RadioCard.Item value="1">
          <Flex justify="between" align="center">
            <Text weight="bold">Standard Shipping</Text>
            <Text size="2" color="slate">
              $5.00
            </Text>
          </Flex>
          <Text size="1" color="slate">
            3-5 business days
          </Text>
        </RadioCard.Item>
        <RadioCard.Item value="2">
          <Flex justify="between" align="center">
            <Text weight="bold">Express Shipping</Text>
            <Text size="2" color="slate">
              $15.00
            </Text>
          </Flex>
          <Text size="1" color="slate">
            1-2 business days
          </Text>
        </RadioCard.Item>
      </RadioCard>
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <RadioCard {...args} color="crimson" defaultValue="1">
        <RadioCard.Item value="1">Crimson Checked</RadioCard.Item>
        <RadioCard.Item value="2">Crimson Unchecked</RadioCard.Item>
      </RadioCard>
      <RadioCard {...args} color="teal" defaultValue="1">
        <RadioCard.Item value="1">Teal Checked</RadioCard.Item>
        <RadioCard.Item value="2">Teal Unchecked</RadioCard.Item>
      </RadioCard>
    </Flex>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <RadioCard {...args}>
      <RadioCard.Item value="1">Disabled Checked</RadioCard.Item>
      <RadioCard.Item value="2">Disabled Unchecked</RadioCard.Item>
    </RadioCard>
  ),
};
