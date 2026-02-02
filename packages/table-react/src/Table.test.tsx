/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Table } from './Table.js';

describe('Table', () => {
  it('renders with correct semantic structure', () => {
    const { container } = render(
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Danilo</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    );

    expect(container.querySelector('table')).toBeInTheDocument();
    expect(container.querySelector('thead')).toBeInTheDocument();
    expect(container.querySelector('tbody')).toBeInTheDocument();
    expect(container.querySelector('tr')).toBeInTheDocument();
    expect(screen.getByRole('columnheader')).toHaveTextContent('Name');
    expect(screen.getByRole('cell')).toHaveTextContent('Danilo');
  });

  it('applies alignment data attributes', () => {
    render(
      <Table.Root>
        <Table.Body>
          <Table.Row>
            <Table.Cell align="right" data-testid="cell-right">
              Data
            </Table.Cell>
            <Table.Cell align="center" data-testid="cell-center">
              Data
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    );

    expect(screen.getByTestId('cell-right')).toHaveAttribute(
      'data-align',
      'right'
    );
    expect(screen.getByTestId('cell-center')).toHaveAttribute(
      'data-align',
      'center'
    );
  });

  it('renders inside a container for sticky behavior', () => {
    const { container } = render(
      <Table.Container data-testid="table-container">
        <Table.Root>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Content</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Table.Container>
    );

    const tableContainer = screen.getByTestId('table-container');
    expect(tableContainer).toHaveClass('pittorica-table-container');
    expect(tableContainer).toContainElement(container.querySelector('table')!);
  });

  it('forwards ref to the table element', () => {
    let capturedRef: HTMLTableElement | null = null;

    render(
      <Table.Root
        ref={(el: HTMLTableElement | null) => {
          capturedRef = el;
        }}
      >
        <Table.Body>
          <Table.Row>
            <Table.Cell>Ref Test</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    );

    expect(capturedRef).not.toBeNull();
    expect((capturedRef as unknown as HTMLElement).tagName).toBe('TABLE');
  });
});
