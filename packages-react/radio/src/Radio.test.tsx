/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Radio } from './Radio.js';

describe('Radio', () => {
  it('renders in unchecked state by default', () => {
    render(<Radio checked={false} />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-checked', 'false');
    expect(radio).toHaveAttribute('data-state', 'unchecked');
  });

  it('renders in checked state when prop is true', () => {
    render(<Radio checked={true} />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-checked', 'true');
    expect(radio).toHaveAttribute('data-state', 'checked');
  });

  it('calls onCheckedChange when clicked', () => {
    const handleChange = vi.fn();
    render(<Radio checked={false} onCheckedChange={handleChange} />);

    fireEvent.click(screen.getByRole('radio'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('does not call onCheckedChange when disabled', () => {
    const handleChange = vi.fn();
    render(<Radio disabled checked={false} onCheckedChange={handleChange} />);

    fireEvent.click(screen.getByRole('radio'));
    expect(handleChange).not.toHaveBeenCalled();
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('applies aria-required attribute when required prop is true', () => {
    render(<Radio required />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-required', 'true');
  });

  it('sets the default color prop to source', () => {
    render(<Radio />); // Default color is 'source'
    const radio = screen.getByRole('radio');
    expect(radio).toHaveStyle({
      '--pittorica-source-color': 'var(--pittorica-source-9)',
    });
  });

  it('forwards ref to the button element', () => {
    let capturedRef: HTMLButtonElement | null = null;
    render(
      <Radio
        ref={(el: HTMLButtonElement | null) => {
          capturedRef = el;
        }}
      />
    );

    expect(capturedRef).not.toBeNull();
    expect((capturedRef as unknown as HTMLElement).tagName).toBe('BUTTON');
  });
});
