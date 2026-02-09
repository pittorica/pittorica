import React from 'react';

import { clsx } from 'clsx';

import { IconSquare, IconSquareCheckFilled } from '@tabler/icons-react';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';
import { Text } from '@pittorica/text-react';

export interface CheckboxProps extends Omit<BoxProps, 'onChange'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  color?: PittoricaColor;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
}

/**
 * Checkbox component with custom styling and native input support.
 */
export const Checkbox = ({
  checked: controlledChecked,
  defaultChecked,
  onChange,
  color = 'indigo',
  disabled = false,
  label,
  name,
  value,
  className,
  style,
  ...props
}: CheckboxProps) => {
  const [internalChecked, setInternalChecked] = React.useState(
    defaultChecked ?? false
  );
  const isChecked =
    controlledChecked === undefined ? internalChecked : controlledChecked;

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const newChecked = e.target.checked;
    setInternalChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <Box
      as="label"
      className={clsx('pittorica-checkbox-root', className)}
      data-disabled={disabled}
      style={
        { '--_checkbox-color': resolvedColor, ...style } as React.CSSProperties
      }
    >
      <input
        type="checkbox"
        className="pittorica-checkbox-input"
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />

      <div className="pittorica-checkbox-control">
        {isChecked ? (
          <IconSquareCheckFilled size={20} />
        ) : (
          <IconSquare size={20} stroke={1.5} />
        )}
      </div>

      {label && (
        <Text weight="medium" style={{ color: 'inherit' }}>
          {label}
        </Text>
      )}
    </Box>
  );
};
