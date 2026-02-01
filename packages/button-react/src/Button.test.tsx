/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './Button.js';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeDefined();
  });

  it('renders as an anchor when href is provided', () => {
    render(<Button href="https://google.com">Link Button</Button>);
    const link = screen.getByRole('link', { name: /link button/i });
    expect(link.getAttribute('href')).toBe('https://google.com');
    expect(link.tagName).toBe('A');
  });

  it('applies the correct variant class', () => {
    const { container } = render(<Button variant="outlined">Outlined</Button>);
    expect(container.firstChild).toHaveClass('pittorica-button--outlined');
  });

  it('is disabled when the disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('spreads additional box props like margin', () => {
    const { container } = render(<Button mt="4">Button</Button>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.marginTop).toBe('var(--pittorica-space-4)');
  });
});
