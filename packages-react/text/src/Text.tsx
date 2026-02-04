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

type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

interface ResponsiveObject<T> {
  initial?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

type Responsive<T> = T | ResponsiveObject<T>;

export interface TextProps extends Omit<BoxProps, 'size'> {
  /**
   * Responsive size from 1 to 9.
   * @default '3'
   */
  size?: Responsive<TextSize>;
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
  color?: PittoricaColor;
  /** Link destination, used when 'as' is 'a' */
  href?: string;
  /** Link target, used when 'as' is 'a' */
  target?: string;
  /** Relationship to the linked resource */
  rel?: string;
  /** ID of the element this label is bound to, used when 'as' is 'label' */
  htmlFor?: string;
}

/**
 * Utility to transform responsive props into CSS classes.
 */
const getResponsiveClasses = (
  propName: string,
  value: Responsive<TextSize> | undefined
): string[] => {
  if (!value) return [];

  if (typeof value === 'string') {
    return [`pittorica-text--${propName}-${value}`];
  }

  return Object.entries(value)
    .filter(([_, val]) => val !== undefined)
    .map(([bp, val]) =>
      bp === 'initial'
        ? `pittorica-text--${propName}-${val}`
        : `pittorica-text--${bp}-${propName}-${val}`
    );
};

/**
 * Text component for general typography.
 * Supports responsive sizing via CSS media queries and semantic color tokens.
 */
export const Text = ({
  children,
  as: Tag = 'span',
  size = '3',
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
  const isCustomColor = color?.startsWith('#') || color?.startsWith('rgb');
  const isSemanticColor = [
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
  ].includes(color as string);

  const resolvedColor = (() => {
    if (!color) return;
    if (color === 'inherit') return 'inherit';
    if (isCustomColor) return color;
    if (isSemanticColor) return `var(--pittorica-${color}-9)`;
    return;
  })();

  const textStyles: CSSProperties = {
    ...style,
    textAlign: align,
    color: resolvedColor,
  };

  const sizeClasses = getResponsiveClasses('size', size);

  return (
    <Box
      as={Tag}
      className={clsx(
        'pittorica-text',
        { 'pittorica-text--truncate': truncate },
        sizeClasses,
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
