/* eslint-disable unicorn/prefer-global-this */
/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import {
  AlertDialog,
  AlertDialogActions,
  AlertDialogDescription,
  AlertDialogTitle,
} from './AlertDialog.js';

describe('AlertDialog', () => {
  it('renders with correct role for accessibility', () => {
    render(
      <AlertDialog open={true} onClose={() => {}}>
        <AlertDialogTitle>Critical Action</AlertDialogTitle>
        <AlertDialogDescription>content</AlertDialogDescription>
      </AlertDialog>
    );

    expect(screen.getByRole('alertdialog')).toBeTruthy();
  });

  it('does NOT call onClose when clicking the overlay by default', () => {
    const handleClose = vi.fn();
    render(
      <AlertDialog open={true} onClose={handleClose}>
        <AlertDialogDescription>content</AlertDialogDescription>
      </AlertDialog>
    );

    const overlay = document.querySelector('.pittorica-alert-dialog-overlay');
    expect(overlay).not.toBeNull();

    if (overlay) {
      fireEvent.click(overlay);
    }

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('does NOT call onClose when pressing Escape by default', () => {
    const handleClose = vi.fn();
    render(
      <AlertDialog open={true} onClose={handleClose}>
        <AlertDialogDescription>content</AlertDialogDescription>
      </AlertDialog>
    );

    // We target window as global listener is attached there
    fireEvent.keyDown(window, { key: 'Escape' });

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('calls onClose only when explicit actions are triggered', () => {
    const handleClose = vi.fn();
    render(
      <AlertDialog open={true} onClose={handleClose}>
        <AlertDialogActions>
          <button onClick={handleClose}>Confirm</button>
        </AlertDialogActions>
      </AlertDialog>
    );

    const button = screen.getByText('Confirm');
    fireEvent.click(button);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('allows overriding safety constraints with closeOnEsc', () => {
    const handleClose = vi.fn();
    render(
      <AlertDialog open={true} onClose={handleClose} closeOnEsc={true}>
        <AlertDialogDescription>content</AlertDialogDescription>
      </AlertDialog>
    );

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('allows overriding safety constraints with closeOnOverlayClick', () => {
    const handleClose = vi.fn();
    render(
      <AlertDialog open={true} onClose={handleClose} closeOnOverlayClick={true}>
        <AlertDialogDescription>content</AlertDialogDescription>
      </AlertDialog>
    );

    const overlay = document.querySelector('.pittorica-alert-dialog-overlay');
    if (overlay) {
      fireEvent.click(overlay);
    }
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('maintains scroll lock on the body when open', () => {
    render(
      <AlertDialog open={true} onClose={() => {}}>
        <AlertDialogTitle>Title</AlertDialogTitle>
      </AlertDialog>
    );
    // Verifies the manual body style manipulation
    expect(document.body.style.overflow).toBe('hidden');
  });
});
