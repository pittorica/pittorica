/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Select } from './Select.js';

describe('Select', () => {
  it('links label and select correctly via IDs', () => {
    render(
      <Select.Root label="Language">
        <Select.Content>
          <option value="en">English</option>
        </Select.Content>
      </Select.Root>
    );

    const label = screen.getByText('Language');
    const select = screen.getByRole('combobox');

    expect(label).toHaveAttribute('for', select.id);
  });

  it('renders the default chevron icon', () => {
    const { container } = render(
      <Select.Root>
        <Select.Content>
          <option value="1">Option 1</option>
        </Select.Content>
      </Select.Root>
    );

    const chevron = container.querySelector('.pittorica-select-chevron');
    expect(chevron).toBeInTheDocument();
    expect(chevron?.querySelector('svg')).toBeInTheDocument();
  });

  it('updates value when a new option is selected', () => {
    render(
      <Select.Root>
        <Select.Content defaultValue="a">
          <option value="a">A</option>
          <option value="b">B</option>
        </Select.Content>
      </Select.Root>
    );

    const select = screen.getByRole('combobox') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: 'b' } });

    expect(select.value).toBe('b');
  });

  it('associates helper text with aria-describedby', () => {
    render(
      <Select.Root helperText="Pick one">
        <Select.Content>
          <option value="1">1</option>
        </Select.Content>
      </Select.Root>
    );

    const select = screen.getByRole('combobox');
    const helper = screen.getByText('Pick one');

    expect(select).toHaveAttribute('aria-describedby', helper.id);
  });

  it('is disabled when the Root disabled prop is true', () => {
    render(
      <Select.Root disabled>
        <Select.Content>
          <option value="1">1</option>
        </Select.Content>
      </Select.Root>
    );

    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});
