'use client';

import React, { useEffect, useMemo, useState } from 'react';

import { clsx } from 'clsx';

import { motion } from 'motion/react';

export type BackgroundBeamsProps = {
  className?: string;
  maxHeight?: string;
};

export const BackgroundBeams = React.memo(
  ({ className, maxHeight = '100vh' }: BackgroundBeamsProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
      setIsMounted(() => true);
    }, []);

    // Generate 40 horizontal wavy beams flowing from left to right.
    const beams = useMemo(() => {
      if (!isMounted) return [];
      return Array.from({ length: 40 }, (_, i) => {
        // Distribute beams vertically across the screen.
        const yBase = (i / 40) * 1100 - 100;
        const amplitude = 50 + Math.random() * 100;

        // Create a wavy path using a series of cubic Bezier segments.
        // The path starts well before the left edge and ends well after the right.
        const startX = -200;
        const endX = 1640;
        const segmentWidth = (endX - startX) / 3;

        const d = `M${startX} ${yBase}
                   C${startX + segmentWidth * 0.5} ${yBase - amplitude}, ${startX + segmentWidth * 0.5} ${yBase + amplitude}, ${startX + segmentWidth} ${yBase}
                   C${startX + segmentWidth * 1.5} ${yBase - amplitude}, ${startX + segmentWidth * 1.5} ${yBase + amplitude}, ${startX + segmentWidth * 2} ${yBase}
                   C${startX + segmentWidth * 2.5} ${yBase - amplitude}, ${startX + segmentWidth * 2.5} ${yBase + amplitude}, ${endX} ${yBase}`;

        return {
          id: i,
          d,
          duration: 10 + Math.random() * 10,
          delay: -Math.random() * 20,
          opacity: 1,
          strokeWidth: 1 + Math.random() * 2,
        };
      });
    }, [isMounted]);

    if (!isMounted) return null;

    return (
      <div
        className={clsx('pittorica-background-beams', className)}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          height: '100%',
          maxHeight,
          width: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, white, transparent)',
          maskImage: 'radial-gradient(ellipse at center, white, transparent)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            inset: 0,
            height: '100%',
            width: '100%',
          }}
        >
          <g>
            {beams.map((beam) => (
              <motion.path
                key={beam.id}
                d={beam.d}
                stroke="url(#beam-gradient-horizontal)"
                strokeWidth={beam.strokeWidth}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: beam.duration,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: beam.delay,
                  times: [0, 0.2, 0.8, 1],
                }}
              />
            ))}
          </g>
          <defs>
            <linearGradient
              id="beam-gradient-horizontal"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="var(--pittorica-source-9)"
                stopOpacity="0"
              />
              <stop offset="50%" stopColor="var(--pittorica-source-9)" />
              <stop
                offset="100%"
                stopColor="var(--pittorica-source-9)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
);

BackgroundBeams.displayName = 'BackgroundBeams';
