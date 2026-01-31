import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

/**
 * Valid gap values based on our --pittorica-space-N tokens
 */
type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export interface FlexProps extends BoxProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: Spacing;
}

/**
 * Mapping semantic values to CSS Flexbox values
 */
const justifyMap = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

const alignMap = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  baseline: 'baseline',
  stretch: 'stretch',
};

export const Flex = ({
  children,
  direction = 'row',
  align,
  justify,
  wrap = 'nowrap',
  gap,
  style,
  className,
  ...props
}: FlexProps) => {
  const flexStyles: React.CSSProperties = {
    ...style,
    display: props.display || 'flex',
    flexDirection: direction,
    alignItems: align ? alignMap[align] : undefined,
    justifyContent: justify ? justifyMap[justify] : undefined,
    flexWrap: wrap,
    gap: gap ? `var(--pittorica-space-${gap})` : undefined,
  };

  return (
    <Box
      className={clsx('pittorica-flex', className)}
      style={flexStyles}
      {...props}
    >
      {children}
    </Box>
  );
};
