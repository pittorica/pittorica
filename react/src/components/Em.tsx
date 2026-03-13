import { clsx } from 'clsx';

import { Text, type TextProps } from './Text';

/**
 * Em component for italic text emphasis.
 */
export const Em = ({ className, ...props }: TextProps) => (
  <Text as="em" className={clsx('pittorica-em', className)} {...props} />
);

Em.displayName = 'Em';
