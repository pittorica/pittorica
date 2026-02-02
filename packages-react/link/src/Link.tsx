import { clsx } from 'clsx';

import { Text, type TextProps } from '@pittorica/text-react';

export interface LinkProps extends TextProps {
  underline?: 'always' | 'hover' | 'none';
  href?: string;
  target?: string;
}

/**
 * Link component for navigation.
 */
export const Link = ({
  underline = 'hover',
  className,
  style,
  color = 'indigo',
  href,
  target,
  ...props
}: LinkProps) => (
  <Text
    as="a"
    href={href}
    target={target}
    className={clsx(
      'pittorica-link',
      `pittorica-link--underline-${underline}`,
      className
    )}
    color={color}
    style={{
      textDecoration: underline === 'always' ? 'underline' : 'none',
      cursor: 'pointer',
      ...style,
    }}
    {...props}
  />
);
