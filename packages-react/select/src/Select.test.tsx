/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Select } from './Select.js';

describe('Select', () => {
  it('links label and select correctly via generated IDs', () => {
    render(
      <Select.Root label="Language" name="lang">
        <Select.Content>
          <option value="en">English</option>
        </Select.Content>
      </Select.Root>
    );
    const label = screen.getByText('Language');
    const select = screen.getByRole('combobox');
    expect(label).toHaveAttribute('for', select.id);
  });

  it('applies the correct size class', () => {
    const { container } = render(
      <Select.Root size="lg">
        <Select.Content>
          <option>1</option>
        </Select.Content>
      </Select.Root>
    );
    expect(container.firstChild).toHaveClass('pittorica-select--lg');
  });

  it('is disabled when the Root disabled prop is true', () => {
    render(
      <Select.Root disabled>
        <Select.Content>
          <option>1</option>
        </Select.Content>
      </Select.Root>
    );
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('applies aria-required attribute when the Root required prop is true', () => {
    render(
      <Select.Root required>
        <Select.Content>
          <option>1</option>
        </Select.Content>
      </Select.Root>
    );
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-required', 'true');
  });

  it('sets the default color prop to source', () => {
    const { container } = render(
      <Select.Root>
        <Select.Content>
          <option>1</option>
        </Select.Content>
      </Select.Root>
    );
    // The color is applied to the wrapper div, not the select element itself
    const wrapper = container.querySelector('.pittorica-select-wrapper');
    expect(wrapper).toHaveStyle({
      '--pittorica-source-color': 'var(--pittorica-source-9)',
    });
  });
});
