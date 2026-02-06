import { useMemo, useState } from 'react';

import { clsx } from 'clsx';

import { AnimatePresence, motion } from 'motion/react';
import { Box, type BoxProps } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';

export interface CarouselRootProps extends BoxProps {
  /** Initial active index */
  defaultIndex?: number;
}

/**
 * Calculates responsive percentage widths to fill 100% of the viewport.
 * - Index 0 (Hero): 60%
 * - Index 1: 25%
 * - Index 2: Remaining 15%
 */
const getItemStyles = (index: number) => {
  if (index === 0) return { width: '60%', flex: '0 0 60%' };
  if (index === 1) return { width: '25%', flex: '0 0 25%' };
  if (index === 2) return { width: '15%', flex: '0 0 15%' };
  return { width: '0%', opacity: 0, flex: '0 0 0%' };
};

/**
 * Pagination dots/bars component.
 * Displays a pill for the active index and dots for others.
 */
const CarouselPagination = ({
  total,
  active,
}: {
  total: number;
  active: number;
}) => (
  <Flex gap="2" justify="center" className="pittorica-carousel-pagination">
    {Array.from({ length: total }).map((_, i) => (
      <motion.div
        // eslint-disable-next-line @eslint-react/no-array-index-key
        key={`pagination-dot-${i}`}
        layout
        style={{
          height: '8px',
          borderRadius: '4px',
          backgroundColor:
            i === active
              ? 'var(--pittorica-slate-9)'
              : 'var(--pittorica-slate-4)',
        }}
        animate={{
          width: i === active ? '24px' : '8px',
          opacity: i === active ? 1 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    ))}
  </Flex>
);

export const CarouselRoot = ({
  children,
  className,
  defaultIndex = 0,
  ...props
}: CarouselRootProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const childrenArray = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children]
  );

  const items = useMemo(() => {
    return [
      ...childrenArray.slice(activeIndex),
      ...childrenArray.slice(0, activeIndex),
    ];
  }, [childrenArray, activeIndex]);

  return (
    <Box {...props} className={clsx('pittorica-carousel-root', className)}>
      <div
        className="pittorica-carousel-viewport"
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence mode="popLayout" initial={true}>
          {items.map((child, visualIndex) => {
            const originalIndex =
              (activeIndex + visualIndex) % childrenArray.length;
            const styles = getItemStyles(visualIndex);

            if (visualIndex > 2) return null;

            return (
              <motion.div
                key={originalIndex}
                layout
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0, ...styles }}
                exit={{ opacity: 0, width: '0%' }}
                transition={{
                  layout: { type: 'spring', stiffness: 200, damping: 25 },
                  x: {
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                    delay: visualIndex * 0.12,
                  },
                  opacity: { duration: 0.5, delay: visualIndex * 0.12 },
                }}
                className="pittorica-carousel-item"
                onClick={() => setActiveIndex(originalIndex)}
              >
                {child}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <Box mt="4">
        <CarouselPagination total={childrenArray.length} active={activeIndex} />
      </Box>
    </Box>
  );
};

export const CarouselItem = ({ children, className, ...props }: BoxProps) => (
  <Box
    {...props}
    className={clsx('pittorica-carousel-item-inner', className)}
    style={{ height: '100%', display: 'flex' }}
  >
    {children}
  </Box>
);

export const CarouselDescription = ({ children, className }: BoxProps) => (
  <div className={clsx('pittorica-carousel-description', className)}>
    <Text weight="medium">{children}</Text>
  </div>
);

export const Carousel = {
  Root: CarouselRoot,
  Item: CarouselItem,
  Description: CarouselDescription,
};
