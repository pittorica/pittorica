import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export type SkeletonProps<E extends ElementType = 'div'> = BoxProps<E> & {
  /**
   * If true, shows the skeleton. If false, shows the children.
   * @default true
   */
  loading?: boolean;
  /**
   * Shape of the skeleton.
   * @default 'rect'
   */
  variant?: 'rect' | 'circle' | 'text';
};

/**
 * Skeleton placeholder for loading states.
 * Fully polymorphic and agnostic foundation.
 */
export const Skeleton = <E extends ElementType = 'div'>({
  children,
  loading = true,
  variant = 'rect',
  className,
  style,
  as,
  ...props
}: SkeletonProps<E>) => {
  // Logic: Return children directly if not loading
  if (!loading) return <>{children}</>;

  const Tag = as || 'div';

  return (
    <Box
      /* Explicitly link Tag and Generic E for type safety */
      as={Tag as ElementType}
      className={clsx(
        'pittorica-skeleton',
        'pittorica-skeleton--loading',
        {
          'pittorica-skeleton--hiding-children': !!children,
          'pittorica-skeleton--circle': variant === 'circle',
          'pittorica-skeleton--text': variant === 'text',
        },
        className
      )}
      style={{
        height: variant === 'text' && !props.height ? '0.8em' : props.height,
        width: variant === 'text' && !props.width ? '100%' : props.width,
        ...style,
      }}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

Skeleton.displayName = 'Skeleton';
