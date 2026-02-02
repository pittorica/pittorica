/* eslint-disable @eslint-react/no-use-context */
import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import FocusLock from 'react-focus-lock';

import { createPortal } from 'react-dom';

import { clsx } from 'clsx';

import { Box } from '@pittorica/box-react';
import { Heading } from '@pittorica/heading-react';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  appearance?: 'light' | 'dark' | 'inherit';
  /** @default true */
  closeOnOverlayClick?: boolean;
  /** @default true */
  closeOnEsc?: boolean;
}

interface DialogContextValue {
  titleId: string;
  descriptionId: string;
}

const DialogContext = createContext<DialogContextValue | null>(null);

/**
 * Hook to access Dialog context.
 * Ensures compound components are used within a Dialog provider.
 */
const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('Dialog compound components must be used within a Dialog');
  }
  return context;
};

/**
 * Dialog component.
 * Provides a modal window with focus trap and scroll lock.
 */
export const Dialog = ({
  open,
  onClose,
  children,
  className,
  appearance,
  closeOnOverlayClick = true,
  closeOnEsc = true,
}: DialogProps): React.ReactNode => {
  const titleId = useId();
  const descriptionId = useId();
  const [inheritedAppearance, setInheritedAppearance] =
    useState<DialogProps['appearance']>();
  const anchorRef = useRef<HTMLDivElement>(null);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEsc) onClose();
    };
    if (open) globalThis.addEventListener('keydown', handleEsc);
    return () => globalThis.removeEventListener('keydown', handleEsc);
  }, [open, onClose, closeOnEsc]);

  // Body Scroll Lock
  useEffect(() => {
    if (!open) return;
    const originalStyle = globalThis.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [open]);

  // Theme inheritance logic
  useLayoutEffect(() => {
    if (open && anchorRef.current) {
      const themeElement = anchorRef.current.closest('.pittorica-theme');
      if (themeElement) {
        // eslint-disable-next-line unicorn/prefer-dom-node-dataset
        const app = themeElement.getAttribute(
          'data-appearance'
        ) as DialogProps['appearance'];
        // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
        setInheritedAppearance(app || undefined);
      }
    }
  }, [open]);

  if (!open) return null;

  const finalAppearance = appearance ?? inheritedAppearance;

  return (
    <>
      <div ref={anchorRef} style={{ display: 'none' }} aria-hidden="true" />
      {createPortal(
        <div
          className="pittorica-dialog-overlay pittorica-theme"
          onClick={closeOnOverlayClick ? onClose : undefined}
          data-appearance={finalAppearance}
          aria-hidden="true"
        >
          <FocusLock returnFocus={true}>
            <Box
              className={clsx('pittorica-dialog-content', className)}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
            >
              <DialogContext value={{ titleId, descriptionId }}>
                {children}
              </DialogContext>
            </Box>
          </FocusLock>
        </div>,
        document.body
      )}
    </>
  );
};

/**
 * Accessible title for the Dialog.
 */
export const DialogTitle = ({
  children,
  id: _id,
  ...props
}: React.ComponentProps<typeof Heading>) => {
  const { titleId } = useDialogContext();
  return (
    <Heading as="h2" id={titleId} size="6" mb="3" {...props}>
      {children}
    </Heading>
  );
};

/**
 * Accessible description for the Dialog.
 */
export const DialogDescription = ({
  children,
  id: _id,
  ...props
}: React.ComponentProps<typeof Box>) => {
  const { descriptionId } = useDialogContext();
  return (
    <Box
      id={descriptionId}
      mb="4"
      style={{
        color: 'inherit',
        fontSize: 'var(--pittorica-font-size-3)',
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

/**
 * Container for Dialog actions (usually buttons).
 */
export const DialogActions = ({ children }: { children: React.ReactNode }) => (
  <Box
    style={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--pittorica-space-3)',
      marginTop: 'var(--pittorica-space-6)',
    }}
  >
    {children}
  </Box>
);
