/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Flex } from './Flex';

describe('Flex', () => {
  it('should map semantic justify values to CSS', () => {
    const { container } = render(<Flex justify="between">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.justifyContent).toBe('space-between');
  });

  it('should apply the gap token correctly', () => {
    const { container } = render(<Flex gap="4">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.gap).toBe('var(--pittorica-space-4)');
  });

  it('should render as a Stack (column) by default when using direction prop', () => {
    const { container } = render(<Flex direction="column">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.flexDirection).toBe('column');
  });
});
