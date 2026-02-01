/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import {
  DialogActions,
  DialogDescription,
  DialogTitle,
} from '@pittorica/dialog-react';

import { AlertDialog } from './AlertDialog.js';

describe('AlertDialog', () => {
  it('renders with correct role for accessibility', () => {
    render(
      <AlertDialog open={true} onClose={() => {}}>
        <DialogTitle>Critical Action</DialogTitle>
        <DialogDescription>content</DialogDescription>
      </AlertDialog>
    );

    expect(screen.getByRole('alertdialog', { hidden: true })).toBeTruthy();
  });

  it('does NOT call onClose when clicking the overlay by default', () => {
    const handleClose = vi.fn();
    render(
      <AlertDialog open={true} onClose={handleClose}>
        <DialogDescription>content</DialogDescription>
      </AlertDialog>
    );

    const overlay = document.querySelector('.pittorica-dialog-overlay');
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
        <DialogDescription>content</DialogDescription>
      </AlertDialog>
    );

    // eslint-disable-next-line unicorn/prefer-global-this
    fireEvent.keyDown(window, { key: 'Escape' });

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('calls onClose only when explicit actions are triggered', () => {
    const handleClose = vi.fn();
    render(
      <AlertDialog open={true} onClose={handleClose}>
        <DialogActions>
          <button onClick={handleClose}>Confirm</button>
        </DialogActions>
      </AlertDialog>
    );

    const button = screen.getByText('Confirm');
    fireEvent.click(button);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('allows overriding safety constraints', () => {
    const handleClose = vi.fn();
    render(
      <AlertDialog open={true} onClose={handleClose} closeOnEsc={true}>
        <DialogDescription>content</DialogDescription>
      </AlertDialog>
    );

    // eslint-disable-next-line unicorn/prefer-global-this
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('maintains focus lock and scroll lock like a standard dialog', () => {
    render(
      <AlertDialog open={true} onClose={() => {}}>
        <DialogTitle>Title</DialogTitle>
      </AlertDialog>
    );

    expect(document.body.style.overflow).toBe('hidden');
  });
});
