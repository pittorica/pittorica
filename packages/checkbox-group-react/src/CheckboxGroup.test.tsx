/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { CheckboxGroup } from './CheckboxGroup';

describe('CheckboxGroup', () => {
  it('manages multiple selection correctly', () => {
    const handleChange = vi.fn();
    render(
      <CheckboxGroup onValueChange={handleChange}>
        <CheckboxGroup.Item value="1" label="One" />
        <CheckboxGroup.Item value="2" label="Two" />
      </CheckboxGroup>
    );

    fireEvent.click(screen.getByLabelText('One'));
    expect(handleChange).toHaveBeenCalledWith(['1']);

    fireEvent.click(screen.getByLabelText('Two'));
    expect(handleChange).toHaveBeenCalledWith(['1', '2']);
  });

  it('inherits color and disabled state from root', () => {
    render(
      <CheckboxGroup color="red" disabled>
        <CheckboxGroup.Item value="1" label="Item" />
      </CheckboxGroup>
    );
    const input = screen.getByLabelText('Item');
    expect(input).toBeDisabled();
  });
});
