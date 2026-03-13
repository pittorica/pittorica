import type { Meta, StoryObj } from '@storybook/react-vite';

import { CheckboxCard } from './CheckboxCard';
import { Flex } from './Flex';
import { Text } from './Text';

const meta: Meta<typeof CheckboxCard> = {
  title: 'Forms/CheckboxCard',
  component: CheckboxCard,
  args: {
    defaultValue: ['1'],
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'amber', 'teal', 'slate'],
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    disabled: { control: 'boolean' },
    translucent: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxCard>;

export const Default: Story = {
  render: (args) => (
    <CheckboxCard {...args}>
      <CheckboxCard.Item value="1">
        <Flex direction="column" gap="1">
          <Text weight="bold">Basic Plan</Text>
          <Text size="2" color="slate">
            Free forever, up to 3 projects.
          </Text>
        </Flex>
      </CheckboxCard.Item>
      <CheckboxCard.Item value="2">
        <Flex direction="column" gap="1">
          <Text weight="bold">Pro Plan</Text>
          <Text size="2" color="slate">
            Unlimited projects and premium support.
          </Text>
        </Flex>
      </CheckboxCard.Item>
      <CheckboxCard.Item value="3">
        <Flex direction="column" gap="1">
          <Text weight="bold">Enterprise</Text>
          <Text size="2" color="slate">
            Custom solutions for large teams.
          </Text>
        </Flex>
      </CheckboxCard.Item>
    </CheckboxCard>
  ),
};

export const Horizontal: Story = {
  ...Default,
  args: {
    ...Default.args,
    orientation: 'horizontal',
  },
};

export const Colors: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <CheckboxCard {...args} color="crimson" defaultValue={['1']}>
        <CheckboxCard.Item value="1">Crimson Checked</CheckboxCard.Item>
        <CheckboxCard.Item value="2">Crimson Unchecked</CheckboxCard.Item>
      </CheckboxCard>
      <CheckboxCard {...args} color="teal" defaultValue={['1']}>
        <CheckboxCard.Item value="1">Teal Checked</CheckboxCard.Item>
        <CheckboxCard.Item value="2">Teal Unchecked</CheckboxCard.Item>
      </CheckboxCard>
      <CheckboxCard {...args} color="amber" defaultValue={['1']}>
        <CheckboxCard.Item value="1">Amber Checked</CheckboxCard.Item>
        <CheckboxCard.Item value="2">Amber Unchecked</CheckboxCard.Item>
      </CheckboxCard>
    </Flex>
  ),
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Translucent: Story = {
  ...Default,
  args: {
    ...Default.args,
    translucent: true,
  },
};
