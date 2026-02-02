/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { CheckboxCard } from './CheckboxCard';

describe('CheckboxCard', () => {
  it('selects items on click', () => {
    const handleChange = vi.fn();
    render(
      <CheckboxCard onValueChange={handleChange}>
        <CheckboxCard.Item value="a">Option A</CheckboxCard.Item>
        <CheckboxCard.Item value="b">Option B</CheckboxCard.Item>
      </CheckboxCard>
    );

    fireEvent.click(screen.getByText('Option A'));
    expect(handleChange).toHaveBeenCalledWith(['a']);
  });

  it('reflects checked state in data-attribute', () => {
    render(
      <CheckboxCard defaultValue={['a']}>
        <CheckboxCard.Item value="a">Option A</CheckboxCard.Item>
      </CheckboxCard>
    );
    expect(
      screen.getByText('Option A').closest('.pittorica-checkbox-card-item')
    ).toHaveAttribute('data-state', 'checked');
  });
});
