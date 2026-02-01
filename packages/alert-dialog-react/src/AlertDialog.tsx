import { Dialog, type DialogProps } from '@pittorica/dialog-react';

export const AlertDialog = ({
  open,
  onClose,
  children,
  className,
  appearance,
  closeOnOverlayClick = false,
  closeOnEsc = false,
}: DialogProps) => {
  return (
    <Dialog
      open={open}
      // Senior Note: We still pass the original onClose.
      // It won't be triggered by the overlay if closeOnOverlayClick is false,
      // but it remains available for the compound components (DialogActions)
      // or manual closure via buttons.
      onClose={onClose}
      className={className}
      appearance={appearance}
      closeOnOverlayClick={closeOnOverlayClick}
      closeOnEsc={closeOnEsc}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        // Ensure the focus trap target doesn't show a browser outline
        style={{ outline: 'none' }}
      >
        {children}
      </div>
    </Dialog>
  );
};
