import React, { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type ChipProps<E extends ElementType = 'div'> = BoxProps<E> & {
  variant?: 'solid' | 'soft' | 'outline';
  size?: '1' | '2' | '3';
  color?: PittoricaColor;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
  onDelete?: () => void;
  deleteIcon?: React.ReactNode;
};

/**
 * Chip component with semantic alias support.
 * Fully polymorphic and agnostic foundation.
 */
export const Chip = <E extends ElementType = 'div'>({
  children,
  variant = 'soft',
  size = '2',
  color = 'indigo',
  startDecorator,
  endDecorator,
  onDelete,
  deleteIcon,
  className,
  style,
  as,
  ...props
}: ChipProps<E>) => {
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');

  const chipVariables = {
    '--chip-base': isSemantic ? `var(--pittorica-${color}-9)` : color,
    '--chip-soft-bg': isSemantic
      ? `var(--pittorica-${color}-3)`
      : 'transparent',
    '--chip-soft-text': isSemantic ? `var(--pittorica-${color}-11)` : 'inherit',
    '--chip-on-base': isSemantic ? `var(--pittorica-on-${color}-9)` : 'white',
    ...style,
  } as React.CSSProperties;

  // Logic: automatic tag switching if not explicitly provided via 'as'
  const Tag = as || (props.onClick ? 'button' : 'div');

  return (
    <Box
      as={Tag as ElementType}
      className={clsx(
        'pittorica-chip',
        `pittorica-chip--size-${size}`,
        className
      )}
      data-variant={variant}
      style={chipVariables}
      {...(props as BoxProps<E>)}
    >
      {startDecorator && (
        <span className="pittorica-chip-decorator">{startDecorator}</span>
      )}
      <span className="pittorica-chip-content">{children}</span>
      {endDecorator && (
        <span className="pittorica-chip-decorator">{endDecorator}</span>
      )}

      {onDelete && (
        <button
          type="button"
          aria-label="Delete"
          className="pittorica-chip-delete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          {deleteIcon || (
            <span style={{ fontSize: '1.2em', lineHeight: 0 }}>×</span>
          )}
        </button>
      )}
    </Box>
  );
};

Chip.displayName = 'Chip';
