import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Text, type TextProps } from '@pittorica/text-react';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

interface ResponsiveObject<T> {
  initial?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

type Responsive<T> = T | ResponsiveObject<T>;

/**
 * Fix TS2322: Use 'type' alias and ensure E defaults to HeadingTag.
 * We extend TextProps<E> to inherit all typography and polymorphic behavior.
 */
export type HeadingProps<E extends ElementType = HeadingTag> = Omit<
  TextProps<E>,
  'size'
> & {
  /**
   * Responsive size from 1 to 9.
   * @default '6'
   */
  size?: Responsive<HeadingSize>;
};

const getResponsiveClasses = (
  propName: string,
  value: Responsive<HeadingSize> | undefined
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
  className,
  ...rest
}: HeadingProps<E>) => {
  const sizeClasses = getResponsiveClasses('size', size);
  const Tag = as || 'h1';

  return (
    <Text
      /* Logic: Explicitly cast 'as' to ElementType to align the generic E
         of Heading with the generic E of Text. This resolves the Ref mismatch.
      */
      as={Tag as ElementType}
      weight={weight}
      className={clsx('pittorica-heading', sizeClasses, className)}
      {...(rest as TextProps<E>)}
    >
      {children}
    </Text>
  );
};

Heading.displayName = 'Heading';
