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

export interface HeadingProps extends Omit<TextProps, 'as' | 'size'> {
  /**
   * The semantic HTML tag.
   * @default 'h1'
   */
  as?: HeadingTag;
  /**
   * Responsive size from 1 to 9.
   * Can be a string or an object with breakpoints.
   * @default '6'
   */
  size?: Responsive<HeadingSize>;
}

/**
 * Utility to transform responsive props into CSS classes.
 * Ensures zero usage of 'any' for strict type safety.
 */
const getResponsiveClasses = (
  propName: string,
  value: Responsive<HeadingSize> | undefined
): string[] => {
  if (!value) return [];

  if (typeof value === 'string') {
    return [`pittorica-heading--${propName}-${value}`];
  }

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
 * Supports Radix-like responsive size scaling via CSS media queries.
 */
export const Heading = ({
  children,
  as: Tag = 'h1',
  size = '6',
  weight = 'bold',
  className,
  ...rest // Captures 'color' and other TextProps
}: HeadingProps) => {
  const sizeClasses = getResponsiveClasses('size', size);

  return (
    <Text
      as={Tag}
      weight={weight}
      // Pass size as undefined to let pittorica-heading classes control dimensions
      size={undefined}
      className={clsx('pittorica-heading', sizeClasses, className)}
      {...rest} // Correctly forwards 'color' to Text component
    >
      {children}
    </Text>
  );
};
