/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from './Badge.js';

describe('Badge', () => {
  it('should render children correctly', () => {
    render(
      <Badge badgeContent={5}>
        <div data-testid="anchor">Content</div>
      </Badge>
    );
    expect(screen.getByTestId('anchor')).toBeTruthy();
    expect(screen.getByText('5')).toBeTruthy();
  });

  it('should show max+ when content exceeds max prop', () => {
    render(
      <Badge badgeContent={150} max={99}>
        <span>Anchor</span>
      </Badge>
    );
    expect(screen.getByText('99+')).toBeTruthy();
  });

  it('should render as a dot when variant is "dot"', () => {
    const { container } = render(
      <Badge variant="dot" badgeContent={5}>
        <span>Anchor</span>
      </Badge>
    );
    const badge = container.querySelector('.pittorica-badge--dot');
    expect(badge).toBeTruthy();
    // In dot mode, the content should not be rendered
    expect(screen.queryByText('5')).toBeNull();
  });

  it('should be hidden when invisible prop is true', () => {
    render(
      <Badge invisible badgeContent={5}>
        <span>Anchor</span>
      </Badge>
    );
    expect(screen.queryByText('5')).toBeNull();
  });

  it('should apply semantic colors correctly', () => {
    const { container } = render(
      <Badge color="red" badgeContent={1}>
        <span>Anchor</span>
      </Badge>
    );
    const badge = container.querySelector('.pittorica-badge') as HTMLElement;
    expect(badge).toHaveStyle({ backgroundColor: 'var(--pittorica-red-9)' });
  });
});
