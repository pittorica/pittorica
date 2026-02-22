import { Flex, InputOTP, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function InputOtpRoute() {
  return (
    <DocPage
      name="Input OTP"
      description="A sophisticated, accessible input for One-Time Passwords (OTP). Supports grouping, separators, and automatic focus management."
      packageName="input-otp-react"
      props={[
        {
          name: 'maxLength',
          type: 'number',
          description: 'The length of the OTP code.',
        },
        {
          name: 'containerClassName',
          type: 'string',
          description: 'ClassName for the container element.',
        },
        {
          name: 'onComplete',
          type: '(value: string) => void',
          description: 'Callback when the full OTP is entered.',
        },
      ]}
      examples={[
        {
          title: 'Interactive OTP',
          description: 'A standard 6-digit OTP input with grouping.',
          code: `<InputOTP maxLength={6}>
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
</InputOTP>`,
          render: (
            <Flex direction="column" gap="4">
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
              <Text size="1" color="gray">
                Hint: Paste a code or type to see the animation.
              </Text>
            </Flex>
          ),
        },
      ]}
    />
  );
}
