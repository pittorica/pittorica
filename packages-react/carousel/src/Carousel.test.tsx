/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Carousel } from './Carousel.js';

describe('Carousel', () => {
  it('renders primary items and handles visibility limits', () => {
    render(
      <Carousel.Root>
        <Carousel.Item>Item 1</Carousel.Item>
        <Carousel.Item>Item 2</Carousel.Item>
        <Carousel.Item>Item 3</Carousel.Item>
        <Carousel.Item>Item 4</Carousel.Item>
      </Carousel.Root>
    );

    // Items 1, 2, 3 should be visible based on 60/25/15 logic
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();

    // Item 4 should not be rendered as visualIndex > 2
    expect(screen.queryByText('Item 4')).not.toBeInTheDocument();
  });

  it('applies correct structural classes to viewport and items', () => {
    const { container } = render(
      <Carousel.Root>
        <Carousel.Item>Item</Carousel.Item>
      </Carousel.Root>
    );

    const viewport = container.querySelector('.pittorica-carousel-viewport');
    const item = container.querySelector('.pittorica-carousel-item');

    expect(viewport).toBeInTheDocument();
    expect(item).toBeInTheDocument();
  });

  it('assigns specific visual positions to items', () => {
    const { container } = render(
      <Carousel.Root>
        <Carousel.Item>First</Carousel.Item>
        <Carousel.Item>Second</Carousel.Item>
        <Carousel.Item>Third</Carousel.Item>
      </Carousel.Root>
    );

    const items = container.querySelectorAll('.pittorica-carousel-item');

    // First item should have visual index 0
    expect(items[0]).toHaveAttribute('data-visual-index', '0');

    // Second item should have visual index 1
    expect(items[1]).toHaveAttribute('data-visual-index', '1');

    // Third item should have visual index 2
    expect(items[2]).toHaveAttribute('data-visual-index', '2');
  });

  it('renders description with correct typography', () => {
    render(
      <Carousel.Root>
        <Carousel.Item>
          <Carousel.Description>Photo Description</Carousel.Description>
        </Carousel.Item>
      </Carousel.Root>
    );

    const description = screen.getByText('Photo Description');
    expect(description).toBeInTheDocument();
    expect(
      description.closest('.pittorica-carousel-description')
    ).toBeInTheDocument();
  });
});
