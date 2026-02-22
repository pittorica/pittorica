import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

/**
 * Mock ResizeObserver for jsdom environment.
 */
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('ResizeObserver', ResizeObserver);

/**
 * Automatically unmounts React trees after each test
 * to prevent memory leaks and state pollution.
 */
afterEach(() => {
  cleanup();
});
