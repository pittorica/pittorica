import {
  type ElementType,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

import { clsx } from 'clsx';

import { IconX } from '@tabler/icons-react';

import { Box, type BoxProps } from '@pittorica/box-react';
import { IconButton } from '@pittorica/icon-button-react';

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
  className,
  as,
  ...props
}: SheetProps<E>) => {
  const [isMounted, setIsMounted] = useState(false);

  // Fix: @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !isMounted || typeof document === 'undefined') return null;

  const Tag = as || 'div';

  return createPortal(
    <>
      <div
        className="pittorica-sheet-overlay"
        onClick={onClose}
        aria-hidden="true"
      />
      <Box
        as={Tag as ElementType}
        className={clsx(
          'pittorica-sheet-content',
          `pittorica-sheet--${side}`,
          className
        )}
        role="dialog"
        aria-modal="true"
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
            <h2 style={{ margin: 0, fontSize: 'var(--pittorica-font-size-4)' }}>
              {title}
            </h2>
          )}
          <IconButton
            variant="text"
            color="slate"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close"
            as="button"
          >
            <IconX size={20} />
          </IconButton>
        </Box>

        <Box p="4" style={{ flexGrow: 1, overflowY: 'auto' }}>
          {children}
        </Box>
      </Box>
    </>,
    document.body
  );
};

Sheet.displayName = 'Sheet';
