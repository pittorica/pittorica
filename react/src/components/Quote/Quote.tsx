import { clsx } from 'clsx';

import { Text, type TextProps } from '../Text';

/**
 * Quote component for short inline quotations.
 */
export const Quote = ({ className, ...props }: TextProps) => (
  <Text as="q" className={clsx('pittorica-quote', className)} {...props} />
);

Quote.displayName = 'Quote';
