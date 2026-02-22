/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Switch } from './Switch.js';

describe('Switch', () => {
  it('toggles state on click', () => {
    const onCheckedChange = vi.fn();
    render(<Switch onCheckedChange={onCheckedChange} />);

    const sw = screen.getByRole('switch');
    fireEvent.click(sw);

    expect(onCheckedChange).toHaveBeenCalledWith(true);
    expect(sw).toHaveAttribute('aria-checked', 'true');
  });

  it('does not toggle when disabled', () => {
    const onCheckedChange = vi.fn();
    render(<Switch disabled onCheckedChange={onCheckedChange} />);

    fireEvent.click(screen.getByRole('switch'));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('applies aria-required attribute when required prop is true', () => {
    render(<Switch required />);
    const sw = screen.getByRole('switch');
    expect(sw).toHaveAttribute('aria-required', 'true');
  });

  it('sets the default color prop to source', () => {
    render(<Switch />); // Default color is 'source'
    const sw = screen.getByRole('switch');
    expect(sw).toHaveStyle({
      '--pittorica-source-color': 'var(--pittorica-source-9)',
    });
  });
});
