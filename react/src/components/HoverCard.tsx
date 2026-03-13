import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

interface HoverCardProps {
  /** * A function that returns the trigger element.
   * It receives the ref.
   */
  renderTrigger: (props: {
    ref: React.RefObject<HTMLElement | null>;
  }) => React.ReactNode;
  children: React.ReactNode;
  /** @default 500 */
  openDelay?: number;
  /** @default 300 */
  closeDelay?: number;
}

export const HoverCard = ({
  renderTrigger,
  children,
  openDelay = 500,
  closeDelay = 300,
}: HoverCardProps) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Fix: Use ReturnType to correctly type the timeout across environments
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    const card = cardRef.current;
    if (!card || !trigger) return;

    const rect = trigger.getBoundingClientRect();
    const { innerWidth: ww, innerHeight: wh } = globalThis;
    const { offsetWidth: cw, offsetHeight: ch } = card;

    let left = rect.left + rect.width / 2 - cw / 2;
    let top = rect.bottom + 8;

    if (left < 8) left = 8;
    if (left + cw > ww - 8) left = ww - cw - 8;
    if (top + ch > wh - 8) top = rect.top - ch - 8;

    setPos({ left, top });
  }, []);

  const handleOpen = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpen(true);
    }, openDelay);
  }, [openDelay]);

  const handleClose = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, closeDelay);
  }, [closeDelay]);

  useLayoutEffect(() => {
    if (!open || !triggerRef.current || !cardRef.current) return;

    // Standardizing position updates with ResizeObserver to avoid ESLint warnings
    const observer = new ResizeObserver(() => updatePosition());
    observer.observe(triggerRef.current);
    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [open, updatePosition]);

  return (
    <div
      style={{ display: 'inline-block' }}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      {renderTrigger({ ref: triggerRef })}

      {open &&
        createPortal(
          <div
            ref={cardRef}
            className="pittorica-hover-card-content"
            style={{ top: pos.top, left: pos.left }}
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleClose}
          >
            {children}
          </div>,
          document.body
        )}
    </div>
  );
};
