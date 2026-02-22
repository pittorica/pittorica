import React, {
  createContext,
  type ElementType,
  type ReactNode,
  use,
  useId,
} from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';
import { Text } from '@pittorica/text-react';

type TextFieldSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface TextFieldContextType {
  inputId: string;
  helperId: string;
  disabled?: boolean;
  size: TextFieldSize;
  name?: string;
  required?: boolean;
}

const TextFieldContext = createContext<TextFieldContextType | null>(null);

const useTextFieldContext = () => {
  const context = use(TextFieldContext);
  if (!context)
    throw new Error(
      'TextField components must be wrapped in <TextField.Root />'
    );
  return context;
};

/* --- Root --- */

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type TextFieldRootProps<E extends ElementType = 'div'> = BoxProps<E> & {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: boolean;
  color?: PittoricaColor;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  /** @default 'sm' */
  size?: TextFieldSize;
};

/**
 * Root container for TextField. Orchestrates layout, context, and sizes.
 */
export const TextFieldRoot = <E extends ElementType = 'div'>({
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
}: TextFieldRootProps<E>) => {
  const inputId = useId();
  const helperId = useId();

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  const Tag = as || 'div';

  return (
    <TextFieldContext
      value={{ inputId, helperId, disabled, size, name, required }}
    >
      <Box
        as={Tag as ElementType}
        className={clsx(
          'pittorica-text-field-root',
          `pittorica-text-field--${size}`,
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
          className="pittorica-text-field-input-wrapper"
          data-disabled={disabled}
          style={
            {
              '--pittorica-source-color': resolvedColor,
              ...style,
            } as React.CSSProperties
          }
        >
          {children}
        </div>

        {helperText && (
          <div id={helperId} className="pittorica-text-field-helper">
            {helperText}
          </div>
        )}
      </Box>
    </TextFieldContext>
  );
};

/* --- Input --- */

/**
 * Fix ESLint: @typescript-eslint/no-empty-object-type
 * Changed from interface to type alias.
 */
export type TextFieldInputProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Native input element with semantic context and responsive sizing.
 */
export const TextFieldInput = ({
  className,
  ...props
}: TextFieldInputProps) => {
  const {
    inputId,
    helperId,
    disabled,
    name,
    required: contextRequired,
  } = useTextFieldContext();

  return (
    <input
      name={name}
      {...props}
      id={inputId}
      aria-describedby={helperId}
      disabled={disabled}
      required={contextRequired} // Apply required attribute from context
      className={clsx('pittorica-text-field-input', className)}
    />
  );
};

/* --- Slot --- */

/**
 * Visual slot for icons or interactive elements.
 * Aligned with the polymorphic Box architecture.
 */
export const TextFieldSlot = <E extends ElementType = 'div'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => {
  const Tag = as || 'div';
  return (
    <Box
      as={Tag as ElementType}
      className={clsx('pittorica-text-field-slot', className)}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

export const TextField = Object.assign(TextFieldRoot, {
  Root: TextFieldRoot,
  Input: TextFieldInput,
  Slot: TextFieldSlot,
});

TextFieldRoot.displayName = 'TextField.Root';
TextFieldInput.displayName = 'TextField.Input';
TextFieldSlot.displayName = 'TextField.Slot';
