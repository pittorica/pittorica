import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export interface BadgeProps extends BoxProps {
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
}

export const Badge = ({
  children,
  badgeContent,
  variant = 'standard',
  color = 'indigo',
  invisible = false,
  max = 99,
  className,
  style,
  ...props
}: BadgeProps) => {
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

  return (
    <div className="pittorica-badge-container">
      {children}
      <Box
        as="span"
        className={clsx(
          'pittorica-badge',
          `pittorica-badge--${variant}`,
          className
        )}
        style={badgeStyles}
        {...props}
      >
        {!isDot && displayContent}
      </Box>
    </div>
  );
};
