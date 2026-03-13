import type { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from './Flex';
import { InputOTP } from './InputOtp';
import { Text } from './Text';

const meta: Meta<typeof InputOTP> = {
  title: 'Components/InputOTP',
  component: InputOTP,
  parameters: {
    layout: 'centered',
  },
  args: {
    maxLength: 6,
  },
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  render: (args) => {
    const { maxLength, ...props } = args;
    // We explicitly Omit render from the props passed to InputOTP to avoid conflicts with children
    const { render: _, ...safeProps } = props as typeof props;
    return (
      <InputOTP maxLength={maxLength} {...safeProps}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP>
    );
  },
};

export const WithSeparator: Story = {
  render: (args) => {
    const { maxLength, ...props } = args;
    const { render: _, ...safeProps } = props as typeof props;
    return (
      <InputOTP maxLength={maxLength} {...safeProps}>
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
    );
  },
};

export const FourDigits: Story = {
  args: {
    maxLength: 4,
  },
  render: (args) => {
    const { maxLength, ...props } = args;
    const { render: _, ...safeProps } = props as typeof props;
    return (
      <InputOTP maxLength={maxLength} {...safeProps}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
        </InputOTP.Group>
      </InputOTP>
    );
  },
};

export const Interactive: Story = {
  render: (args) => {
    const { maxLength, ...props } = args;
    const { render: _, ...safeProps } = props as typeof props;
    return (
      <Flex direction="column" gap="4" align="center">
        <div>
          <Text size="2" weight="bold" mb="2" display="block">
            Enter Verification Code
          </Text>
          <InputOTP maxLength={maxLength} {...safeProps}>
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
        </div>
        <Text size="1" color="slate">
          Check your email for a 6-digit code.
        </Text>
      </Flex>
    );
  },
};
