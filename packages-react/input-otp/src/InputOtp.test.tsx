/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { InputOTP } from './InputOtp';

describe('InputOTP', () => {
  it('renders the correct number of slots', () => {
    render(
      <InputOTP maxLength={4}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
        </InputOTP.Group>
      </InputOTP>
    );

    const slots = screen.getAllByRole('textbox', { hidden: true });
    // input-otp renders one hidden input
    expect(slots.length).toBe(1);

    // Check if we see 4 visual slots (using class name or data-active)
    const visualSlots = document.querySelectorAll('.pittorica-input-otp-slot');
    expect(visualSlots.length).toBe(4);
  });

  it('applies active state to the first slot initially when focused', () => {
    render(
      <InputOTP maxLength={2} autoFocus>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
        </InputOTP.Group>
      </InputOTP>
    );

    const slots = document.querySelectorAll('.pittorica-input-otp-slot');
    expect(slots[0]).toHaveAttribute('data-active', 'true');
    expect(slots[1]).toHaveAttribute('data-active', 'false');
  });
});
