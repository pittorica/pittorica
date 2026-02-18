import { type CSSProperties, type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

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

export type TextProps<E extends ElementType = 'span'> = BoxProps<E> & {
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
  color?: PittoricaColor;
};

/**
 * Text component for general typography.
 * Supports polymorphic tags and agnostic routing via Box.
 */
export const Text = <E extends ElementType = 'span'>({
  children,
  as,
  weight = 'regular',
  align,
  truncate = false,
  color,
  className,
  style,
  ...rest
}: TextProps<E>) => {
  const Tag = as || 'span';

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
      /* Use the standard step 9 for semantic text */
      return `var(--pittorica-${color}-9)`;
    }

    return color;
  })();

  const textStyles: CSSProperties = {
    ...style,
    textAlign: align,
    color: resolvedColor,
  };

  return (
    <Box
      /* Explicitly pass Tag and cast rest props to align polymorphic types */
      as={Tag as ElementType}
      className={clsx(
        'pittorica-text',
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
