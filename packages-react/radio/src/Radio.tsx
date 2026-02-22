import {
  type CSSProperties,
  type ElementType,
  type MouseEvent,
  useState,
} from 'react';

import { clsx } from 'clsx';

import { IconCircle, IconCircleCheckFilled } from '@tabler/icons-react';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type RadioProps<E extends ElementType = 'button'> = Omit<
  BoxProps<E>,
  'onChange'
> & {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  /** @default 'source' */
  color?: PittoricaColor;
  value?: string;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
  required?: boolean;
};

/**
 * Primitive Radio component.
 * Fully polymorphic and agnostic foundation.
 */
export const Radio = <E extends ElementType = 'button'>({
  checked,
  defaultChecked,
  disabled,
  color = 'source',
  className,
  style,
  onCheckedChange,
  name,
  required = false,
  as,
  ...props
}: RadioProps<E>) => {
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false
  );

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const resolvedColor =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb')
      ? `var(--pittorica-${color}-9)`
      : color;

  const Tag = as || 'button';

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (disabled) return;
    if (!isControlled) setInternalChecked(!isChecked);
    onCheckedChange?.(!isChecked);
    // Propagate click if as is not a button to maintain standard behavior
    if (typeof props.onClick === 'function') {
      (props.onClick as (event: MouseEvent<HTMLElement>) => void)(e);
    }
  };

  return (
    <Box
      as={Tag as ElementType}
      type={Tag === 'button' ? 'button' : undefined}
      role="radio"
      name={name}
      aria-checked={isChecked}
      aria-required={required} // Apply aria-required attribute
      data-state={isChecked ? 'checked' : 'unchecked'}
      disabled={disabled}
      onClick={handleClick}
      className={clsx('pittorica-radio-root', className)}
      style={
        {
          '--pittorica-source-color': resolvedColor,
          ...style,
        } as CSSProperties
      }
      {...(props as BoxProps<E>)}
    >
      {isChecked ? (
        <IconCircleCheckFilled size={14} />
      ) : (
        <IconCircle size={14} opacity={0.5} />
      )}
    </Box>
  );
};

Radio.displayName = 'Radio';
