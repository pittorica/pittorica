import { type CSSProperties, type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

/* --- Types --- */

export type PittoricaColor =
  | 'indigo'
  | 'crimson'
  | 'teal'
  | 'amber'
  | 'slate'
  | 'blue'
  | 'red'
  | 'danger'
  | 'success'
  | 'error'
  | 'info'
  | 'inherit'
  | (string & {});

type SizeValue = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

/**
 * Responsive size configuration for breakpoints.
 */
interface ResponsiveSize {
  initial?: SizeValue;
  xs?: SizeValue;
  sm?: SizeValue;
  md?: SizeValue;
  lg?: SizeValue;
  xl?: SizeValue;
}

export type TextProps<E extends ElementType = 'span'> = BoxProps<E> & {
  size?: SizeValue | ResponsiveSize;
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
  color?: PittoricaColor;
};

/* --- Component --- */

/**
 * Text component for general typography.
 * Supports polymorphic tags, agnostic routing via Box, and responsive sizing.
 */
export const Text = <E extends ElementType = 'span'>({
  children,
  as,
  size,
  weight = 'regular',
  align,
  truncate = false,
  color,
  className,
  style,
  ...rest
}: TextProps<E>) => {
  const Tag = as || 'span';

  /* --- Color Resolution --- */
  const isDirectColor =
    color?.startsWith('#') ||
    color?.startsWith('rgb') ||
    color?.startsWith('hsl');

  const semanticColors = new Set([
    'danger',
    'success',
    'error',
    'info',
    'indigo',
    'crimson',
    'teal',
    'amber',
    'slate',
    'blue',
    'red',
  ]);

  const resolvedColor = (() => {
    if (!color) return;
    if (color === 'inherit') return 'inherit';
    if (isDirectColor) return color;

    if (semanticColors.has(color as string)) {
      return `var(--pittorica-${color}-9)`;
    }

    return color;
  })();

  /* --- Size/Responsive Classes Resolution --- */
  const sizeClasses = (() => {
    if (!size) return null;

    // Single value: size="3"
    if (typeof size === 'string') {
      return `pittorica-text--size-${size}`;
    }

    // Responsive object: size={{ initial: '2', md: '4' }}
    return clsx({
      [`pittorica-text--size-${size.initial}`]: size.initial,
      [`pittorica-text--xs-size-${size.xs}`]: size.xs,
      [`pittorica-text--sm-size-${size.sm}`]: size.sm,
      [`pittorica-text--md-size-${size.md}`]: size.md,
      [`pittorica-text--lg-size-${size.lg}`]: size.lg,
      [`pittorica-text--xl-size-${size.xl}`]: size.xl,
    });
  })();

  const textStyles: CSSProperties = {
    ...style,
    textAlign: align,
    color: resolvedColor,
  };

  return (
    <Box
      as={Tag as ElementType}
      className={clsx(
        'pittorica-text',
        sizeClasses,
        { 'pittorica-text--truncate': truncate },
        className
      )}
      data-weight={weight}
      style={textStyles}
      {...(rest as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

Text.displayName = 'Text';
