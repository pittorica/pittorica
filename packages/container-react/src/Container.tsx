import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export interface ContainerProps extends BoxProps {
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
}

export const Container = ({
  children,
  maxWidth = 'lg',
  fixed = false,
  disableGutters = false,
  className,
  style,
  ...props
}: ContainerProps) => {
  const containerStyles: React.CSSProperties = {
    ...style,
    // If maxWidth is a string, we map it to the token. If false, it's 100%.
    maxWidth:
      maxWidth && !fixed ? `var(--pittorica-bp-${maxWidth})` : undefined,
    paddingLeft: disableGutters ? '0px' : undefined,
    paddingRight: disableGutters ? '0px' : undefined,
  };

  return (
    <Box
      className={clsx('pittorica-container', className)}
      data-fixed={fixed}
      style={containerStyles}
      {...props}
    >
      {children}
    </Box>
  );
};
