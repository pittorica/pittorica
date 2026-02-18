import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export type DataListRootProps<E extends ElementType = 'div'> = BoxProps<E> & {
  /** @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
};

const DataListRoot = <E extends ElementType = 'div'>({
  orientation = 'horizontal',
  children,
  className,
  as,
  ...props
}: DataListRootProps<E>) => (
  <Box
    as={as || 'div'}
    className={clsx(
      'pittorica-data-list-root',
      `pittorica-data-list-root--orientation-${orientation}`,
      className
    )}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

const DataListItem = <E extends ElementType = 'div'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => (
  <Box
    as={as || 'div'}
    className={clsx('pittorica-data-list-item', className)}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

const DataListLabel = <E extends ElementType = 'div'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => (
  <Box
    as={as || 'div'}
    className={clsx('pittorica-data-list-label', className)}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

const DataListValue = <E extends ElementType = 'div'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => (
  <Box
    as={as || 'div'}
    className={clsx('pittorica-data-list-value', className)}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

export const DataList = Object.assign(DataListRoot, {
  Item: DataListItem,
  Label: DataListLabel,
  Value: DataListValue,
});
