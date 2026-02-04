/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import type { ComponentProps, ElementType } from 'react';

import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Heading } from './Heading';

// Mock Text to isolate Heading tests and verify prop passing.
// Note: Text no longer handles 'size' via prop but via className in our new architecture.
vi.mock('@pittorica/text-react', () => ({
  Text: ({
    as: Component = 'span',
    color,
    className,
    ...props
  }: ComponentProps<'span'> & {
    as?: ElementType;
    color?: string;
  }) => <Component className={className} data-test-color={color} {...props} />,
}));

describe('Heading', () => {
  it('should render as an h1 by default', () => {
    const { container } = render(<Heading>Title</Heading>);
    const element = container.firstChild as HTMLElement;
    expect(element.tagName).toBe('H1');
    expect(element.classList.contains('pittorica-heading')).toBe(true);
  });

  it('should apply default size class "6"', () => {
    const { container } = render(<Heading>Title</Heading>);
    const element = container.firstChild as HTMLElement;

    // According to our implementation, default size is '6'
    expect(element.classList.contains('pittorica-heading--size-6')).toBe(true);
  });

  it('should allow manual size override with a string', () => {
    const { container } = render(
      <Heading as="h1" size="3">
        Small H1
      </Heading>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('pittorica-heading--size-3')).toBe(true);
  });

  it('should support responsive size objects', () => {
    const { container } = render(
      <Heading size={{ initial: '4', sm: '7', lg: '9' }}>
        Responsive Title
      </Heading>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.classList.contains('pittorica-heading--size-4')).toBe(true);
    expect(element.classList.contains('pittorica-heading--sm-size-7')).toBe(
      true
    );
    expect(element.classList.contains('pittorica-heading--lg-size-9')).toBe(
      true
    );
  });

  it('should render as a different tag when using the "as" prop', () => {
    const { container } = render(<Heading as="h3">H3 Title</Heading>);
    const element = container.firstChild as HTMLElement;
    expect(element.tagName).toBe('H3');
  });

  it('should correctly pass through color and other props to Text', () => {
    const { container } = render(
      <Heading color="indigo">Indigo Heading</Heading>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.dataset.testColor).toBe('indigo');
  });

  it('should merge custom classNames', () => {
    const { container } = render(
      <Heading className="custom-heading">Title</Heading>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('pittorica-heading')).toBe(true);
    expect(element.classList.contains('custom-heading')).toBe(true);
  });
});
