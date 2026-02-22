import {
  type CSSProperties,
  type ElementType,
  type MouseEvent,
  useState,
} from 'react';

import { clsx } from 'clsx';

import { IconCircle, IconCircleFilled } from '@tabler/icons-react';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type SwitchProps<E extends ElementType = 'button'> = Omit<
  BoxProps<E>,
  'children' | 'onChange'
> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** @default 'source' */
  color?: PittoricaColor;
  name?: string;
  required?: boolean;
};

/**
 * Switch component for binary toggling.
 * Fully polymorphic and agnostic foundation.
 */
export const Switch = <E extends ElementType = 'button'>({
  checked: controlledChecked,
  defaultChecked,
  onCheckedChange,
  disabled,
  color = 'source',
  name,
  className,
  style,
  required = false,
  as,
  ...props
}: SwitchProps<E>) => {
  const [uncontrolledChecked, setUncontrolledChecked] = useState(
    defaultChecked ?? false
  );

  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : uncontrolledChecked;

  const handleToggle = (e: MouseEvent<HTMLElement>) => {
    if (disabled) return;
    if (!isControlled) setUncontrolledChecked(!isChecked);
    onCheckedChange?.(!isChecked);

    // Maintain standard click propagation for polymorphic containers
    if (typeof props.onClick === 'function') {
      (props.onClick as (event: MouseEvent<HTMLElement>) => void)(e);
    }
  };

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  const Tag = as || 'button';

  return (
    <Box
      as={Tag as ElementType}
      type={Tag === 'button' ? 'button' : undefined}
      role="switch"
      name={name}
      aria-checked={isChecked}
      aria-required={required} // Apply aria-required attribute
      data-state={isChecked ? 'checked' : 'unchecked'}
      disabled={disabled}
      onClick={handleToggle}
      className={clsx('pittorica-switch-root', className)}
      style={
        {
          '--pittorica-source-color': resolvedColor,
          ...style,
        } as CSSProperties
      }
      {...(props as BoxProps<E>)}
    >
      <span className="pittorica-switch-thumb">
        {isChecked ? (
          <IconCircleFilled size={12} stroke={2.5} />
        ) : (
          <IconCircle size={12} stroke={2.5} />
        )}
      </span>
    </Box>
  );
};

Switch.displayName = 'Switch';
