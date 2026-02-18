import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type CardProps<E extends ElementType = 'div'> = BoxProps<E> & {
  /** @default 'surface' */
  variant?: 'surface' | 'outlined' | 'ghost';
  /** If true, applies glassmorphism effect */
  translucent?: boolean;
};

/**
 * Card component following Radix UI Themes structure with translucent support.
 * Fully polymorphic and agnostic foundation.
 */
export const Card = <E extends ElementType = 'div'>({
  variant = 'surface',
  translucent = false,
  children,
  className,
  style,
  as,
  ...props
}: CardProps<E>) => {
  const Tag = as || 'div';

  return (
    <Box
      as={Tag as ElementType}
      className={clsx(
        'pittorica-card',
        `pittorica-card--variant-${variant}`,
        { 'pittorica-card--translucent': translucent },
        className
      )}
      style={style}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

Card.displayName = 'Card';
