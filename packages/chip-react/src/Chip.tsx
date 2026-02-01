import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export interface ChipProps extends BoxProps {
  /** @default 'solid' */
  variant?: 'solid' | 'soft' | 'outline';
  /** @default '3' */
  size?: '1' | '2' | '3';
  /** @default 'indigo' */
  color?: PittoricaColor;
  /** Icon or element at the start of the chip */
  startDecorator?: React.ReactNode;
  /** Icon or element at the end of the chip */
  endDecorator?: React.ReactNode;
  /** Callback fired when the delete icon is clicked */
  onDelete?: () => void;
  /** Custom delete icon */
  deleteIcon?: React.ReactNode;
}

export const Chip = ({
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
  ...props
}: ChipProps) => {
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');

  const chipStyles: React.CSSProperties = {
    ...style,
    '--chip-base': isSemantic ? `var(--pittorica-${color}-9)` : color,
    '--chip-bg': isSemantic ? `var(--pittorica-${color}-3)` : color,
    '--chip-text': isSemantic ? `var(--pittorica-${color}-11)` : 'white',
  } as React.CSSProperties;

  const variantStyles = {
    solid: {
      backgroundColor: 'var(--chip-base)',
      color: 'white',
      borderColor: 'var(--chip-base)',
    },
    soft: {
      backgroundColor: 'var(--chip-bg)',
      color: 'var(--chip-text)',
      borderColor: 'transparent',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--chip-text)',
      borderColor: 'var(--chip-base)',
    },
  };

  return (
    <Box
      as={props.onClick ? 'button' : 'div'}
      className={clsx(
        'pittorica-chip',
        `pittorica-chip--size-${size}`,
        className
      )}
      style={{ ...variantStyles[variant], ...chipStyles }}
      {...props}
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
