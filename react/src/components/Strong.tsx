import { clsx } from 'clsx';

import { Text, type TextProps } from './Text';

/**
 * Strong component for bold text emphasis.
 */
export const Strong = ({ className, ...props }: TextProps) => (
  <Text
    as="strong"
    weight="bold"
    className={clsx('pittorica-strong', className)}
    {...props}
  />
);

Strong.displayName = 'Strong';
