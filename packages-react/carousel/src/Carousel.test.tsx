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

  it('assigns specific percentage styles based on visual position', () => {
    const { container } = render(
      <Carousel.Root>
        <Carousel.Item>First</Carousel.Item>
        <Carousel.Item>Second</Carousel.Item>
        <Carousel.Item>Third</Carousel.Item>
      </Carousel.Root>
    );

    const items = container.querySelectorAll('.pittorica-carousel-item');

    // First item should take 60%
    expect(items[0]).toHaveStyle({ width: '60%', flex: '0 0 60%' });

    // Second item should take 25%
    expect(items[1]).toHaveStyle({ width: '25%', flex: '0 0 25%' });

    // Third item should take 15%
    expect(items[2]).toHaveStyle({ width: '15%', flex: '0 0 15%' });
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
