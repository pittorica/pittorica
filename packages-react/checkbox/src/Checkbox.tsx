import React, { type ElementType } from 'react';

import { clsx } from 'clsx';

import { IconSquare, IconSquareCheckFilled } from '@tabler/icons-react';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';
import { Text } from '@pittorica/text-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type CheckboxProps<E extends ElementType = 'label'> = Omit<
  BoxProps<E>,
  'onChange'
> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  color?: PittoricaColor;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  /**
   * If true, the checkbox is required.
   * @default false
   */
  required?: boolean;
};

/**
 * Checkbox component with custom styling and native input support.
 * Fully polymorphic and agnostic foundation.
 */
export const Checkbox = <E extends ElementType = 'label'>({
  checked: controlledChecked,
  defaultChecked,
  onChange,
  color = 'source',
  disabled = false,
  label,
  name,
  value,
  className,
  style,
  required = false,
  as,
  ...props
}: CheckboxProps<E>) => {
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

  const Tag = as || 'label';

  return (
    <Box
      as={Tag as ElementType}
      className={clsx('pittorica-checkbox-root', className)}
      data-disabled={disabled}
      style={
        { '--_checkbox-color': resolvedColor, ...style } as React.CSSProperties
      }
      {...(props as BoxProps<E>)}
    >
      <input
        type="checkbox"
        className="pittorica-checkbox-input"
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        required={required} // Apply required to the native input
        onChange={handleChange}
      />

      <div className="pittorica-checkbox-control" aria-hidden="true">
        {isChecked ? (
          <IconSquareCheckFilled size={20} />
        ) : (
          <IconSquare size={20} stroke={1.5} />
        )}
      </div>

      {label && (
        <Text weight="medium" style={{ color: 'inherit' }}>
          {label} {required && <span aria-hidden="true">*</span>}
        </Text>
      )}
    </Box>
  );
};

Checkbox.displayName = 'Checkbox';
