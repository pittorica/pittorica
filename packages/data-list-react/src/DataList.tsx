import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export interface DataListRootProps extends BoxProps {
  /** @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
}

const DataListRoot = ({
  orientation = 'horizontal',
  children,
  className,
  ...props
}: DataListRootProps) => (
  <Box
    className={clsx(
      'pittorica-data-list-root',
      `pittorica-data-list-root--orientation-${orientation}`,
      className
    )}
    {...props}
  >
    {children}
  </Box>
);

const DataListItem = ({ children, className, ...props }: BoxProps) => (
  <Box className={clsx('pittorica-data-list-item', className)} {...props}>
    {children}
  </Box>
);

const DataListLabel = ({ children, className, ...props }: BoxProps) => (
  <Box className={clsx('pittorica-data-list-label', className)} {...props}>
    {children}
  </Box>
);

const DataListValue = ({ children, className, ...props }: BoxProps) => (
  <Box className={clsx('pittorica-data-list-value', className)} {...props}>
    {children}
  </Box>
);

export const DataList = Object.assign(DataListRoot, {
  Item: DataListItem,
  Label: DataListLabel,
  Value: DataListValue,
});
