/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly with a label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
  });

  it('toggles state when clicked', () => {
    const handleChange = vi.fn();
    render(<Checkbox label="Toggle" onChange={handleChange} />);

    const input = screen.getByLabelText('Toggle');
    fireEvent.click(input);

    expect(input).toBeChecked();
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle when disabled', () => {
    render(<Checkbox label="Disabled" disabled />);
    const input = screen.getByLabelText('Disabled');

    fireEvent.click(input);
    expect(input).not.toBeChecked();
  });

  it('applies the required attribute when the required prop is true', () => {
    render(<Checkbox label="Required Input" required />);
    const input = screen.getByLabelText('Required Input');
    expect(input).toBeRequired();
  });

  it('sets the default color prop to source', () => {
    render(<Checkbox label="Default Color" />);
    const input = screen.getByLabelText('Default Color');
    // The color is applied via CSS variable --_checkbox-color on the root Box
    expect(input.closest('.pittorica-checkbox-root')).toHaveStyle({
      '--_checkbox-color': 'var(--pittorica-source-9)',
    });
  });
});
