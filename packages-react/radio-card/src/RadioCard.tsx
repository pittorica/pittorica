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
import type { PittoricaColor } from '@pittorica/text-react';

interface RadioCardContextType {
  value?: string;
  onValueChange: (value: string) => void;
  color: PittoricaColor;
  disabled?: boolean;
  name?: string;
  required?: boolean;
}

const RadioCardContext = createContext<RadioCardContextType | null>(null);

const useRadioCardContext = () => {
  const context = use(RadioCardContext);
  if (!context)
    throw new Error(
      'RadioCard components must be wrapped in <RadioCard.Root />'
    );
  return context;
};

/* --- Root --- */

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type RadioCardRootProps<E extends ElementType = 'div'> = BoxProps<E> & {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** @default 'indigo' */
  color?: PittoricaColor;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  /** Number of columns. @default '1' */
  columns?: string;
};

const RadioCardRoot = <E extends ElementType = 'div'>({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
  color = 'indigo',
  disabled,
  name,
  required,
  columns = '1',
  className,
  style,
  as,
  ...props
}: RadioCardRootProps<E>) => {
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
    <RadioCardContext value={contextValue}>
      <Box
        as={Tag as ElementType}
        {...(props as BoxProps<E>)}
        role="radiogroup"
        className={clsx('pittorica-radio-card-root', className)}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap: 'var(--pittorica-space-3)',
          ...style,
        }}
      >
        {children}
      </Box>
    </RadioCardContext>
  );
};

/* --- Item --- */

/**
 * Fix TS2314 & TS2312: Use 'type' alias. Default to 'button' for interaction.
 */
export type RadioCardItemProps<E extends ElementType = 'button'> =
  BoxProps<E> & {
    value: string;
    disabled?: boolean;
  };

const RadioCardItem = <E extends ElementType = 'button'>({
  children,
  value: itemValue,
  disabled: itemDisabled,
  className,
  style,
  as,
  ...props
}: RadioCardItemProps<E>) => {
  const {
    value,
    onValueChange,
    color,
    disabled: groupDisabled,
    name,
    required,
  } = useRadioCardContext();

  const isChecked = value === itemValue;
  const isDisabled = groupDisabled || itemDisabled;

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  const Tag = as || 'button';

  return (
    <Box
      as={Tag as ElementType}
      /* Logic: Set button type only if effectively rendering a button */
      type={Tag === 'button' ? 'button' : undefined}
      role="radio"
      name={name}
      aria-checked={isChecked}
      aria-required={required}
      data-state={isChecked ? 'checked' : 'unchecked'}
      disabled={isDisabled}
      className={clsx('pittorica-radio-card-item', className)}
      onClick={() => !isDisabled && onValueChange(itemValue)}
      style={
        {
          '--pittorica-source-color': resolvedColor,
          ...style,
        } as React.CSSProperties
      }
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

export const RadioCard = Object.assign(RadioCardRoot, {
  Item: RadioCardItem,
});

RadioCardRoot.displayName = 'RadioCard.Root';
RadioCardItem.displayName = 'RadioCard.Item';
