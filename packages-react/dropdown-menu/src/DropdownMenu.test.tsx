/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { DropdownMenu, DropdownMenuItem } from './DropdownMenu.js';

// Mock ResizeObserver for JSDOM
beforeEach(() => {
  globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
});

describe('DropdownMenu', () => {
  it('opens on trigger click and closes on item selection', async () => {
    render(
      <DropdownMenu
        itemCount={1}
        renderTrigger={({ ref, onClick }) => (
          <button
            ref={ref as React.RefObject<HTMLButtonElement>}
            onClick={onClick}
          >
            Open Menu
          </button>
        )}
      >
        <DropdownMenuItem index={0}>Action 1</DropdownMenuItem>
      </DropdownMenu>
    );

    const trigger = screen.getByText('Open Menu');
    fireEvent.click(trigger);

    const item = await screen.findByText('Action 1');
    expect(item).toBeInTheDocument();

    fireEvent.click(item);
    await waitFor(() => {
      expect(screen.queryByText('Action 1')).not.toBeInTheDocument();
    });
  });

  it('closes when clicking outside', async () => {
    render(
      <div data-testid="outside">
        <DropdownMenu
          itemCount={1}
          renderTrigger={({ ref, onClick }) => (
            <button
              ref={ref as React.RefObject<HTMLButtonElement>}
              onClick={onClick}
            >
              Trigger
            </button>
          )}
        >
          <DropdownMenuItem index={0}>Item</DropdownMenuItem>
        </DropdownMenu>
      </div>
    );

    fireEvent.click(screen.getByText('Trigger'));
    expect(await screen.findByText('Item')).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId('outside'));

    await waitFor(() => {
      expect(screen.queryByText('Item')).not.toBeInTheDocument();
    });
  });
});
