import {
  createContext,
  type ReactNode,
  type Ref,
  use,
  useEffect,
  useId,
  useRef,
} from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';
import { Text } from '@pittorica/text-react';

interface TextAreaContextType {
  inputId: string;
  helperId: string;
  disabled?: boolean;
  autoResize?: boolean;
}

const TextAreaContext = createContext<TextAreaContextType | null>(null);

const useTextAreaContext = () => {
  const context = use(TextAreaContext);
  if (!context)
    throw new Error('TextArea components must be wrapped in <TextArea.Root />');
  return context;
};

/* --- Root --- */
export interface TextAreaRootProps extends BoxProps {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: boolean;
  color?: PittoricaColor;
  disabled?: boolean;
  autoResize?: boolean;
}

export const TextAreaRoot = ({
  children,
  label,
  helperText,
  error,
  color = 'indigo',
  disabled,
  autoResize,
  className,
  style,
  ...props
}: TextAreaRootProps) => {
  const inputId = useId();
  const helperId = useId();

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  return (
    <TextAreaContext value={{ inputId, helperId, disabled, autoResize }}>
      <Box
        {...props}
        className={clsx('pittorica-text-area-root', className)}
        data-error={error}
      >
        {label && (
          <Text as="label" htmlFor={inputId} size="2" weight="medium" mb="1">
            {label}
          </Text>
        )}

        <div
          className="pittorica-text-area-wrapper"
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
          <div id={helperId} className="pittorica-text-area-helper">
            {helperText}
          </div>
        )}
      </Box>
    </TextAreaContext>
  );
};

/* --- Input --- */
export type TextAreaInputProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextAreaInput = ({
  className,
  ref,
  onChange,
  ...props
}: TextAreaInputProps & { ref?: Ref<HTMLTextAreaElement> }) => {
  const { inputId, helperId, disabled, autoResize } = useTextAreaContext();
  const internalRef = useRef<HTMLTextAreaElement>(null);

  // Sincronizza il ref esterno con quello interno
  useEffect(() => {
    if (typeof ref === 'function') ref(internalRef.current);
    else if (ref)
      (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current =
        internalRef.current;
  }, [ref]);

  const adjustHeight = () => {
    if (autoResize && internalRef.current) {
      const el = internalRef.current;
      el.style.height = 'auto'; // Reset per calcolare lo scrollHeight corretto
      el.style.height = `${el.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [autoResize]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight();
    onChange?.(e);
  };

  return (
    <textarea
      {...props}
      id={inputId}
      ref={internalRef}
      aria-describedby={helperId}
      disabled={disabled}
      onChange={handleChange}
      className={clsx('pittorica-text-area-input', className)}
    />
  );
};

export const TextArea = {
  Root: TextAreaRoot,
  Input: TextAreaInput,
};
