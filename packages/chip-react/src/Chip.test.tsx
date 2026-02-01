/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Chip } from './Chip.js';

describe('Chip', () => {
  it('renders children correctly', () => {
    render(<Chip>My Tag</Chip>);
    expect(screen.getByText('My Tag')).toBeTruthy();
  });

  it('calls onDelete when the delete button is clicked', () => {
    const handleDelete = vi.fn();
    render(<Chip onDelete={handleDelete}>Deletable</Chip>);

    const deleteBtn = screen.getByLabelText('Delete');
    fireEvent.click(deleteBtn);

    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it('stops event propagation on delete click', () => {
    const handleClick = vi.fn();
    const handleDelete = vi.fn();
    render(
      <Chip onClick={handleClick} onDelete={handleDelete}>
        Chip
      </Chip>
    );

    fireEvent.click(screen.getByLabelText('Delete'));

    expect(handleDelete).toHaveBeenCalled();
    expect(handleClick).not.toHaveBeenCalled();
  });
});
