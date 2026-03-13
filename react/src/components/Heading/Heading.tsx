import { type ElementType } from 'react';

import { clsx } from 'clsx';

import type {
  PittoricaHeadingTag,
  PittoricaHeadingVariant,
  PittoricaResponsive,
  PittoricaSize,
} from '../../types';
import { Text, type TextProps } from '../Text';

/**
 * Fix TS2322: Use 'type' alias and ensure E defaults to PittoricaHeadingTag.
 * We extend TextProps<E> to inherit all typography and polymorphic behavior.
 */
export type HeadingProps<E extends ElementType = PittoricaHeadingTag> = Omit<
  TextProps<E>,
  'size'
> & {
  /**
   * Responsive size from 1 to 9.
   * @default '6'
   */
  size?: PittoricaResponsive<PittoricaSize>;
  /**
   * The visual style of the heading.
   * @default 'classic'
   */
  variant?: PittoricaHeadingVariant;
};

const getResponsiveClasses = (
  propName: string,
  value: PittoricaResponsive<PittoricaSize> | undefined
): string[] => {
  if (!value) return [];
  if (typeof value === 'string')
    return [`pittorica-heading--${propName}-${value}`];

  return Object.entries(value)
    .filter(([_, val]) => val !== undefined)
    .map(([bp, val]) =>
      bp === 'initial'
        ? `pittorica-heading--${propName}-${val}`
        : `pittorica-heading--${bp}-${propName}-${val}`
    );
};

/**
 * Heading component for titles.
 * Supports polymorphic tags and responsive scaling.
 */
export const Heading = <E extends ElementType = 'h1'>({
  children,
  as,
  size = '6',
  weight = 'bold',
  variant = 'classic',
  color,
  className,
  style,
  ...rest
}: HeadingProps<E>) => {
  const sizeClasses = getResponsiveClasses('size', size);
  const Tag = as || 'h1';

  const isSemantic =
    color &&
    color !== 'inherit' &&
    !color.startsWith('#') &&
    !color.startsWith('rgb');

  const headingVariables = {
    ...(variant === 'soft' &&
      isSemantic && {
        '--pittorica-source-3': `var(--pittorica-${color}-3)`,
        '--pittorica-source-11': `var(--pittorica-${color}-11)`,
      }),
    ...(variant === 'outline' &&
      isSemantic && {
        '--pittorica-source-9': `var(--pittorica-${color}-9)`,
      }),
    ...style,
  } as React.CSSProperties;

  return (
    <Text
      as={Tag as ElementType}
      weight={weight}
      className={clsx('pittorica-heading', sizeClasses, className)}
      data-variant={variant}
      style={headingVariables}
      color={color}
      {...(rest as TextProps<E>)}
    >
      {children}
    </Text>
  );
};

Heading.displayName = 'Heading';
