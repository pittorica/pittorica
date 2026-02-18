import {
  createContext,
  type ElementType,
  type KeyboardEvent,
  use,
  useMemo,
  useRef,
  useState,
} from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

interface TabsContextType {
  value?: string;
  onValueChange: (value: string) => void;
  color: PittoricaColor;
}

const TabsContext = createContext<TabsContextType | null>(null);

const useTabsContext = () => {
  const context = use(TabsContext);
  if (!context)
    throw new Error('Tabs components must be wrapped in <Tabs.Root />');
  return context;
};

/* --- Root --- */
export type TabsRootProps<E extends ElementType = 'div'> = BoxProps<E> & {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  color?: PittoricaColor;
};

const TabsRoot = <E extends ElementType = 'div'>({
  children,
  defaultValue,
  value: controlledValue,
  onValueChange,
  color = 'indigo',
  className,
  as,
  ...props
}: TabsRootProps<E>) => {
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
    }),
    [currentValue, color]
  );

  const Tag = as || 'div';

  return (
    <TabsContext value={contextValue}>
      <Box
        as={Tag as ElementType}
        className={clsx('pittorica-tabs-root', className)}
        {...(props as BoxProps<E>)}
      >
        {children}
      </Box>
    </TabsContext>
  );
};

/* --- List --- */
const TabsList = <E extends ElementType = 'div'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => {
  const listRef = useRef<HTMLElement>(null);
  const { onValueChange } = useTabsContext();

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.getAttribute('role') !== 'tab') return;

    const tabs = [
      ...(listRef.current?.querySelectorAll('[role="tab"]') || []),
    ] as HTMLElement[];
    const index = tabs.indexOf(target);

    let nextIndex: number | null = null;

    switch (event.key) {
      case 'ArrowRight': {
        nextIndex = (index + 1) % tabs.length;
        break;
      }
      case 'ArrowLeft': {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      }
      case 'Home': {
        nextIndex = 0;
        break;
      }
      case 'End': {
        nextIndex = tabs.length - 1;
        break;
      }
    }

    if (nextIndex !== null) {
      event.preventDefault();
      const nextTab = tabs[nextIndex];
      nextTab.focus();
      const nextValue = nextTab.dataset.value;
      if (nextValue) onValueChange(nextValue);
    }
  };

  const Tag = as || 'div';

  return (
    <Box
      as={Tag as ElementType}
      ref={listRef}
      role="tablist"
      onKeyDown={handleKeyDown}
      className={clsx('pittorica-tabs-list', className)}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

/* --- Trigger --- */
export type TabsTriggerProps<E extends ElementType = 'button'> = BoxProps<E> & {
  value: string;
};

const TabsTrigger = <E extends ElementType = 'button'>({
  value: itemValue,
  children,
  className,
  style,
  as,
  ...props
}: TabsTriggerProps<E>) => {
  const { value, onValueChange, color } = useTabsContext();
  const isActive = value === itemValue;

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  const Tag = as || 'button';

  return (
    <Box
      as={Tag as ElementType}
      role="tab"
      type={Tag === 'button' ? 'button' : undefined}
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      data-state={isActive ? 'active' : 'inactive'}
      data-value={itemValue}
      className={clsx('pittorica-tabs-trigger', className)}
      onClick={() => onValueChange(itemValue)}
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

/* --- Content --- */
export type TabsContentProps<E extends ElementType = 'div'> = BoxProps<E> & {
  value: string;
};

const TabsContent = <E extends ElementType = 'div'>({
  value: itemValue,
  children,
  className,
  as,
  ...props
}: TabsContentProps<E>) => {
  const { value } = useTabsContext();
  const isActive = value === itemValue;

  const Tag = as || 'div';

  return (
    <Box
      as={Tag as ElementType}
      role="tabpanel"
      tabIndex={0}
      data-state={isActive ? 'active' : 'inactive'}
      className={clsx('pittorica-tabs-content', className)}
      {...(props as BoxProps<E>)}
    >
      {isActive ? children : null}
    </Box>
  );
};

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};

TabsRoot.displayName = 'Tabs.Root';
TabsList.displayName = 'Tabs.List';
TabsTrigger.displayName = 'Tabs.Trigger';
TabsContent.displayName = 'Tabs.Content';
