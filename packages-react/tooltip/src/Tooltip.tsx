import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { PittoricaTheme } from '@pittorica/theme-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type TooltipProps<E extends ElementType = 'span'> = Omit<
  BoxProps<E>,
  'content'
> & {
  /** The content to display inside the tooltip */
  content: ReactNode;
  /** The element that triggers the tooltip */
  children: ReactNode;
  /**
   * The preferred side of the trigger to render against.
   * @default 'top'
   */
  side?: 'top' | 'bottom';
  appearance?: 'light' | 'dark' | 'inherit';
};

/**
 * Tooltip component for displaying contextual information.
 * The trigger element is polymorphic and defaults to span.
 */
export const Tooltip = <E extends ElementType = 'span'>({
  children,
  content,
  side: preferredSide = 'top',
  appearance,
  className,
  as,
  ...props
}: TooltipProps<E>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [actualSide, setActualSide] = useState(preferredSide);
  const [inheritedAppearance, setInheritedAppearance] = useState<
    'light' | 'dark'
  >();

  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isOpen && triggerRef.current) {
      const themeElement = triggerRef.current.closest(
        '.pittorica-theme'
      ) as HTMLElement | null;
      if (themeElement) {
        const app = themeElement.dataset.appearance as 'light' | 'dark';
        setInheritedAppearance(app || undefined);
      }
    }
  }, [isOpen]);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const gap = 8;
    const tooltipHeight = 32;
    let side = preferredSide;

    if (preferredSide === 'top' && triggerRect.top - tooltipHeight - gap < 0) {
      side = 'bottom';
    } else if (
      preferredSide === 'bottom' &&
      globalThis.window !== undefined &&
      triggerRect.bottom + tooltipHeight + gap > window.innerHeight
    ) {
      side = 'top';
    }

    setActualSide(side);

    const top =
      side === 'top' ? triggerRect.top - gap : triggerRect.bottom + gap;

    const left = triggerRect.left + triggerRect.width / 2;

    setCoords({ top, left });
  }, [preferredSide]);

  const handleOpen = () => {
    updatePosition();
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const Tag = as || 'span';
  const finalAppearance =
    appearance === 'inherit'
      ? inheritedAppearance
      : (appearance ?? inheritedAppearance);

  return (
    <Box
      as={Tag as ElementType}
      ref={triggerRef}
      className={clsx('pittorica-tooltip-root', className)}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
      {...(props as BoxProps<E>)}
    >
      {children}
      {isOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <PittoricaTheme appearance={finalAppearance}>
            <div
              ref={tooltipRef}
              className="pittorica-tooltip-content"
              role="tooltip"
              style={
                {
                  top: coords.top,
                  left: coords.left,
                  transform:
                    actualSide === 'top'
                      ? 'translate(-50%, -100%)'
                      : 'translate(-50%, 0)',
                  position: 'fixed',
                  pointerEvents: 'none',
                } as CSSProperties
              }
            >
              {content}
            </div>
          </PittoricaTheme>,
          document.body
        )}
    </Box>
  );
};

Tooltip.displayName = 'Tooltip';
