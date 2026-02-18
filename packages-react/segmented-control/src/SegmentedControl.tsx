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

interface SegmentedControlContextType {
  value?: string;
  onValueChange: (value: string) => void;
  color: PittoricaColor;
  disabled?: boolean;
}

const SegmentedControlContext =
  createContext<SegmentedControlContextType | null>(null);

const useSegmentedControlContext = () => {
  const context = use(SegmentedControlContext);
  if (!context)
    throw new Error(
      'SegmentedControl components must be wrapped in <SegmentedControl.Root />'
    );
  return context;
};

/* --- Root --- */

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type SegmentedControlRootProps<E extends ElementType = 'div'> =
  BoxProps<E> & {
    children: ReactNode;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** @default 'indigo' */
    color?: PittoricaColor;
    disabled?: boolean;
  };

const SegmentedControlRoot = <E extends ElementType = 'div'>({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
  color = 'indigo',
  disabled,
  className,
  as,
  ...props
}: SegmentedControlRootProps<E>) => {
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
    }),
    [currentValue, color, disabled]
  );

  const Tag = as || 'div';

  return (
    <SegmentedControlContext value={contextValue}>
      <Box
        as={Tag as ElementType}
        {...(props as BoxProps<E>)}
        role="radiogroup"
        className={clsx('pittorica-segmented-control-root', className)}
      >
        {children}
      </Box>
    </SegmentedControlContext>
  );
};

/* --- Item --- */

/**
 * Item is forced to ElementType 'button' as its primary behavior is a radio toggle.
 */
export type SegmentedControlItemProps<E extends ElementType = 'button'> =
  BoxProps<E> & {
    value: string;
    disabled?: boolean;
  };

const SegmentedControlItem = <E extends ElementType = 'button'>({
  children,
  value: itemValue,
  disabled: itemDisabled,
  className,
  style,
  as,
  ...props
}: SegmentedControlItemProps<E>) => {
  const {
    value,
    onValueChange,
    color,
    disabled: groupDisabled,
  } = useSegmentedControlContext();

  const isChecked = value === itemValue;
  const isDisabled = groupDisabled || itemDisabled;

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  const Tag = as || 'button';

  return (
    <Box
      as={Tag as ElementType}
      type={Tag === 'button' ? 'button' : undefined}
      role="radio"
      aria-checked={isChecked}
      data-state={isChecked ? 'checked' : 'unchecked'}
      disabled={isDisabled}
      className={clsx('pittorica-segmented-control-item', className)}
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

export const SegmentedControl = {
  Root: SegmentedControlRoot,
  Item: SegmentedControlItem,
};

SegmentedControlRoot.displayName = 'SegmentedControl.Root';
SegmentedControlItem.displayName = 'SegmentedControl.Item';
