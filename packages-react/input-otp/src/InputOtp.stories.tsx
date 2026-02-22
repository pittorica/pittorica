import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputOTP } from './InputOtp';

const meta: Meta<typeof InputOTP> = {
  title: 'Interactive/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTP.Group>
        <InputOTP.Slot index={0} />
        <InputOTP.Slot index={1} />
        <InputOTP.Slot index={2} />
        <InputOTP.Slot index={3} />
        <InputOTP.Slot index={4} />
        <InputOTP.Slot index={5} />
      </InputOTP.Group>
    </InputOTP>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTP.Group>
        <InputOTP.Slot index={0} />
        <InputOTP.Slot index={1} />
        <InputOTP.Slot index={2} />
      </InputOTP.Group>
      <InputOTP.Separator />
      <InputOTP.Group>
        <InputOTP.Slot index={3} />
        <InputOTP.Slot index={4} />
        <InputOTP.Slot index={5} />
      </InputOTP.Group>
    </InputOTP>
  ),
};

export const CustomLayout: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Text size="2" weight="bold">
        Enter Security Code
      </Text>
      <InputOTP maxLength={4}>
        <Flex gap="2">
          <InputOTP.Slot
            index={0}
            style={{
              borderRadius: 'var(--pittorica-radius-2)',
              borderRightWidth: '1px',
            }}
          />
          <InputOTP.Slot
            index={1}
            style={{
              borderRadius: 'var(--pittorica-radius-2)',
              borderRightWidth: '1px',
            }}
          />
          <InputOTP.Slot
            index={2}
            style={{
              borderRadius: 'var(--pittorica-radius-2)',
              borderRightWidth: '1px',
            }}
          />
          <InputOTP.Slot
            index={3}
            style={{
              borderRadius: 'var(--pittorica-radius-2)',
              borderRightWidth: '1px',
            }}
          />
        </Flex>
      </InputOTP>
    </Flex>
  ),
};
