import React, { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type BadgeProps<E extends ElementType = 'span'> = BoxProps<E> & {
  /** The content to show inside the badge (usually a number) */
  badgeContent?: React.ReactNode;
  /** @default 'standard' */
  variant?: 'standard' | 'dot';
  /** @default 'indigo' */
  color?: PittoricaColor;
  /** If true, the badge is hidden */
  invisible?: boolean;
  /** Max value to display. If badgeContent > max, shows "max+" */
  max?: number;
  /** The anchor element */
  children: React.ReactNode;
};

/**
 * Badge component for notifications and status indicators.
 * The badge element itself is polymorphic (defaults to span).
 */
export const Badge = <E extends ElementType = 'span'>({
  children,
  badgeContent,
  variant = 'standard',
  color = 'indigo',
  invisible = false,
  max = 99,
  className,
  style,
  as,
  ...props
}: BadgeProps<E>) => {
  const isDot = variant === 'dot';

  // Logic for display content
  const displayContent =
    !isDot && typeof badgeContent === 'number' && badgeContent > max
      ? `${max}+`
      : badgeContent;

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');

  const badgeStyles: React.CSSProperties = {
    ...style,
    backgroundColor: isSemantic ? `var(--pittorica-${color}-9)` : color,
    color: 'white',
  };

  if (invisible) return <>{children}</>;

  const Tag = as || 'span';

  return (
    <div className="pittorica-badge-container">
      {children}
      <Box
        as={Tag as ElementType}
        className={clsx(
          'pittorica-badge',
          `pittorica-badge--${variant}`,
          className
        )}
        style={badgeStyles}
        {...(props as BoxProps<E>)}
      >
        {!isDot && displayContent}
      </Box>
    </div>
  );
};

Badge.displayName = 'Badge';
