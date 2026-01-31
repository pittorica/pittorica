import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export interface GridProps extends BoxProps {
  columns?: string | number;
  rows?: string | number;
  gap?: Spacing;
  gapX?: Spacing;
  gapY?: Spacing;
  flow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch';
}

const justifyMap = {
  start: 'start',
  center: 'center',
  end: 'end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  stretch: 'stretch',
};

const alignMap = {
  start: 'start',
  center: 'center',
  end: 'end',
  baseline: 'baseline',
  stretch: 'stretch',
};

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
  const gridStyles: React.CSSProperties = {
    ...style,
    // If columns is a number, we wrap it in repeat()
    gridTemplateColumns:
      typeof columns === 'number'
        ? `repeat(${columns}, minmax(0, 1fr))`
        : columns,
    gridTemplateRows:
      typeof rows === 'number' ? `repeat(${rows}, minmax(0, 1fr))` : rows,
    gridAutoFlow: flow,
    alignItems: align ? alignMap[align] : undefined,
    justifyContent: justify ? justifyMap[justify] : undefined,
    gap: gap ? `var(--pittorica-space-${gap})` : undefined,
    columnGap: gapX ? `var(--pittorica-space-${gapX})` : undefined,
    rowGap: gapY ? `var(--pittorica-space-${gapY})` : undefined,
  };

  return (
    <Box
      className={clsx('pittorica-grid', className)}
      style={gridStyles}
      {...props}
    >
      {children}
    </Box>
  );
};
