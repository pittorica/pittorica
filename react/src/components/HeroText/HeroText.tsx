'use client';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '../Box';

export type HeroTextProps = BoxProps<'div'> & {
  /**
   * The text to display.
   */
  text: string;
};

const CHAR_WIDTH_RATIO = 67; // Approximate width per character.

/**
 * HeroText component for high-impact responsive headings using SVG.
 * Integrated with Pittorica dynamic tokens.
 */
export const HeroText = ({
  text,
  className,
  style,
  ...props
}: HeroTextProps) => {
  const viewBoxWidth = text.length * CHAR_WIDTH_RATIO;
  const viewBoxHeight = 130;

  return (
    <Box
      className={clsx('pittorica-hero-text', className)}
      style={{
        width: '100%',
        ...style,
      }}
      {...props}
    >
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        width="100%"
        style={{ display: 'block', overflow: 'visible' }}
        aria-label={text}
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontFamily: 'var(--pittorica-font-heading)',
            fontWeight: '900',
            fontSize: '115px',
            fill: 'currentColor',
            letterSpacing: '2px',
          }}
        >
          {text}
        </text>
      </svg>
    </Box>
  );
};

HeroText.displayName = 'HeroText';
