import {
  type ComponentPropsWithoutRef,
  createContext,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  use,
  useId,
} from 'react';

import { clsx } from 'clsx';

import { IconChevronDown } from '@tabler/icons-react';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';
import { Text } from '@pittorica/text-react';

/* --- Types --- */

export type SelectSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface SelectContextType {
  inputId: string;
  helperId: string;
  disabled?: boolean;
  size: SelectSize;
  name?: string;
  required?: boolean;
}

const SelectContext = createContext<SelectContextType | null>(null);

const useSelectContext = () => {
  const context = use(SelectContext);
  if (!context)
    throw new Error('Select components must be wrapped in <Select.Root />');
  return context;
};

/* --- Root --- */

/**
 * Fix TS2314: Use 'type' for intersection with polymorphic BoxProps<E>.
 */
export type SelectRootProps<E extends ElementType = 'div'> = BoxProps<E> & {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: boolean;
  color?: PittoricaColor;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  /** @default 'sm' */
  size?: SelectSize;
};

/**
 * Root component for the Select system.
 * Fully polymorphic and agnostic foundation.
 */
export const SelectRoot = <E extends ElementType = 'div'>({
  children,
  label,
  helperText,
  error,
  color = 'source',
  disabled,
  name,
  required,
  size = 'sm',
  className,
  style,
  as,
  ...props
}: SelectRootProps<E>) => {
  const inputId = useId();
  const helperId = useId();

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  const Tag = as || 'div';

  return (
    <SelectContext
      value={{ inputId, helperId, disabled, size, name, required }}
    >
      <Box
        as={Tag as ElementType}
        className={clsx(
          'pittorica-select-root',
          `pittorica-select--${size}`,
          className
        )}
        data-error={error}
        {...(props as BoxProps<E>)}
      >
        {label && (
          <Text
            as="label"
            htmlFor={inputId}
            weight="medium"
            style={{
              paddingLeft: '4px',
              fontSize: 'var(--pittorica-font-size-1)',
              marginBottom: '4px',
              display: 'inline-block',
            }}
          >
            {label} {required && <span aria-hidden="true">*</span>}
          </Text>
        )}

        <div
          className="pittorica-select-wrapper"
          data-disabled={disabled}
          style={
            {
              '--pittorica-source-color': resolvedColor,
              ...style,
            } as CSSProperties
          }
        >
          {children}
          <div className="pittorica-select-chevron">
            <IconChevronDown size={size === 'xs' ? 14 : 18} />
          </div>
        </div>

        {helperText && (
          <div id={helperId} className="pittorica-select-helper">
            {helperText}
          </div>
        )}
      </Box>
    </SelectContext>
  );
};

/* --- Content --- */

/**
 * Fix TS2314: Extend SelectHTMLAttributes with generic E.
 */
export type SelectContentProps<E extends ElementType = 'select'> = BoxProps<E> &
  ComponentPropsWithoutRef<'select'>;

/**
 * The actual select element. Must be used inside Select.Root.
 */
export const SelectContent = <E extends ElementType = 'select'>({
  children,
  className,
  as,
  ...props
}: SelectContentProps<E>) => {
  const { inputId, helperId, disabled, name, required } = useSelectContext();

  const Tag = as || 'select';

  return (
    <Box
      as={Tag as ElementType}
      name={name}
      id={inputId}
      disabled={disabled}
      aria-describedby={helperId}
      aria-required={required} // Apply aria-required attribute
      className={clsx('pittorica-select-input', className)}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

/* --- Slot --- */

/**
 * Optional slot for icons or additional content inside the select wrapper.
 */
export const SelectSlot = <E extends ElementType = 'div'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => {
  const Tag = as || 'div';
  return (
    <Box
      as={Tag as ElementType}
      className={clsx('pittorica-select-slot', className)}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Content: SelectContent,
  Slot: SelectSlot,
});

SelectRoot.displayName = 'Select.Root';
SelectContent.displayName = 'Select.Content';
SelectSlot.displayName = 'Select.Slot';
