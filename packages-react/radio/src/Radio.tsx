import { type CSSProperties, type ElementType, type MouseEvent } from 'react';

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
  /** @default 'indigo' */
  color?: PittoricaColor;
  value?: string;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
};

/**
 * Primitive Radio component.
 * Fully polymorphic and agnostic foundation.
 */
export const Radio = <E extends ElementType = 'button'>({
  checked,
  disabled,
  color = 'indigo',
  className,
  style,
  onCheckedChange,
  name,
  as,
  ...props
}: RadioProps<E>) => {
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  const Tag = as || 'button';

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (disabled) return;
    onCheckedChange?.(!checked);
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
      aria-checked={checked}
      data-state={checked ? 'checked' : 'unchecked'}
      disabled={disabled}
      className={clsx('pittorica-radio-root', className)}
      onClick={handleClick}
      style={
        {
          '--pittorica-source-color': resolvedColor,
          ...style,
        } as CSSProperties
      }
      {...(props as BoxProps<E>)}
    >
      {checked ? (
        <IconCircleCheckFilled size={14} />
      ) : (
        <IconCircle size={14} opacity={0.5} />
      )}
    </Box>
  );
};

Radio.displayName = 'Radio';
