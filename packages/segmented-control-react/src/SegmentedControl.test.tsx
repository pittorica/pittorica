/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { SegmentedControl } from './SegmentedControl.js';

describe('SegmentedControl', () => {
  it('changes value on item click', () => {
    const onChange = vi.fn();
    render(
      <SegmentedControl.Root onValueChange={onChange} defaultValue="1">
        <SegmentedControl.Item value="1">One</SegmentedControl.Item>
        <SegmentedControl.Item value="2">Two</SegmentedControl.Item>
      </SegmentedControl.Root>
    );

    fireEvent.click(screen.getByText('Two'));
    expect(onChange).toHaveBeenCalledWith('2');
    expect(screen.getByText('Two')).toHaveAttribute('data-state', 'checked');
  });
});
