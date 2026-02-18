/**
 * @file AlertDialog.tsx
 * Standalone AlertDialog component with corrected text visibility for dark mode.
 */

import { type ReactNode, useEffect, useId, useState } from 'react';

import { createPortal } from 'react-dom';

import { clsx } from 'clsx';

import { Box } from '@pittorica/box-react';

/* --- Internal Types --- */

export interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  /** @default false */
  closeOnOverlayClick?: boolean;
  /** @default false */
  closeOnEsc?: boolean;
}

/* --- Standalone Compound Components --- */

export const AlertDialogTitle = ({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) => (
  <Box mb="3">
    <h2
      style={{
        margin: 0,
        fontSize: 'var(--pittorica-font-size-5)',
        color: color ? `var(--pittorica-${color}-9)` : 'var(--pittorica-white)',
      }}
    >
      {children}
    </h2>
  </Box>
);

export const AlertDialogDescription = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Box mb="6">
    <p
      style={{
        margin: 0,
        color: 'var(--pittorica-white)',
        opacity: 0.7,
        fontSize: 'var(--pittorica-font-size-3)',
        lineHeight: '1.6',
      }}
    >
      {children}
    </p>
  </Box>
);

export const AlertDialogActions = ({ children }: { children: ReactNode }) => (
  <Box mt="6">
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 'var(--pittorica-space-3)',
      }}
    >
      {children}
    </div>
  </Box>
);

/* --- Main Standalone Component --- */

export const AlertDialog = ({
  open,
  onClose,
  children,
  className,
  closeOnOverlayClick = false,
  closeOnEsc = false,
}: AlertDialogProps) => {
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') onClose();
    };

    globalThis.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      globalThis.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, closeOnEsc, onClose]);

  if (!open || !mounted || typeof document === 'undefined') return null;

  return createPortal(
    <div className="pittorica-dialog-portal">
      <div
        className="pittorica-dialog-overlay"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          zIndex: 1000,
        }}
      />

      <Box
        className={clsx('pittorica-dialog-content', className)}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={titleId}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '500px',
          backgroundColor: 'var(--pittorica-slate-1)',
          borderRadius: 'var(--pittorica-radius-4)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
          padding: 'var(--pittorica-space-6)',
          zIndex: 1001,
          outline: 'none',
          color: 'var(--pittorica-white)',
        }}
      >
        {children}
      </Box>
    </div>,
    document.body
  );
};

AlertDialog.displayName = 'AlertDialog';
