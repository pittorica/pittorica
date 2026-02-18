import React, { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type Align = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

interface ResponsiveObject<T> {
  initial?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

type Responsive<T> = T | ResponsiveObject<T>;

export type FlexProps<E extends ElementType = 'div'> = BoxProps<E> & {
  direction?: Responsive<Direction>;
  align?: Responsive<Align>;
  justify?: Responsive<Justify>;
  wrap?: Responsive<Wrap>;
  gap?: Responsive<Spacing>;
  basis?: string;
};

interface FlexCustomProperties extends React.CSSProperties {
  '--pittorica-flex-basis'?: string;
}

const isFluid = (val: unknown): val is string =>
  typeof val === 'string' && val.startsWith('auto-');

function getFlexResponsiveClasses<T extends string>(
  propName: string,
  value: Responsive<T> | undefined
): string[] {
  if (!value || isFluid(value)) return [];
  if (typeof value === 'string')
    return [`pittorica-flex--${propName}-${value}`];

  return Object.entries(value)
    .filter(([, val]) => val !== undefined && !isFluid(val))
    .map(([bp, val]) =>
      bp === 'initial'
        ? `pittorica-flex--${propName}-${val}`
        : `pittorica-flex--${bp}-${propName}-${val}`
    );
}

export const Flex = <E extends ElementType = 'div'>({
  children,
  direction,
  align,
  justify,
  wrap,
  gap,
  basis,
  className,
  style,
  as,
  ...props
}: FlexProps<E>) => {
  const Tag = as || 'div';

  const responsiveClasses = [
    ...getFlexResponsiveClasses('direction', direction),
    ...getFlexResponsiveClasses('align', align),
    ...getFlexResponsiveClasses('justify', justify),
    ...getFlexResponsiveClasses('wrap', wrap),
    ...getFlexResponsiveClasses('gap', gap),
  ];

  const fluidStyles: FlexCustomProperties = { ...style };

  if (isFluid(basis)) {
    fluidStyles['--pittorica-flex-basis'] = basis.split('-')[1];
  }

  return (
    <Box
      as={Tag as ElementType}
      className={clsx('pittorica-flex', responsiveClasses, className)}
      style={fluidStyles}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

Flex.displayName = 'Flex';
