import { type CSSProperties, type ElementType, useId } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type ProgressProps<E extends ElementType = 'div'> = BoxProps<E> & {
  /** @default 0 */
  value?: number;
  /** @default 100 */
  max?: number;
  /** @default 'indigo' */
  color?: PittoricaColor;
  /** @default 'default' */
  variant?: 'default' | 'wave';
};

/**
 * Funky Progress component using SVG Patterns for decorative effects.
 * Fully polymorphic and agnostic foundation.
 */
export const Progress = <E extends ElementType = 'div'>({
  value = 0,
  max = 100,
  color = 'indigo',
  variant = 'default',
  className,
  style,
  as,
  ...props
}: ProgressProps<E>) => {
  const uniqueId = useId();
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  const patternId = `pittorica-progress-pattern-${uniqueId}`;
  const Tag = as || 'div';

  return (
    <Box
      as={Tag as ElementType}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={clsx('pittorica-progress-root', className)}
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
        style={{ width: `${percentage}%` }}
      />

      {/* Funky Overlay (SVG) */}
      {variant === 'wave' && (
        <svg className="pittorica-progress-svg">
          <defs>
            <pattern
              id={patternId}
              width="24"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 8 Q6 0 12 8 T24 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="24 0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </pattern>
          </defs>
          <rect
            width={`${percentage}%`}
            height="100%"
            fill={`url(#${patternId})`}
            style={{ transition: 'width 660ms cubic-bezier(0.65, 0, 0.35, 1)' }}
          />
        </svg>
      )}
    </Box>
  );
};

Progress.displayName = 'Progress';
