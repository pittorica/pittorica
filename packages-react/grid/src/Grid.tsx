import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type GridFlow = 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
type GridAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
type GridJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch';

interface ResponsiveObject<T> {
  initial?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

type Responsive<T> = T | ResponsiveObject<T>;

export interface GridProps extends Omit<BoxProps, 'gap' | 'display'> {
  columns?: Responsive<string | number>;
  rows?: Responsive<string | number>;
  gap?: Responsive<Spacing>;
  gapX?: Responsive<Spacing>;
  gapY?: Responsive<Spacing>;
  flow?: Responsive<GridFlow>;
  align?: Responsive<GridAlign>;
  justify?: Responsive<GridJustify>;
}

/**
 * Maps gap values to spacing tokens.
 * Moved to outer scope to satisfy unicorn/consistent-function-scoping.
 */
const processGapVars = (vars: Record<string, string>) => {
  const newVars: Record<string, string> = {};
  for (const [key, val] of Object.entries(vars)) {
    newVars[key] = `var(--pittorica-space-${val})`;
  }
  return newVars;
};

/**
 * Handles transformation of responsive props into CSS variables and classes.
 * Uses function overloading or explicit types to avoid 'any'.
 */
function getResponsiveData(
  propName: string,
  value: Responsive<string | number> | undefined
): { classes: string[]; vars: Record<string, string> } {
  if (value === undefined) return { classes: [], vars: {} };

  const classes = [`pittorica-grid--${propName}-res`];
  const vars: Record<string, string> = {};

  if (typeof value !== 'object') {
    const formatted =
      typeof value === 'number' ? `repeat(${value}, minmax(0, 1fr))` : value;
    vars[`--pittorica-grid-${propName}-initial`] = String(formatted);
    return { classes, vars };
  }

  for (const [bp, val] of Object.entries(value)) {
    if (val !== undefined) {
      const formatted =
        typeof val === 'number' ? `repeat(${val}, minmax(0, 1fr))` : val;
      vars[`--pittorica-grid-${propName}-${bp}`] = String(formatted);
    }
  }

  return { classes, vars };
}

/**
 * Grid component with Radix-like responsive support.
 */
export const Grid = ({
  children,
  columns,
  rows,
  gap,
  gapX,
  gapY,
  flow,
  align,
  justify,
  style,
  className,
  ...props
}: GridProps) => {
  const cols = getResponsiveData('columns', columns);
  const rws = getResponsiveData('rows', rows);
  const g = getResponsiveData('gap', gap);
  const gx = getResponsiveData('gapX', gapX);
  const gy = getResponsiveData('gapY', gapY);
  const flw = getResponsiveData('flow', flow);
  const algn = getResponsiveData('align', align);
  const jst = getResponsiveData('justify', justify);

  const gridStyles: React.CSSProperties = {
    ...style,
    ...cols.vars,
    ...rws.vars,
    ...processGapVars(g.vars),
    ...processGapVars(gx.vars),
    ...processGapVars(gy.vars),
    ...flw.vars,
    ...algn.vars,
    ...jst.vars,
  } as React.CSSProperties;

  return (
    <Box
      className={clsx(
        'pittorica-grid',
        cols.classes,
        rws.classes,
        g.classes,
        gx.classes,
        gy.classes,
        flw.classes,
        algn.classes,
        jst.classes,
        className
      )}
      style={gridStyles}
      {...props}
    >
      {children}
    </Box>
  );
};
