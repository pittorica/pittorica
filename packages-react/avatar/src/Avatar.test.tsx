/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  const originalImage = globalThis.Image;

  beforeAll(() => {
    // @ts-expect-error: Mocking Image for testing
    globalThis.Image = class {
      listeners: Record<string, () => void> = {};

      addEventListener(event: string, cb: () => void) {
        this.listeners[event] = cb;
      }

      removeEventListener(event: string, cb: () => void) {
        if (this.listeners[event] === cb) {
          delete this.listeners[event];
        }
      }

      set src(url: string) {
        setTimeout(() => {
          if (url === 'error') {
            this.listeners['error']?.();
          } else {
            this.listeners['load']?.();
          }
        }, 10);
      }
    };
  });

  afterAll(() => {
    globalThis.Image = originalImage;
  });

  it('renders fallback initially or when src is missing', () => {
    render(<Avatar alt="John Doe" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders image when src loads successfully', async () => {
    render(<Avatar src="valid-image.jpg" alt="User Avatar" />);

    const img = await screen.findByRole('img');
    expect(img).toHaveAttribute('src', 'valid-image.jpg');
    expect(img).toHaveAttribute('alt', 'User Avatar');
  });

  it('renders fallback when image fails to load', async () => {
    render(<Avatar src="error" alt="John Doe" />);

    const fallback = await screen.findByText('J');
    expect(fallback).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders custom fallback', () => {
    render(<Avatar fallback={<span>Icon</span>} />);
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('applies size styles correctly', () => {
    const { container } = render(<Avatar size="5" />);
    const box = container.firstChild as HTMLElement;
    expect(box.style.width).toBe('64px');
    expect(box.style.height).toBe('64px');
  });

  it('applies radius styles correctly', () => {
    const { container } = render(<Avatar radius="medium" />);
    const box = container.firstChild as HTMLElement;
    expect(box.style.borderRadius).toBe('var(--pittorica-radius-medium)');
  });

  it('calculates font size based on size', () => {
    const { container } = render(<Avatar size="4" />); // 48px
    const box = container.firstChild as HTMLElement;
    expect(box.style.fontSize).toBe('calc(48px / 2.5)');
  });
});
