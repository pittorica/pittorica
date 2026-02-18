import {
  Children,
  type ElementType,
  isValidElement,
  type ReactNode,
  useId,
  useMemo,
  useState,
} from 'react';

import { clsx } from 'clsx';

import { IconX } from '@tabler/icons-react';

import { AnimatePresence, motion } from 'motion/react';
import { Box, type BoxProps } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { IconButton } from '@pittorica/icon-button-react';
import { Text } from '@pittorica/text-react';

/* --- Props Types --- */

/**
 * Props for the Carousel Root component.
 */
export type CarouselRootProps<E extends ElementType = 'div'> = BoxProps<E> & {
  children?: ReactNode;
  defaultIndex?: number;
};

/**
 * Props for the Carousel Item component.
 */
export type CarouselItemProps<E extends ElementType = 'div'> = BoxProps<E> & {
  src?: string;
  alt?: string;
};

/* --- Internal Components --- */

/**
 * Internal Pagination indicator for the Carousel.
 */
const CarouselPagination = ({
  total,
  active,
  carouselId,
}: {
  total: number;
  active: number;
  carouselId: string;
}) => (
  <Flex gap="2" justify="center" className="pittorica-carousel-pagination">
    {Array.from({ length: total }).map((_, i) => (
      <motion.div
        // eslint-disable-next-line @eslint-react/no-array-index-key
        key={`${carouselId}-dot-${i}`}
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

/**
 * Logic to determine the visual styles based on the item position.
 */
const getItemStyles = (index: number) => {
  if (index === 0) return { width: '60%', flex: '0 0 60%' };
  if (index === 1) return { width: '25%', flex: '0 0 25%' };
  if (index === 2) return { width: '15%', flex: '0 0 15%' };
  return { width: '0%', opacity: 0, flex: '0 0 0%' };
};

/* --- Carousel Components --- */

/**
 * Carousel.Root handles the state and orchestration of the items.
 */
export const CarouselRoot = <E extends ElementType = 'div'>({
  children,
  className,
  defaultIndex = 0,
  as,
  ...props
}: CarouselRootProps<E>) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const baseId = useId();

  // Normalize children to a flat array of valid React elements
  const childrenArray = useMemo(() => {
    const flatChildren: ReactNode[] = [];
    // eslint-disable-next-line @eslint-react/no-children-for-each
    Children.forEach(children, (child) => {
      if (isValidElement(child)) {
        flatChildren.push(child);
      }
    });
    return flatChildren;
  }, [children]);

  // Rotate items based on active index
  const items = useMemo(() => {
    return [
      ...childrenArray.slice(activeIndex),
      ...childrenArray.slice(0, activeIndex),
    ];
  }, [childrenArray, activeIndex]);

  const handleItemClick = (
    e: React.MouseEvent,
    index: number,
    visualIndex: number
  ) => {
    const target = e.target as HTMLElement;
    const isInteractive = target.closest('button, a, input, [role="button"]');
    if (isInteractive) return;

    if (visualIndex === 0) {
      setIsFullscreen(true);
    } else {
      setActiveIndex(index);
    }
  };

  const Tag = as || 'div';

  return (
    <Box
      as={Tag as ElementType}
      className={clsx('pittorica-carousel-root', className)}
      {...(props as BoxProps<E>)}
    >
      <div className="pittorica-carousel-viewport">
        <AnimatePresence mode="popLayout">
          {items.map((child, visualIndex) => {
            const originalIndex =
              (activeIndex + visualIndex) % childrenArray.length;
            const styles = getItemStyles(visualIndex);
            if (visualIndex > 2) return null;

            return (
              <motion.div
                key={originalIndex}
                layout
                data-visual-index={visualIndex}
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0, ...styles }}
                exit={{ opacity: 0, width: '0%' }}
                className="pittorica-carousel-item"
                onClick={(e) => handleItemClick(e, originalIndex, visualIndex)}
              >
                {child}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pittorica-carousel-lightbox"
          >
            <IconButton
              variant="text"
              onClick={() => setIsFullscreen(false)}
              className="pittorica-carousel-lightbox-close"
              as="button"
            >
              <IconX size={32} color="white" />
            </IconButton>

            <div className="pittorica-carousel-lightbox-content">
              <div
                data-visual-index="0"
                style={{ width: '100%', height: '100%' }}
              >
                {childrenArray[activeIndex]}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Box mt="4">
        <CarouselPagination
          total={childrenArray.length}
          active={activeIndex}
          carouselId={baseId}
        />
      </Box>
    </Box>
  );
};

/**
 * Carousel.Item represents a single slide.
 */
export const CarouselItem = <E extends ElementType = 'div'>({
  children,
  src,
  alt,
  className,
  as,
  ...props
}: CarouselItemProps<E>) => {
  const Tag = as || 'div';
  return (
    <Box
      as={Tag as ElementType}
      className={clsx('pittorica-carousel-item-inner', className)}
      style={{ height: '100%', width: '100%' }}
      {...(props as BoxProps<E>)}
    >
      {src && (
        <div className="pittorica-carousel-background-blur">
          <img src={src} alt="" aria-hidden="true" />
        </div>
      )}
      <div className="pittorica-carousel-main-image">
        {src ? <img src={src} alt={alt || ''} /> : children}
      </div>
      {src && children}
    </Box>
  );
};

/**
 * Carousel.Description provides a caption for the items.
 */
export const CarouselDescription = <E extends ElementType = 'div'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => {
  const Tag = as || 'div';
  return (
    <Box
      as={Tag as ElementType}
      className={clsx('pittorica-carousel-description', className)}
      {...(props as BoxProps<E>)}
    >
      <Text weight="medium">{children as ReactNode}</Text>
    </Box>
  );
};

/**
 * Compound component object.
 */
export const Carousel = {
  Root: CarouselRoot,
  Item: CarouselItem,
  Description: CarouselDescription,
};

CarouselRoot.displayName = 'Carousel.Root';
CarouselItem.displayName = 'Carousel.Item';
CarouselDescription.displayName = 'Carousel.Description';
