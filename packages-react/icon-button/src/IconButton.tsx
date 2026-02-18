import { type CSSProperties, type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type IconButtonProps<E extends ElementType = 'button'> = BoxProps<E> & {
  /** @default 'filled' */
  variant?: 'filled' | 'tonal' | 'outlined' | 'text';
  /** @default 'indigo' */
  color?: PittoricaColor;
  /** @default '3' */
  size?: '1' | '2' | '3' | '4';
  disabled?: boolean;
};

/**
 * A button component optimized for displaying a single icon.
 * Fully polymorphic and agnostic foundation.
 */
export const IconButton = <E extends ElementType = 'button'>({
  children,
  variant = 'filled',
  color = 'indigo',
  size = '3',
  className,
  style,
  as,
  ...props
}: IconButtonProps<E>) => {
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');

  const buttonStyles = {
    ...style,
    '--pittorica-source-color': isSemantic
      ? `var(--pittorica-${color}-9)`
      : color,
    '--pittorica-on-source-color': '#ffffff',
  } as CSSProperties;

  // Logic: automatic tag switching if not explicitly provided via 'as'
  const Tag = as || (props.href ? 'a' : 'button');

  return (
    <Box
      /* Explicitly link Tag and Generic E for type safety */
      as={Tag as ElementType}
      className={clsx(
        'pittorica-icon-button',
        `pittorica-icon-button--${variant}`,
        `pittorica-icon-button--${size}`,
        className
      )}
      style={buttonStyles}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

IconButton.displayName = 'IconButton';
