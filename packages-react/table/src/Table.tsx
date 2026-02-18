import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

/* --- Container --- */
const TableContainer = <E extends ElementType = 'div'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => (
  <Box
    as={(as || 'div') as ElementType}
    className={clsx('pittorica-table-container', className)}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

/* --- Root --- */
const TableRoot = <E extends ElementType = 'table'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => (
  <Box
    as={(as || 'table') as ElementType}
    className={clsx('pittorica-table-root', className)}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

/* --- Header --- */
const TableHeader = <E extends ElementType = 'thead'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => (
  <Box
    as={(as || 'thead') as ElementType}
    className={clsx('pittorica-table-header', className)}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

/* --- Body --- */
const TableBody = <E extends ElementType = 'tbody'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => (
  <Box
    as={(as || 'tbody') as ElementType}
    className={clsx('pittorica-table-body', className)}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

/* --- Row --- */
const TableRow = <E extends ElementType = 'tr'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => (
  <Box
    as={(as || 'tr') as ElementType}
    className={clsx('pittorica-table-row', className)}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

/* --- Cell & ColumnHeader --- */

/**
 * Fix TS2314: Use 'type' for intersection with polymorphic BoxProps<E>.
 */
export type CellProps<E extends ElementType> = BoxProps<E> & {
  align?: 'left' | 'center' | 'right';
};

const TableCell = <E extends ElementType = 'td'>({
  children,
  align = 'left',
  className,
  as,
  ...props
}: CellProps<E>) => (
  <Box
    as={(as || 'td') as ElementType}
    data-align={align}
    className={clsx('pittorica-table-cell', className)}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

const TableColumnHeader = <E extends ElementType = 'th'>({
  children,
  align = 'left',
  className,
  as,
  ...props
}: CellProps<E>) => (
  <Box
    as={(as || 'th') as ElementType}
    data-align={align}
    className={clsx('pittorica-table-column-header', className)}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

export const Table = {
  Container: TableContainer,
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  ColumnHeader: TableColumnHeader,
};

TableRoot.displayName = 'Table.Root';
TableCell.displayName = 'Table.Cell';
