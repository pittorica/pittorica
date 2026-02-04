/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import type { ComponentProps, ElementType } from 'react';

import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Text } from './Text';

// Mock Box to bypass JSDOM style parsing limitations for custom variables/logic
vi.mock('@pittorica/box-react', () => ({
  Box: ({
    as: Component = 'div',
    style,
    className,
    ...props
  }: ComponentProps<'div'> & { as?: ElementType }) => (
    <Component
      className={className}
      style={style}
      data-test-style={JSON.stringify(style)}
      {...props}
    />
  ),
}));

describe('Text', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Text>Content</Text>);
    expect(getByText('Content')).toBeTruthy();
  });

  it('should render as a span by default', () => {
    const { container } = render(<Text>Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.tagName).toBe('SPAN');
  });

  it('should apply base class', () => {
    const { container } = render(<Text>Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('pittorica-text')).toBe(true);
  });

  describe('Responsive Size', () => {
    it('should apply initial size class when size is a string', () => {
      const { container } = render(<Text size="4">Content</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element.classList.contains('pittorica-text--size-4')).toBe(true);
    });

    it('should apply multiple responsive classes when size is an object', () => {
      const { container } = render(
        <Text size={{ initial: '2', md: '5', lg: '8' }}>Content</Text>
      );
      const element = container.firstChild as HTMLElement;

      expect(element.classList.contains('pittorica-text--size-2')).toBe(true);
      expect(element.classList.contains('pittorica-text--md-size-5')).toBe(
        true
      );
      expect(element.classList.contains('pittorica-text--lg-size-8')).toBe(
        true
      );
    });

    it('should use default size "3" if size prop is not provided', () => {
      const { container } = render(<Text>Content</Text>);
      const element = container.firstChild as HTMLElement;
      expect(element.classList.contains('pittorica-text--size-3')).toBe(true);
    });
  });

  it('should apply data-weight attribute for CSS styling', () => {
    const { container } = render(<Text weight="bold">Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.dataset.weight).toBe('bold');
  });

  it('should apply text-align style based on align prop', () => {
    const { container } = render(<Text align="center">Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.textAlign).toBe('center');
  });

  it('should apply truncate class when truncate prop is true', () => {
    const { container } = render(<Text truncate>Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('pittorica-text--truncate')).toBe(true);
  });

  describe('Color prop', () => {
    it('should apply semantic color tokens correctly', () => {
      const { container } = render(<Text color="crimson">Content</Text>);
      const element = container.firstChild as HTMLElement;

      const styles = JSON.parse(element.dataset.testStyle || '{}');
      expect(styles.color).toBe('var(--pittorica-crimson-9)');
    });

    it('should apply custom HEX colors', () => {
      const hex = '#00ff00';
      const { container } = render(<Text color={hex}>Content</Text>);
      const element = container.firstChild as HTMLElement;

      const styles = JSON.parse(element.dataset.testStyle || '{}');
      expect(styles.color).toBe(hex);
    });

    it('should support "inherit"', () => {
      const { container } = render(<Text color="inherit">Content</Text>);
      const element = container.firstChild as HTMLElement;

      const styles = JSON.parse(element.dataset.testStyle || '{}');
      expect(styles.color).toBe('inherit');
    });
  });

  it('should merge custom className and styles', () => {
    const { container } = render(
      <Text className="my-class" style={{ zIndex: 10 }}>
        Content
      </Text>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.classList.contains('pittorica-text')).toBe(true);
    expect(element.classList.contains('my-class')).toBe(true);
    expect(element.style.zIndex).toBe('10');
  });

  it('should pass accessibility and link props correctly', () => {
    const { container } = render(
      <Text as="a" href="https://example.com" target="_blank">
        Link
      </Text>
    );
    const element = container.firstChild as HTMLAnchorElement;

    expect(element.tagName).toBe('A');
    expect(element.href).toBe('https://example.com/');
    expect(element.target).toBe('_blank');
  });
});
