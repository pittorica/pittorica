import React, { type ElementType } from 'react';

import { clsx } from 'clsx';

import type {
  PittoricaGridAlign,
  PittoricaGridFlow,
  PittoricaGridJustify,
  PittoricaGridRepeat,
  PittoricaResponsive,
  PittoricaSpace,
} from '../types';
import { Box, type BoxProps } from './Box';

export type GridProps<E extends ElementType = 'div'> = Omit<
  BoxProps<E>,
  'display'
> & {
  columns?: PittoricaResponsive<PittoricaGridRepeat>;
  rows?: PittoricaResponsive<PittoricaGridRepeat>;
  gap?: PittoricaResponsive<PittoricaSpace>;
  gapX?: PittoricaResponsive<PittoricaSpace>;
  gapY?: PittoricaResponsive<PittoricaSpace>;
  flow?: PittoricaResponsive<PittoricaGridFlow>;
  align?: PittoricaResponsive<PittoricaGridAlign>;
  justify?: PittoricaResponsive<PittoricaGridJustify>;
};

const isFluid = (val: unknown): val is string =>
  typeof val === 'string' && val.startsWith('auto-');

function getGridResponsiveClasses<T extends string>(
  propName: string,
  value: PittoricaResponsive<T> | undefined
): string[] {
  if (!value || isFluid(value)) return [];

  if (typeof value === 'string') {
    return [`pittorica-grid--${propName}-${value}`];
  }

  return Object.entries(value)
    .filter(([, val]) => val !== undefined && !isFluid(val))
    .map(([bp, val]) =>
      bp === 'initial'
        ? `pittorica-grid--${propName}-${val}`
        : `pittorica-grid--${bp}-${propName}-${val}`
    );
}

/**
 * Grid component supporting both fixed responsive columns and fluid auto-wrapping.
 * Polymorphic and agnostic implementation.
 */
export const Grid = <E extends ElementType = 'div'>({
  children,
  columns,
  rows,
  gap,
  gapX,
  gapY,
  flow,
  align,
  justify,
  className,
  style,
  as,
  ...props
}: GridProps<E>) => {
  const Tag = as || 'div';

  const responsiveClasses = [
    ...getGridResponsiveClasses('columns', columns),
    ...getGridResponsiveClasses('rows', rows),
    ...getGridResponsiveClasses('gap', gap),
    ...getGridResponsiveClasses('gapX', gapX),
    ...getGridResponsiveClasses('gapY', gapY),
    ...getGridResponsiveClasses('flow', flow),
    ...getGridResponsiveClasses('align', align),
    ...getGridResponsiveClasses('justify', justify),
  ];

  const fluidStyles: React.CSSProperties = {};

  if (isFluid(columns)) {
    fluidStyles.gridTemplateColumns = `repeat(auto-fit, minmax(${columns.split('-')[1]}, 1fr))`;
  }

  if (isFluid(rows)) {
    fluidStyles.gridTemplateRows = `repeat(auto-fit, minmax(${rows.split('-')[1]}, 1fr))`;
  }

  return (
    <Box
      /* Explicitly link Tag and Generic E for type safety */
      as={Tag as ElementType}
      className={clsx('pittorica-grid', responsiveClasses, className)}
      style={{ ...style, ...fluidStyles }}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

Grid.displayName = 'Grid';
