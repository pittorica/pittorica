import React, { type ElementType } from 'react';

import { clsx } from 'clsx';

import type {
  PittoricaFlexAlign,
  PittoricaFlexDirection,
  PittoricaFlexJustify,
  PittoricaFlexWrap,
  PittoricaResponsive,
  PittoricaSpace,
} from '../types';
import { Box, type BoxProps } from './Box';

export type FlexProps<E extends ElementType = 'div'> = BoxProps<E> & {
  direction?: PittoricaResponsive<PittoricaFlexDirection>;
  align?: PittoricaResponsive<PittoricaFlexAlign>;
  justify?: PittoricaResponsive<PittoricaFlexJustify>;
  wrap?: PittoricaResponsive<PittoricaFlexWrap>;
  gap?: PittoricaResponsive<PittoricaSpace>;
  basis?: string;
};

interface FlexCustomProperties extends React.CSSProperties {
  '--pittorica-flex-basis'?: string;
}

const isFluid = (val: unknown): val is string =>
  typeof val === 'string' && val.startsWith('auto-');

function getFlexResponsiveClasses<T extends string>(
  propName: string,
  value: PittoricaResponsive<T> | undefined
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
