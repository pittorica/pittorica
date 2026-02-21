import {
  createContext,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  use,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

import { clsx } from 'clsx';

import {
  autoUpdate,
  type ExtendedRefs,
  flip,
  FloatingPortal,
  offset,
  type Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { Box, type BoxProps } from '@pittorica/box-react';
import { PittoricaTheme } from '@pittorica/theme-react';

/* --- Context --- */

interface PopoverContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  refs: ExtendedRefs<HTMLElement>;
  floatingStyles: CSSProperties;
  getReferenceProps: (
    userProps?: React.HTMLProps<Element>
  ) => Record<string, unknown>;
  getFloatingProps: (
    userProps?: React.HTMLProps<HTMLElement>
  ) => Record<string, unknown>;
  appearance?: 'light' | 'dark' | 'inherit';
}

const PopoverContext = createContext<PopoverContextType | null>(null);

const usePopoverContext = () => {
  const context = use(PopoverContext);
  if (!context)
    throw new Error('Popover components must be wrapped in <Popover />');
  return context;
};

/* --- Root --- */

export type PopoverProps = {
  children: ReactNode;
  /** @default 'bottom' */
  placement?: Placement;
  appearance?: 'light' | 'dark' | 'inherit';
};

export const Popover = ({
  children,
  placement = 'bottom',
  appearance,
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating<HTMLElement>({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip(), shift({ padding: 5 })],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      refs,
      floatingStyles,
      getReferenceProps,
      getFloatingProps,
      appearance,
    }),
    [
      isOpen,
      refs,
      floatingStyles,
      getReferenceProps,
      getFloatingProps,
      appearance,
    ]
  );

  return <PopoverContext value={value}>{children}</PopoverContext>;
};

/* --- Trigger --- */

/**
 * Fix TS2314: Use 'type' and generic E for polymorphic BoxProps.
 */
export type PopoverTriggerProps<E extends ElementType = 'span'> = BoxProps<E>;

export const PopoverTrigger = <E extends ElementType = 'span'>({
  children,
  as,
  ref: externalRef,
  ...props
}: PopoverTriggerProps<E>) => {
  const { refs, getReferenceProps } = usePopoverContext();

  const setRefs = (node: HTMLElement | null) => {
    refs.setReference(node);
    if (!externalRef) return;
    if (typeof externalRef === 'function') {
      externalRef(node);
    } else if (typeof externalRef === 'object') {
      (externalRef as React.RefObject<HTMLElement | null>).current = node;
    }
  };

  const Tag = as || 'span';

  return (
    <Box
      as={Tag as ElementType}
      display="inline-flex"
      {...getReferenceProps()}
      ref={setRefs}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

/* --- Content --- */

/**
 * Fix TS2314: Use 'type' and generic E for polymorphic BoxProps.
 */
export type PopoverContentProps<E extends ElementType = 'div'> = BoxProps<E>;

export const PopoverContent = <E extends ElementType = 'div'>({
  children,
  className,
  as,
  ref: externalRef,
  ...props
}: PopoverContentProps<E>) => {
  const { isOpen, refs, floatingStyles, getFloatingProps, appearance } =
    usePopoverContext();

  const [inheritedAppearance, setInheritedAppearance] = useState<
    'light' | 'dark'
  >();

  useLayoutEffect(() => {
    if (isOpen && refs.domReference.current) {
      const themeElement = refs.domReference.current.closest(
        '.pittorica-theme'
      ) as HTMLElement | null;
      if (themeElement) {
        const app = themeElement.dataset.appearance as 'light' | 'dark';
        setInheritedAppearance(app || undefined);
      }
    }
  }, [isOpen, refs.domReference]);

  const setFloatingRefs = (node: HTMLElement | null) => {
    refs.setFloating(node);
    if (!externalRef) return;
    if (typeof externalRef === 'function') {
      externalRef(node);
    } else if (typeof externalRef === 'object') {
      (externalRef as React.RefObject<HTMLElement | null>).current = node;
    }
  };

  if (!isOpen) return null;

  const Tag = as || 'div';
  const finalAppearance =
    appearance === 'inherit'
      ? inheritedAppearance
      : (appearance ?? inheritedAppearance);

  return (
    <FloatingPortal>
      <PittoricaTheme appearance={finalAppearance}>
        <Box
          as={Tag as ElementType}
          {...getFloatingProps()}
          ref={setFloatingRefs}
          className={clsx('pittorica-popover-content', className)}
          style={{ ...floatingStyles, ...props.style }}
          {...(props as BoxProps<E>)}
        >
          {children}
        </Box>
      </PittoricaTheme>
    </FloatingPortal>
  );
};

Popover.displayName = 'Popover';
PopoverTrigger.displayName = 'Popover.Trigger';
PopoverContent.displayName = 'Popover.Content';
