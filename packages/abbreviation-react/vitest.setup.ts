import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Automatically unmount React trees after each test to prevent memory leaks
// and ensure a clean DOM for the next test.
afterEach(() => {
  cleanup();
});
