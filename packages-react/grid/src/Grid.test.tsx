/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

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

  it('should set initial responsive variable for numeric columns', () => {
    const { container } = render(<Grid columns={3}>Content</Grid>);
    const element = container.firstChild as HTMLElement;

    expect(
      element.style.getPropertyValue('--pittorica-grid-columns-initial')
    ).toBe('repeat(3, minmax(0, 1fr))');
    expect(element.classList.contains('pittorica-grid--columns-res')).toBe(
      true
    );
  });

  it('should allow custom string values for columns responsive object', () => {
    const { container } = render(
      <Grid columns={{ initial: '1fr', md: '100px 1fr' }}>Content</Grid>
    );
    const element = container.firstChild as HTMLElement;

    expect(
      element.style.getPropertyValue('--pittorica-grid-columns-initial')
    ).toBe('1fr');
    expect(element.style.getPropertyValue('--pittorica-grid-columns-md')).toBe(
      '100px 1fr'
    );
  });

  it('should map gap tokens to CSS variables with space tokens', () => {
    const { container } = render(
      <Grid gap="4" gapX={{ initial: '2', lg: '5' }}>
        Content
      </Grid>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.style.getPropertyValue('--pittorica-grid-gap-initial')).toBe(
      'var(--pittorica-space-4)'
    );
    expect(
      element.style.getPropertyValue('--pittorica-grid-gapX-initial')
    ).toBe('var(--pittorica-space-2)');
    expect(element.style.getPropertyValue('--pittorica-grid-gapX-lg')).toBe(
      'var(--pittorica-space-5)'
    );
  });

  it('should set responsive variables for justify and align', () => {
    const { container } = render(
      <Grid justify="between" align={{ initial: 'start', sm: 'center' }}>
        Content
      </Grid>
    );
    const element = container.firstChild as HTMLElement;

    expect(
      element.style.getPropertyValue('--pittorica-grid-justify-initial')
    ).toBe('between');
    expect(
      element.style.getPropertyValue('--pittorica-grid-align-initial')
    ).toBe('start');
    expect(element.style.getPropertyValue('--pittorica-grid-align-sm')).toBe(
      'center'
    );

    expect(element.classList.contains('pittorica-grid--justify-res')).toBe(
      true
    );
    expect(element.classList.contains('pittorica-grid--align-res')).toBe(true);
  });

  it('should apply grid-auto-flow variables correctly', () => {
    const { container } = render(<Grid flow="column dense">Content</Grid>);
    const element = container.firstChild as HTMLElement;

    expect(
      element.style.getPropertyValue('--pittorica-grid-flow-initial')
    ).toBe('column dense');
    expect(element.classList.contains('pittorica-grid--flow-res')).toBe(true);
  });
});
