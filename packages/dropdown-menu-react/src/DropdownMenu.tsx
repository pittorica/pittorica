import React, {
  createContext,
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

interface DropdownContextValue {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  closeAll: () => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

interface DropdownContentProps {
  triggerRef: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
  onClose: () => void;
  itemCount: number;
}

const DropdownContent = ({
  triggerRef,
  children,
  onClose,
  itemCount,
}: DropdownContentProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [localIndex, setLocalIndex] = useState(-1);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    const menu = menuRef.current;
    if (!menu || !trigger) return;

    const rect = trigger.getBoundingClientRect();
    const { innerWidth: ww, innerHeight: wh } = globalThis;
    const { offsetWidth: mw, offsetHeight: mh } = menu;

    const calculatedLeft = rect.left + mw > ww ? rect.right - mw : rect.left;
    const calculatedTop =
      rect.bottom + 4 + mh > wh ? rect.top - mh - 4 : rect.bottom + 4;

    setPos({ left: calculatedLeft, top: calculatedTop });
  }, [triggerRef]);

  useLayoutEffect(() => {
    if (!triggerRef.current || !menuRef.current) return;

    const observer = new ResizeObserver(() => {
      updatePosition();
    });

    observer.observe(triggerRef.current);
    observer.observe(menuRef.current);

    return () => observer.disconnect();
  }, [triggerRef, updatePosition]);

  // Re-defined handleMouseDown to fix the TS error
  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !menuRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        onClose();
      }
    },
    [onClose, triggerRef]
  );

  // Defined handleKeyDown outside useEffect for clarity
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (itemCount === 0) return;
      if (e.key === 'ArrowDown')
        setLocalIndex((prev) => (prev + 1) % itemCount);
      if (e.key === 'ArrowUp')
        setLocalIndex((prev) => (prev - 1 + itemCount) % itemCount);
      if (e.key === 'Escape') onClose();
    },
    [itemCount, onClose]
  );

  useEffect(() => {
    globalThis.addEventListener('keydown', handleKeyDown);
    globalThis.addEventListener('mousedown', handleMouseDown);

    return () => {
      globalThis.removeEventListener('keydown', handleKeyDown);
      globalThis.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleKeyDown, handleMouseDown]);

  const contextValue = useMemo(
    () => ({
      activeIndex: localIndex,
      setActiveIndex: setLocalIndex,
      closeAll: onClose,
    }),
    [localIndex, onClose]
  );

  return createPortal(
    <DropdownContext value={contextValue}>
      <div
        ref={menuRef}
        className="pittorica-dropdown-content"
        style={{ top: pos.top, left: pos.left }}
      >
        {children}
      </div>
    </DropdownContext>,
    document.body
  );
};

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  icon?: React.ReactNode;
  shortcut?: string;
}

export const DropdownMenuItem = ({
  children,
  onClick,
  index,
  icon,
  shortcut,
  className,
  ...props
}: DropdownMenuItemProps) => {
  const context = use(DropdownContext);
  if (!context) return null;

  const isActive = context.activeIndex === index;

  return (
    <div
      {...props}
      className={clsx('pittorica-dropdown-item', className)}
      data-active={isActive}
      onMouseEnter={() => context.setActiveIndex(index)}
      onClick={(e) => {
        onClick?.(e);
        context.closeAll();
      }}
    >
      {icon && <span className="pittorica-dropdown-item-icon">{icon}</span>}
      <span className="pittorica-dropdown-item-content">{children}</span>
      {shortcut && (
        <kbd className="pittorica-dropdown-item-shortcut">{shortcut}</kbd>
      )}
    </div>
  );
};

interface DropdownMenuProps {
  /** * A function that returns the trigger element.
   * It receives the ref and toggle function.
   */
  renderTrigger: (props: {
    ref: React.RefObject<HTMLElement | null>;
    onClick: () => void;
  }) => React.ReactNode;
  children: React.ReactNode;
  itemCount: number;
}

export const DropdownMenu = ({
  renderTrigger,
  children,
  itemCount,
}: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <div style={{ display: 'inline-block' }}>
      {renderTrigger({ ref: triggerRef, onClick: toggle })}
      {open && (
        <DropdownContent
          triggerRef={triggerRef}
          onClose={() => setOpen(false)}
          itemCount={itemCount}
        >
          {children}
        </DropdownContent>
      )}
    </div>
  );
};
