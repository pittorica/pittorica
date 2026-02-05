import type { CSSProperties } from 'react';

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

export interface TextProps extends BoxProps {
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
  color?: PittoricaColor;
  href?: string;
  target?: string;
  rel?: string;
  htmlFor?: string;
}

/**
 * Text component for general typography.
 * Fixed color resolution for semantic tokens and custom values.
 */
export const Text = ({
  children,
  as: Tag = 'span',
  weight = 'regular',
  align,
  truncate = false,
  color,
  className,
  style,
  href,
  target,
  rel,
  htmlFor,
  ...rest
}: TextProps) => {
  // Logic: Check if it's a direct color value
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

    // Check if the color exists in our semantic list
    if (semanticColors.has(color as string)) {
      return `var(--pittorica-${color}-9)`;
    }

    // Fallback for custom string colors that don't start with #/rgb/hsl
    return color;
  })();

  const textStyles: CSSProperties = {
    ...style,
    textAlign: align,
    color: resolvedColor,
  };

  return (
    <Box
      as={Tag}
      className={clsx(
        'pittorica-text',
        { 'pittorica-text--truncate': truncate },
        className
      )}
      data-weight={weight}
      style={textStyles}
      href={href}
      target={target}
      rel={rel}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </Box>
  );
};
