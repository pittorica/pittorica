/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Code } from './Code';

describe('Code', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Code>Test Code</Code>);
    expect(getByText('Test Code')).toBeInTheDocument();
  });

  it('should apply custom class name', () => {
    const { container } = render(
      <Code className="custom-class">Test Code</Code>
    );
    expect(container.firstChild as HTMLElement).toHaveClass('custom-class');
  });

  it('should apply custom data attribute', () => {
    const { container } = render(<Code data-testid="code">Test Code</Code>);
    expect(container.firstChild as HTMLElement).toHaveAttribute(
      'data-testid',
      'code'
    );
  });
});
