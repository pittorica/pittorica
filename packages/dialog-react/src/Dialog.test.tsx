/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Dialog, DialogDescription, DialogTitle } from './Dialog';

describe('Dialog', () => {
  it('renders nothing when open is false', () => {
    render(
      <Dialog open={false} onClose={() => {}}>
        <div>Content</div>
      </Dialog>
    );
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('renders content when open is true', () => {
    render(
      <Dialog open={true} onClose={() => {}}>
        <div data-testid="content">Content</div>
      </Dialog>
    );
    expect(screen.getByRole('dialog', { hidden: true })).toBeTruthy();
    expect(screen.getByTestId('content')).toBeTruthy();
  });

  it('calls onClose when clicking the overlay', () => {
    const handleClose = vi.fn();
    render(
      <Dialog open={true} onClose={handleClose}>
        <div>Content</div>
      </Dialog>
    );

    const overlay = document.querySelector('.pittorica-dialog-overlay');
    expect(overlay).not.toBeNull();

    if (overlay) {
      fireEvent.click(overlay);
    }

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when clicking the content', () => {
    const handleClose = vi.fn();
    render(
      <Dialog open={true} onClose={handleClose}>
        <button>Action</button>
      </Dialog>
    );

    const button = screen.getByText('Action');
    fireEvent.click(button);

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('calls onClose when pressing Escape', () => {
    const handleClose = vi.fn();
    render(
      <Dialog open={true} onClose={handleClose}>
        <div>Content</div>
      </Dialog>
    );

    // eslint-disable-next-line unicorn/prefer-global-this
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('locks body scroll when open', () => {
    render(
      <Dialog open={true} onClose={() => {}}>
        <div>Content</div>
      </Dialog>
    );
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body scroll when closed (unmounted)', () => {
    document.body.style.overflow = '';

    const { unmount } = render(
      <Dialog open={true} onClose={() => {}}>
        <div>Content</div>
      </Dialog>
    );
    expect(document.body.style.overflow).toBe('hidden');

    unmount();
    expect(document.body.style.overflow).toBe('');
  });

  it('connects title and description via aria attributes', () => {
    render(
      <Dialog open={true} onClose={() => {}}>
        <DialogTitle>My Title</DialogTitle>
        <DialogDescription>My Description</DialogDescription>
      </Dialog>
    );

    const dialog = screen.getByRole('dialog', { hidden: true });
    const title = screen.getByRole('heading', {
      name: 'My Title',
      hidden: true,
    });
    const description = screen.getByText('My Description');

    expect(dialog.getAttribute('aria-labelledby')).toBe(title.id);
    expect(dialog.getAttribute('aria-describedby')).toBe(description.id);
  });
});
