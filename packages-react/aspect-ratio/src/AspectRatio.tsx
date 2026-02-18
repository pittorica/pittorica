import React, { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

/**
 * AspectRatioProps uses a type alias to support intersection with polymorphic BoxProps.
 */
export type AspectRatioProps<E extends ElementType = 'div'> = BoxProps<E> & {
  /** @default 1 / 1 */
  ratio?: number;
  children?: React.ReactNode;
};

/**
 * Component to maintain a consistent width-to-height ratio.
 */
export const AspectRatio = <E extends ElementType = 'div'>({
  ratio = 1 / 1,
  children,
  className,
  style,
  as,
  ...props
}: AspectRatioProps<E>) => {
  return (
    <Box
      as={as || 'div'}
      className={clsx('pittorica-aspect-ratio', className)}
      style={{
        aspectRatio: `${ratio}`,
        ...style,
      }}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

AspectRatio.displayName = 'AspectRatio';
