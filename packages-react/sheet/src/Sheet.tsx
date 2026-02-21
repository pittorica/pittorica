import {
  type ElementType,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

import { clsx } from 'clsx';

import { IconX } from '@tabler/icons-react';

import { Box, type BoxProps } from '@pittorica/box-react';
import { IconButton } from '@pittorica/icon-button-react';
import { PittoricaTheme } from '@pittorica/theme-react';

/* --- Props Types --- */

export type SheetSide = 'top' | 'right' | 'bottom' | 'left';

/**
 * Fix TS2314: Use 'type' and generic E for polymorphic BoxProps.
 */
export type SheetProps<E extends ElementType = 'div'> = BoxProps<E> & {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  /**
   * Direction from which the sheet appears.
   * @default 'right'
   */
  side?: SheetSide;
  title?: string;
  appearance?: 'light' | 'dark' | 'inherit';
};

/**
 * Sheet component following MD3 guidelines for modal panels.
 * Fully polymorphic and agnostic foundation.
 */
export const Sheet = <E extends ElementType = 'div'>({
  isOpen,
  onClose,
  children,
  side = 'right',
  title,
  appearance,
  className,
  as,
  ...props
}: SheetProps<E>) => {
  const [isMounted, setIsMounted] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [inheritedAppearance, setInheritedAppearance] = useState<
    'light' | 'dark'
  >();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (isOpen && anchorRef.current) {
      const themeElement = anchorRef.current.closest(
        '.pittorica-theme'
      ) as HTMLElement | null;
      if (themeElement) {
        const app = themeElement.dataset.appearance as 'light' | 'dark';
        setInheritedAppearance(app || undefined);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !isMounted || typeof document === 'undefined') return null;

  const finalAppearance =
    appearance === 'inherit'
      ? inheritedAppearance
      : (appearance ?? inheritedAppearance);
  const Tag = as || 'div';

  return (
    <>
      <div ref={anchorRef} style={{ display: 'none' }} aria-hidden="true" />
      {createPortal(
        <div className="pittorica-sheet-overlay" onClick={onClose}>
          <PittoricaTheme appearance={finalAppearance}>
            <Box
              as={Tag as ElementType}
              className={clsx(
                'pittorica-sheet-content',
                `pittorica-sheet--${side}`,
                className
              )}
              role="dialog"
              aria-modal="true"
              onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}
              {...(props as BoxProps<E>)}
            >
              {(side === 'bottom' || side === 'top') && (
                <div className="pittorica-sheet-handle" />
              )}

              <Box
                p="4"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {title && (
                  <h2
                    style={{
                      margin: 0,
                      fontSize: 'var(--pittorica-font-size-4)',
                    }}
                  >
                    {title}
                  </h2>
                )}
                <IconButton
                  variant="text"
                  color="inherit"
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  aria-label="Close"
                  as="button"
                >
                  <IconX size={20} />
                </IconButton>{' '}
              </Box>

              <Box p="4" style={{ flexGrow: 1, overflowY: 'auto' }}>
                {children}
              </Box>
            </Box>
          </PittoricaTheme>
        </div>,
        document.body
      )}
    </>
  );
};

Sheet.displayName = 'Sheet';
