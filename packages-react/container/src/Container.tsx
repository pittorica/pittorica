import React, { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type ContainerProps<E extends ElementType = 'div'> = BoxProps<E> & {
  /**
   * Determine the maximum width of the container.
   * Corresponds to the design system breakpoints.
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  /**
   * If true, the container will adapt its max-width to the current breakpoint
   * instead of being fluid.
   */
  fixed?: boolean;
  /**
   * Removes the default left and right padding.
   */
  disableGutters?: boolean;
};

/**
 * Container component to center and constrain content horizontally.
 * Fully polymorphic and agnostic foundation.
 */
export const Container = <E extends ElementType = 'div'>({
  children,
  maxWidth = 'lg',
  fixed = false,
  disableGutters = false,
  className,
  style,
  as,
  ...props
}: ContainerProps<E>) => {
  const Tag = as || 'div';

  const containerStyles: React.CSSProperties = {
    ...style,
    // Logic: Map maxWidth to breakpoint token or set to 100% if false
    maxWidth:
      maxWidth && !fixed ? `var(--pittorica-bp-${maxWidth})` : undefined,
    paddingLeft: disableGutters ? '0px' : undefined,
    paddingRight: disableGutters ? '0px' : undefined,
  };

  return (
    <Box
      /* Explicitly link Tag and Generic E for type safety */
      as={Tag as ElementType}
      className={clsx('pittorica-container', className)}
      data-fixed={fixed}
      style={containerStyles}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

Container.displayName = 'Container';
