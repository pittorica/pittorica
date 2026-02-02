/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import React from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { HoverCard } from './HoverCard.js';

describe('HoverCard', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('opens after the specified delay on mouse enter', async () => {
    render(
      <HoverCard
        openDelay={500}
        renderTrigger={({ ref }) => (
          <span ref={ref as React.RefObject<HTMLSpanElement>}>Trigger</span>
        )}
      >
        <div data-testid="content">Hover Content</div>
      </HoverCard>
    );

    fireEvent.mouseEnter(screen.getByText('Trigger'));
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('closes after the specified delay on mouse leave', async () => {
    render(
      <HoverCard
        openDelay={0}
        closeDelay={300}
        renderTrigger={({ ref }) => (
          <span ref={ref as React.RefObject<HTMLSpanElement>}>Trigger</span>
        )}
      >
        <div data-testid="content">Hover Content</div>
      </HoverCard>
    );

    fireEvent.mouseEnter(screen.getByText('Trigger'));

    // Fix: Even with 0ms, we must flush the microtask/timer queue
    act(() => {
      vi.runAllTimers();
    });

    expect(screen.getByTestId('content')).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByText('Trigger'));
    expect(screen.getByTestId('content')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
  });

  it('stays open when moving mouse from trigger to content', async () => {
    render(
      <HoverCard
        openDelay={0}
        closeDelay={300}
        renderTrigger={({ ref }) => (
          <span ref={ref as React.RefObject<HTMLSpanElement>}>Trigger</span>
        )}
      >
        <div data-testid="content">Hover Content</div>
      </HoverCard>
    );

    fireEvent.mouseEnter(screen.getByText('Trigger'));

    // Fix: Flush the open timer
    act(() => {
      vi.runAllTimers();
    });

    const content = screen.getByTestId('content');

    fireEvent.mouseLeave(screen.getByText('Trigger'));
    fireEvent.mouseEnter(content);

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});
