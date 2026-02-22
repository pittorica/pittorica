import { createContext, type ElementType, use, useMemo, useState } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { Checkbox, type CheckboxProps } from '@pittorica/checkbox-react';
import type { PittoricaColor } from '@pittorica/text-react';

interface CheckboxGroupContextValue {
  value: string[];
  onItemChange: (val: string) => void;
  color?: PittoricaColor;
  disabled?: boolean;
  name?: string;
  required?: boolean;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(
  null
);

/* --- Root --- */

/**
 * Fix TS2314: Use 'type' for intersection with polymorphic BoxProps<E>.
 */
export type CheckboxGroupRootProps<E extends ElementType = 'div'> = Omit<
  BoxProps<E>,
  'onChange' | 'value' | 'defaultValue'
> & {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  orientation?: 'horizontal' | 'vertical';
  color?: PittoricaColor;
  disabled?: boolean;
  name?: string;
  required?: boolean;
};

const CheckboxGroupRoot = <E extends ElementType = 'div'>({
  value: controlledValue,
  defaultValue = [],
  onValueChange,
  orientation = 'vertical',
  color,
  disabled,
  name,
  required,
  children,
  className,
  as,
  ...props
}: CheckboxGroupRootProps<E>) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleItemChange = (itemValue: string) => {
    const nextValue = currentValue.includes(itemValue)
      ? currentValue.filter((v) => v !== itemValue)
      : [...currentValue, itemValue];

    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onValueChange?.(nextValue);
  };

  const contextValue = useMemo(
    () => ({
      value: currentValue,
      onItemChange: handleItemChange,
      color,
      disabled,
      name,
      required,
    }),
    [currentValue, color, disabled, name, required]
  );

  const Tag = as || 'div';

  return (
    <CheckboxGroupContext value={contextValue}>
      <Box
        as={Tag as ElementType}
        className={clsx('pittorica-checkbox-group-root', className)}
        data-orientation={orientation}
        role="group"
        {...(props as BoxProps<E>)}
      >
        {children}
      </Box>
    </CheckboxGroupContext>
  );
};

/* --- Item --- */

/**
 * Fix TS2314: Extend CheckboxProps with generic E.
 */
export type CheckboxGroupItemProps<E extends ElementType = 'label'> = Omit<
  CheckboxProps<E>,
  'value'
> & {
  value: string;
};

const CheckboxGroupItem = <E extends ElementType = 'label'>({
  value,
  as,
  ...props
}: CheckboxGroupItemProps<E>) => {
  const context = use(CheckboxGroupContext);

  if (!context) {
    throw new Error(
      'CheckboxGroup.Item must be used within CheckboxGroup.Root'
    );
  }

  const Tag = as || 'label';

  return (
    <Checkbox
      as={Tag as ElementType}
      {...(props as CheckboxProps<E>)}
      name={context.name}
      value={value}
      checked={context.value.includes(value)}
      onChange={() => context.onItemChange(value)}
      color={props.color || context.color}
      disabled={props.disabled || context.disabled}
      required={props.required || context.required}
    />
  );
};

export const CheckboxGroup = Object.assign(CheckboxGroupRoot, {
  Root: CheckboxGroupRoot,
  Item: CheckboxGroupItem,
  displayName: 'CheckboxGroup',
});

CheckboxGroupItem.displayName = 'CheckboxGroup.Item';
