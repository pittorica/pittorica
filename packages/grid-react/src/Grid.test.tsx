/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Grid } from './Grid';

describe('Grid', () => {
  it('should render as a div with default grid class', () => {
    const { container } = render(<Grid>Content</Grid>);
    const element = container.firstChild as HTMLElement;

    expect(element.classList.contains('pittorica-grid')).toBe(true);
    expect(element.tagName).toBe('DIV');
  });

  it('should support polymorphism with "as" prop', () => {
    const { container } = render(<Grid as="section">Content</Grid>);
    const element = container.firstChild as HTMLElement;

    expect(element.tagName).toBe('SECTION');
  });

  it('should transform numeric columns into repeat expression', () => {
    const { container } = render(<Grid columns={3}>Content</Grid>);
    const element = container.firstChild as HTMLElement;

    expect(element.style.gridTemplateColumns).toBe('repeat(3, minmax(0, 1fr))');
  });

  it('should allow custom string values for columns', () => {
    const customValue = '100px 1fr 200px';
    const { container } = render(<Grid columns={customValue}>Content</Grid>);
    const element = container.firstChild as HTMLElement;

    expect(element.style.gridTemplateColumns).toBe(customValue);
  });

  it('should map gap tokens correctly', () => {
    const { container } = render(
      <Grid gap="4" gapX="2">
        Content
      </Grid>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.style.gap).toBe('var(--pittorica-space-4)');
    expect(element.style.columnGap).toBe('var(--pittorica-space-2)');
  });

  it('should map semantic justify and align values', () => {
    const { container } = render(
      <Grid justify="between" align="center">
        Content
      </Grid>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.style.justifyContent).toBe('space-between');
    expect(element.style.alignItems).toBe('center');
  });

  it('should apply grid-auto-flow correctly', () => {
    const { container } = render(<Grid flow="column dense">Content</Grid>);
    const element = container.firstChild as HTMLElement;

    expect(element.style.gridAutoFlow).toBe('column dense');
  });
});
