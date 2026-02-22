import React, { type ComponentPropsWithoutRef, type ElementType } from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { clsx } from 'clsx';
import { Box, type BoxProps } from '@pittorica/box-react';
import { IconMinus } from '@tabler/icons-react';

/* --- Root --- */

export type InputOTPRootProps = ComponentPropsWithoutRef<typeof OTPInput>;

const InputOTPRoot = React.forwardRef<HTMLInputElement, InputOTPRootProps>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={clsx(
        'pittorica-input-otp-container',
        containerClassName
      )}
      className={clsx('pittorica-input-otp', className)}
      {...props}
    />
  )
);
InputOTPRoot.displayName = 'InputOTP.Root';

/* --- Group --- */

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('pittorica-input-otp-group', className)}
    {...props}
  />
));
InputOTPGroup.displayName = 'InputOTP.Group';

/* --- Slot --- */

const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
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
});
InputOTPSlot.displayName = 'InputOTP.Slot';

/* --- Separator --- */

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    className="pittorica-input-otp-separator"
    {...props}
  >
    <IconMinus size={16} />
  </div>
));
InputOTPSeparator.displayName = 'InputOTP.Separator';

export const InputOTP = Object.assign(InputOTPRoot, {
  Root: InputOTPRoot,
  Group: InputOTPGroup,
  Slot: InputOTPSlot,
  Separator: InputOTPSeparator,
});
