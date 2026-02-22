import React, {
  createContext,
  type ElementType,
  use,
  useMemo,
  useState,
} from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { Card, type CardProps } from '@pittorica/card-react';
import type { PittoricaColor } from '@pittorica/text-react';

interface CheckboxCardContextValue {
  value: string[];
  onItemChange: (val: string) => void;
  color?: PittoricaColor;
  disabled?: boolean;
  translucent?: boolean;
  name?: string;
  required?: boolean;
}

const CheckboxCardContext = createContext<CheckboxCardContextValue | null>(
  null
);

/* --- Root --- */

/**
 * Fix TS2314: Use 'type' for intersection with polymorphic BoxProps<E>.
 */
export type CheckboxCardRootProps<E extends ElementType = 'div'> = Omit<
  BoxProps<E>,
  'onChange' | 'value' | 'defaultValue'
> & {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  orientation?: 'horizontal' | 'vertical';
  color?: PittoricaColor;
  disabled?: boolean;
  translucent?: boolean;
  name?: string;
  required?: boolean;
};

const CheckboxCardRoot = <E extends ElementType = 'div'>({
  value: controlledValue,
  defaultValue = [],
  onValueChange,
  orientation = 'vertical',
  color = 'indigo',
  disabled,
  translucent,
  name,
  required,
  children,
  className,
  as,
  ...props
}: CheckboxCardRootProps<E>) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleItemChange = (itemValue: string) => {
    const nextValue = currentValue.includes(itemValue)
      ? currentValue.filter((v) => v !== itemValue)
      : [...currentValue, itemValue];

    if (!isControlled) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };

  const contextValue = useMemo(
    () => ({
      value: currentValue,
      onItemChange: handleItemChange,
      color,
      disabled,
      translucent,
      name,
      required,
    }),
    [currentValue, color, disabled, translucent, name, required]
  );

  const Tag = as || 'div';

  return (
    <CheckboxCardContext value={contextValue}>
      <Box
        as={Tag as ElementType}
        className={clsx('pittorica-checkbox-card-root', className)}
        data-orientation={orientation}
        role="group"
        {...(props as BoxProps<E>)}
      >
        {children}
      </Box>
    </CheckboxCardContext>
  );
};

/* --- Item --- */

/**
 * Fix TS2314: Extend CardProps with generic E.
 */
export type CheckboxCardItemProps<E extends ElementType = 'label'> =
  CardProps<E> & {
    value: string;
  };

const CheckboxCardItem = <E extends ElementType = 'label'>({
  value,
  children,
  className,
  style,
  translucent: itemTranslucent,
  as,
  ...props
}: CheckboxCardItemProps<E>) => {
  const context = use(CheckboxCardContext);
  if (!context)
    throw new Error('CheckboxCard.Item must be used within CheckboxCard.Root');

  const isTranslucent = itemTranslucent ?? context.translucent;
  const isChecked = context.value.includes(value);

  const isSemantic =
    context.color !== 'inherit' &&
    !context.color?.startsWith('#') &&
    !context.color?.startsWith('rgb');

  const resolvedColor = isSemantic
    ? `var(--pittorica-${context.color}-9)`
    : context.color;

  const Tag = as || 'label';

  return (
    <Card
      as={Tag as ElementType}
      translucent={isTranslucent}
      className={clsx('pittorica-checkbox-card-item', className)}
      data-state={isChecked ? 'checked' : 'unchecked'}
      data-disabled={context.disabled}
      style={
        {
          '--_checkbox-card-color': resolvedColor,
          ...style,
        } as React.CSSProperties
      }
      {...(props as CardProps<E>)}
    >
      <input
        type="checkbox"
        className="pittorica-checkbox-card-input"
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
        name={context.name}
        value={value}
        checked={isChecked}
        disabled={context.disabled}
        required={context.required}
        onChange={() => context.onItemChange(value)}
      />
      {children}
    </Card>
  );
};

export const CheckboxCard = Object.assign(CheckboxCardRoot, {
  Item: CheckboxCardItem,
});

CheckboxCardRoot.displayName = 'CheckboxCard.Root';
CheckboxCardItem.displayName = 'CheckboxCard.Item';
