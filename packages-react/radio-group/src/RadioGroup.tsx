import {
  createContext,
  type ElementType,
  type ReactNode,
  use,
  useMemo,
  useState,
} from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { Radio, type RadioProps } from '@pittorica/radio-react';
import type { PittoricaColor } from '@pittorica/text-react';

interface RadioGroupContextType {
  value?: string;
  onValueChange: (value: string) => void;
  color: PittoricaColor;
  disabled?: boolean;
  name?: string;
  required?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextType | null>(null);

const useRadioGroupContext = () => {
  const context = use(RadioGroupContext);
  if (!context)
    throw new Error('RadioGroup components must be wrapped in <RadioGroup />');
  return context;
};

/* --- Root --- */

/**
 * Fix TS2314: Use 'type' for intersection with polymorphic BoxProps<E>.
 */
export type RadioGroupRootProps<E extends ElementType = 'div'> = BoxProps<E> & {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** @default 'indigo' */
  color?: PittoricaColor;
  disabled?: boolean;
  name?: string;
  required?: boolean;
};

/**
 * RadioGroup orchestrates multiple Radio items.
 * Fully polymorphic and agnostic foundation.
 */
export const RadioGroup = <E extends ElementType = 'div'>({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
  color = 'indigo',
  disabled,
  name,
  required,
  className,
  as,
  ...props
}: RadioGroupRootProps<E>) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) setUncontrolledValue(newValue);
    onValueChange?.(newValue);
  };

  const contextValue = useMemo(
    () => ({
      value: currentValue,
      onValueChange: handleValueChange,
      color,
      disabled,
      name,
      required,
    }),
    [currentValue, color, disabled, name, required]
  );

  const Tag = as || 'div';

  return (
    <RadioGroupContext value={contextValue}>
      <Box
        as={Tag as ElementType}
        role="radiogroup"
        className={clsx('pittorica-radio-group-root', className)}
        {...(props as BoxProps<E>)}
      >
        {children}
      </Box>
    </RadioGroupContext>
  );
};

/* --- Item --- */

/**
 * Fix TS2314: Extend RadioProps with generic E.
 */
export type RadioGroupItemProps<E extends ElementType = 'button'> = Omit<
  RadioProps<E>,
  'checked' | 'onCheckedChange'
> & {
  value: string;
};

/**
 * An item within a RadioGroup.
 */
export const RadioGroupItem = <E extends ElementType = 'button'>({
  value: itemValue,
  disabled: itemDisabled,
  as,
  ...props
}: RadioGroupItemProps<E>) => {
  const {
    value,
    onValueChange,
    color,
    disabled: groupDisabled,
    name,
    required,
  } = useRadioGroupContext();

  const isChecked = value === itemValue;
  const isDisabled = groupDisabled || itemDisabled;

  const Tag = as || 'button';

  return (
    <Radio
      as={Tag as ElementType}
      name={name}
      value={itemValue}
      color={color}
      checked={isChecked}
      disabled={isDisabled}
      required={props.required || required}
      onCheckedChange={() => onValueChange(itemValue)}
      {...(props as RadioProps<E>)}
    />
  );
};

RadioGroup.displayName = 'RadioGroup';
RadioGroupItem.displayName = 'RadioGroup.Item';
