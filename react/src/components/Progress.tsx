import { type CSSProperties, type ElementType } from 'react';

import { clsx } from 'clsx';

import type { PittoricaColor } from '../types';
import { Box, type BoxProps } from './Box';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type ProgressProps<E extends ElementType = 'div'> = BoxProps<E> & {
  /** @default 0 */
  value?: number | null;
  /** @default 100 */
  max?: number;
  /** @default 'indigo' */
  color?: PittoricaColor;
  /** @default false */
  indeterminate?: boolean;
};

/**
 * Progress component displays an indicator of the status of a task or process.
 * Fully polymorphic and agnostic foundation.
 */
export const Progress = <E extends ElementType = 'div'>({
  value = 0,
  max = 100,
  color = 'indigo',
  indeterminate = false,
  className,
  style,
  as,
  ...props
}: ProgressProps<E>) => {
  const isIndeterminate = indeterminate || value === null;
  const percentage = isIndeterminate
    ? undefined
    : Math.min(Math.max(0, ((value || 0) / max) * 100), 100);

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  const Tag = as || 'div';

  return (
    <Box
      as={Tag as ElementType}
      role="progressbar"
      aria-valuenow={isIndeterminate ? undefined : (value ?? undefined)}
      aria-valuemin={0}
      aria-valuemax={max}
      className={clsx('pittorica-progress-root', className)}
      data-indeterminate={isIndeterminate}
      style={
        {
          '--pittorica-source-color': resolvedColor,
          ...style,
        } as CSSProperties
      }
      {...(props as BoxProps<E>)}
    >
      {/* Background/Base bar */}
      <div
        className="pittorica-progress-indicator"
        style={{ width: isIndeterminate ? undefined : `${percentage}%` }}
      />
    </Box>
  );
};

Progress.displayName = 'Progress';
