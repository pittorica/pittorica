/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Divider } from './Divider.js';

describe('Divider', () => {
  it('renders correctly as an hr tag', () => {
    const { container } = render(<Divider />);
    expect(container.firstChild?.nodeName).toBe('HR');
  });

  it('renders children when provided', () => {
    const { getByText } = render(<Divider>OR</Divider>);
    expect(getByText('OR')).toBeTruthy();
  });

  it('applies correct variant class', () => {
    const { container } = render(<Divider variant="wave" />);
    expect(container.firstChild).toHaveClass('pittorica-divider--wave');
  });

  it('renders as div and role separator when it has children', () => {
    const { container } = render(<Divider>TEXT</Divider>);
    const element = container.firstChild as HTMLElement;
    expect(element.nodeName).toBe('DIV');
    expect(element.getAttribute('role')).toBe('separator');
  });
});
