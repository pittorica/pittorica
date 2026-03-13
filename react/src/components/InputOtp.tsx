import React, { type ComponentPropsWithoutRef } from 'react';

import { clsx } from 'clsx';

import { IconMinus } from '@tabler/icons-react';

import { OTPInput, OTPInputContext } from 'input-otp';

/* --- Root --- */

export type InputOTPRootProps = ComponentPropsWithoutRef<typeof OTPInput>;

const InputOTPRoot = ({
  ref,
  className,
  containerClassName,
  ...props
}: InputOTPRootProps & { ref?: React.RefObject<HTMLInputElement | null> }) => (
  <OTPInput
    ref={ref}
    containerClassName={clsx(
      'pittorica-input-otp-container',
      containerClassName
    )}
    className={clsx('pittorica-input-otp', className)}
    {...props}
  />
);
InputOTPRoot.displayName = 'InputOTP.Root';

/* --- Group --- */

const InputOTPGroup = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => (
  <div
    ref={ref}
    className={clsx('pittorica-input-otp-group', className)}
    {...props}
  />
);
InputOTPGroup.displayName = 'InputOTP.Group';

/* --- Slot --- */

const InputOTPSlot = ({
  ref,
  index,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { index: number } & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => {
  const inputOTPContext = React.use(OTPInputContext);
  const slot = inputOTPContext.slots[index];

  if (!slot) return null;

  const { char, hasFakeCaret, isActive } = slot;

  return (
    <div
      ref={ref}
      className={clsx('pittorica-input-otp-slot', className)}
      data-active={isActive}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pittorica-input-otp-caret">
          <div className="pittorica-input-otp-caret-inner" />
        </div>
      )}
    </div>
  );
};
InputOTPSlot.displayName = 'InputOTP.Slot';

/* --- Separator --- */

const InputOTPSeparator = ({
  ref,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => (
  <div
    ref={ref}
    role="separator"
    className="pittorica-input-otp-separator"
    {...props}
  >
    <IconMinus size={16} />
  </div>
);
InputOTPSeparator.displayName = 'InputOTP.Separator';

export const InputOTP = Object.assign(InputOTPRoot, {
  Root: InputOTPRoot,
  Group: InputOTPGroup,
  Slot: InputOTPSlot,
  Separator: InputOTPSeparator,
});
