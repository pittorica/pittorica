import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type CalloutRootProps<E extends ElementType = 'div'> = BoxProps<E> & {
  /** @default 'soft' */
  variant?: 'soft' | 'outline';
  /** @default 'indigo' */
  color?: PittoricaColor;
  children: React.ReactNode;
};

const CalloutRoot = <E extends ElementType = 'div'>({
  variant = 'soft',
  color = 'indigo',
  children,
  className,
  style,
  as,
  ...props
}: CalloutRootProps<E>) => {
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  const Tag = as || 'div';

  return (
    <Box
      as={Tag as ElementType}
      className={clsx(
        'pittorica-callout',
        `pittorica-callout--${variant}`,
        className
      )}
      style={
        { '--_callout-color': resolvedColor, ...style } as React.CSSProperties
      }
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

const CalloutIcon = <E extends ElementType = 'div'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => (
  <Box
    as={as || 'div'}
    className={clsx('pittorica-callout-icon', className)}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

const CalloutText = <E extends ElementType = 'div'>({
  children,
  className,
  as,
  ...props
}: BoxProps<E>) => (
  <Box
    as={as || 'div'}
    className={clsx('pittorica-callout-content', className)}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

export const Callout = Object.assign(CalloutRoot, {
  Icon: CalloutIcon,
  Text: CalloutText,
});

CalloutRoot.displayName = 'Callout.Root';
CalloutIcon.displayName = 'Callout.Icon';
CalloutText.displayName = 'Callout.Text';
