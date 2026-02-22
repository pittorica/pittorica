import {
  createContext,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  use,
  useEffect,
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
    throw new Error('Popover components must be wrapped in <Popover.Root />');
  return context;
};

/* --- Root --- */

export type PopoverRootProps = {
  children: ReactNode;
  /** @default 'bottom' */
  placement?: Placement;
  appearance?: 'light' | 'dark' | 'inherit';
};

export const PopoverRoot = ({
  children,
  placement = 'bottom',
  appearance,
}: PopoverRootProps) => {
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
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      {...getReferenceProps(props as any)}
      ref={setRefs}
    >
      {children}
    </Box>
  );
};

/* --- Content --- */

export type PopoverContentProps<E extends ElementType = 'div'> = BoxProps<E>;

export const PopoverContent = <E extends ElementType = 'div'>({
  children,
  className,
  as,
  ref: externalRef,
  style,
  ...props
}: PopoverContentProps<E>) => {
  const { isOpen, refs, floatingStyles, getFloatingProps, appearance } =
    usePopoverContext();

  const [inheritedAppearance, setInheritedAppearance] = useState<
    'light' | 'dark'
  >();

  // Safer SSR-friendly layout effect
  const useIsomorphicLayoutEffect =
    globalThis.window === undefined ? useEffect : useLayoutEffect;

  useIsomorphicLayoutEffect(() => {
    if (isOpen && refs.domReference.current) {
      const themeElement = refs.domReference.current.closest(
        '.pittorica-theme'
      ) as HTMLElement | null;
      if (themeElement) {
        const app = themeElement.dataset.appearance as 'light' | 'dark';
        /* eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect */
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
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
          {...getFloatingProps(props as any)}
          ref={setFloatingRefs}
          className={clsx('pittorica-popover-content', className)}
          style={{ ...floatingStyles, ...style }}
        >
          {children}
        </Box>
      </PittoricaTheme>
    </FloatingPortal>
  );
};

/**
 * Compound component object.
 */
export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
});
