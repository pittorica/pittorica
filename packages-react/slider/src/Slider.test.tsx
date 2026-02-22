/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen, vi } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { Slider } from './Slider.js';

describe('Slider', () => {
  const OriginalPointerEvent = globalThis.PointerEvent;

  beforeEach(() => {
    // Mocking getBoundingClientRect for consistent testing
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      width: 100,
      height: 20,
      top: 0,
      left: 0,
      bottom: 20,
      right: 100,
      x: 0,
      y: 0,
      toJSON: () => {},
    });

    // Mock PointerEvent to ensure clientX is available
    const BasePointerEvent = OriginalPointerEvent || globalThis.Event;
    globalThis.PointerEvent = class extends BasePointerEvent {
      constructor(type: string, props: PointerEventInit = {}) {
        super(type, props);
        if (props.clientX !== undefined) {
          Object.defineProperty(this, 'clientX', { value: props.clientX });
        }
      }
    } as unknown as typeof PointerEvent;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    globalThis.PointerEvent = OriginalPointerEvent;
  });

  it('updates value correctly on click', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} onValueChange={handleChange} />);

    const sliderRoot = screen.getByRole('slider').parentElement as HTMLElement;

    fireEvent.pointerDown(sliderRoot, {
      clientX: 50,
      pointerId: 1,
      buttons: 1,
    });

    expect(handleChange).toHaveBeenCalledWith(50);
  });

  it('respects the step prop', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} step={20} onValueChange={handleChange} />);

    const sliderRoot = screen.getByRole('slider').parentElement as HTMLElement;

    fireEvent.pointerDown(sliderRoot, { clientX: 35 });

    expect(handleChange).toHaveBeenCalledWith(40);
  });

  it('clamps value between min and max', () => {
    const handleChange = vi.fn();
    render(<Slider min={10} max={50} onValueChange={handleChange} />);

    const sliderRoot = screen.getByRole('slider').parentElement as HTMLElement;

    fireEvent.pointerDown(sliderRoot, { clientX: 150 });
    expect(handleChange).toHaveBeenCalledWith(50);

    fireEvent.pointerDown(sliderRoot, { clientX: -50 });
    expect(handleChange).toHaveBeenCalledWith(10);
  });

  it('applies aria-required attribute when required prop is true', () => {
    render(<Slider required />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-required', 'true');
  });

  it('sets the default color prop to source', () => {
    render(<Slider />); // Default color is 'source'
    const slider = screen.getByRole('slider');
    // The color is applied to the root element, not the slider thumb directly
    // Need to check the root element's style
    const rootElement = slider.parentElement as HTMLElement;
    expect(rootElement).toHaveStyle({
      '--pittorica-source-color': 'var(--pittorica-source-9)',
    });
  });
});
