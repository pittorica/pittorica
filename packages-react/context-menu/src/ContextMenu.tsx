import {
  createContext,
  type ElementType,
  type MouseEvent,
  type ReactNode,
  use,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

interface MenuContextValue {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  closeAll: () => void;
}

const MenuContext = createContext<MenuContextValue | null>(null);

/* --- Internal Content --- */

interface MenuContentProps {
  x: number;
  y: number;
  children: ReactNode;
  onClose: () => void;
  itemCount: number;
}

const MenuContent = ({
  x,
  y,
  children,
  onClose,
  itemCount,
}: MenuContentProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [localIndex, setLocalIndex] = useState(-1);
  const [adjustedPos, setAdjustedPos] = useState({ top: y, left: x });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsClient(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useLayoutEffect(() => {
    if (globalThis.window === undefined || !menuRef.current) return;

    const { innerWidth: ww, innerHeight: wh } = globalThis;
    const { offsetWidth: mw, offsetHeight: mh } = menuRef.current;

    const frame = requestAnimationFrame(() => {
      setAdjustedPos({
        left: x + mw > ww ? x - mw : x,
        top: y + mh > wh ? y - mh : y,
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [x, y]);

  useEffect(() => {
    if (globalThis.window === undefined) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (itemCount === 0) return;

      switch (e.key) {
        case 'ArrowDown': {
          setLocalIndex((prev) => (prev + 1) % itemCount);
          break;
        }
        case 'ArrowUp': {
          setLocalIndex((prev) => (prev - 1 + itemCount) % itemCount);
          break;
        }
        case 'Escape': {
          onClose();
          break;
        }
      }
    };

    globalThis.addEventListener('keydown', handleKeyDown);
    globalThis.addEventListener('click', onClose);
    return () => {
      globalThis.removeEventListener('keydown', handleKeyDown);
      globalThis.removeEventListener('click', onClose);
    };
  }, [itemCount, onClose]);

  const contextValue = useMemo(
    () => ({
      activeIndex: localIndex,
      setActiveIndex: setLocalIndex,
      closeAll: onClose,
    }),
    [localIndex, onClose]
  );

  if (!isClient) return null;

  return createPortal(
    <MenuContext value={contextValue}>
      <div
        ref={menuRef}
        className="pittorica-context-menu-content"
        style={{ top: adjustedPos.top, left: adjustedPos.left }}
        onClick={(e) => e.stopPropagation()}
        role="menu"
      >
        {children}
      </div>
    </MenuContext>,
    document.body
  );
};

/* --- Public Components --- */

export type ContextMenuProps<E extends ElementType = 'div'> = BoxProps<E> & {
  trigger: ReactNode;
  itemCount: number;
};

export const ContextMenu = <E extends ElementType = 'div'>({
  trigger,
  children,
  itemCount,
  as,
  ...props
}: ContextMenuProps<E>) => {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  const closeAll = useCallback(() => {
    setCoords(null);
  }, []);

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const Tag = as || 'div';

  return (
    <Box
      as={Tag as ElementType}
      onContextMenu={handleContextMenu}
      style={{ display: 'inline-block' }}
      {...(props as BoxProps<E>)}
    >
      {trigger}
      {coords && (
        <MenuContent
          x={coords.x}
          y={coords.y}
          onClose={closeAll}
          itemCount={itemCount}
        >
          {children}
        </MenuContent>
      )}
    </Box>
  );
};

export type ContextMenuItemProps<E extends ElementType = 'div'> =
  BoxProps<E> & {
    index: number;
  };

export const ContextMenuItem = <E extends ElementType = 'div'>({
  children,
  onClick,
  index,
  className,
  as,
  ...props
}: ContextMenuItemProps<E>) => {
  const context = use(MenuContext);
  if (!context) return null;

  const isActive = context.activeIndex === index;
  const Tag = as || 'div';

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    // We use a type-safe signature to invoke the callback without 'any'
    if (onClick) {
      (onClick as (event: MouseEvent<HTMLElement>) => void)(e);
    }
    context.closeAll();
  };

  return (
    <Box
      as={Tag as ElementType}
      className={clsx('pittorica-context-menu-item', className)}
      data-active={isActive}
      onMouseEnter={() => context.setActiveIndex(index)}
      onClick={handleClick}
      role="menuitem"
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

export type ContextMenuSubProps<E extends ElementType = 'div'> = BoxProps<E> & {
  label: string;
  index: number;
  itemCount: number;
};

export const ContextMenuSub = <E extends ElementType = 'div'>({
  label,
  children,
  index,
  itemCount,
  className,
  as,
  ...props
}: ContextMenuSubProps<E>) => {
  const context = use(MenuContext);
  const ref = useRef<HTMLElement>(null);
  const [subMenuPos, setSubMenuPos] = useState<{ x: number; y: number } | null>(
    null
  );

  if (!context) return null;

  const isActive = context.activeIndex === index;

  useLayoutEffect(() => {
    if (isActive && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const frame = requestAnimationFrame(() => {
        setSubMenuPos({ x: rect.right, y: rect.top });
      });
      return () => cancelAnimationFrame(frame);
    }

    // Fix: Defer nulling the state as well to satisfy the linter
    const frame = requestAnimationFrame(() => setSubMenuPos(null));
    return () => cancelAnimationFrame(frame);
  }, [isActive]);

  const Tag = as || 'div';

  return (
    <Box
      as={Tag as ElementType}
      ref={ref}
      className={clsx('pittorica-context-menu-item', className)}
      data-active={isActive}
      onMouseEnter={() => context.setActiveIndex(index)}
      role="menuitem"
      aria-haspopup="true"
      {...(props as BoxProps<E>)}
    >
      {label}
      <span className="pittorica-context-menu-chevron" aria-hidden="true">
        ▶
      </span>
      {isActive && subMenuPos && (
        <MenuContent
          x={subMenuPos.x}
          y={subMenuPos.y}
          onClose={context.closeAll}
          itemCount={itemCount}
        >
          {children}
        </MenuContent>
      )}
    </Box>
  );
};

ContextMenu.displayName = 'ContextMenu';
ContextMenuItem.displayName = 'ContextMenu.Item';
ContextMenuSub.displayName = 'ContextMenu.Sub';
