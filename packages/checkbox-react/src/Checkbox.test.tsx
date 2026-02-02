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
});
