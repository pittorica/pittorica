/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DataList } from './DataList';

describe('DataList', () => {
  it('renders correctly with label and value', () => {
    render(
      <DataList>
        <DataList.Item>
          <DataList.Label>Status</DataList.Label>
          <DataList.Value>Active</DataList.Value>
        </DataList.Item>
      </DataList>
    );
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('applies orientation class', () => {
    const { container } = render(<DataList orientation="vertical" />);
    expect(container.firstChild).toHaveClass(
      'pittorica-data-list-root--orientation-vertical'
    );
  });
});
