import { createContext, use, useState } from 'react';

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
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(
  null
);

export interface CheckboxGroupRootProps extends Omit<BoxProps, 'onChange'> {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  orientation?: 'horizontal' | 'vertical';
  color?: PittoricaColor;
  disabled?: boolean;
  name?: string;
}

const CheckboxGroupRoot = ({
  value: controlledValue,
  defaultValue = [],
  onValueChange,
  orientation = 'vertical',
  color,
  disabled,
  name,
  children,
  className,
  ...props
}: CheckboxGroupRootProps) => {
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

  return (
    <CheckboxGroupContext
      value={{
        value: currentValue,
        onItemChange: handleItemChange,
        color,
        disabled,
        name,
      }}
    >
      <Box
        className={clsx('pittorica-checkbox-group-root', className)}
        data-orientation={orientation}
        role="group"
        {...props}
      >
        {children}
      </Box>
    </CheckboxGroupContext>
  );
};

export interface CheckboxGroupItemProps extends Omit<CheckboxProps, 'value'> {
  value: string;
}

const CheckboxGroupItem = ({ value, ...props }: CheckboxGroupItemProps) => {
  const context = use(CheckboxGroupContext);

  if (!context) {
    throw new Error(
      'CheckboxGroup.Item must be used within CheckboxGroup.Root'
    );
  }

  return (
    <Checkbox
      {...props}
      name={context.name}
      value={value}
      checked={context.value.includes(value)}
      onChange={() => context.onItemChange(value)}
      color={props.color || context.color}
      disabled={props.disabled || context.disabled}
    />
  );
};

export const CheckboxGroup = Object.assign(CheckboxGroupRoot, {
  Item: CheckboxGroupItem,
});
