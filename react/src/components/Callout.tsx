import { type ElementType } from 'react';

import { clsx } from 'clsx';

import type {
  PittoricaColor,
  PittoricaResponsive,
  PittoricaScale,
} from '../types';
import { Box, type BoxProps } from './Box';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type CalloutRootProps<E extends ElementType = 'div'> = BoxProps<E> & {
  /** @default 'soft' */
  variant?: 'soft' | 'outline';
  /** @default 'indigo' */
  color?: PittoricaColor;
  /** @default 'md' */
  size?: PittoricaResponsive<PittoricaScale>;
  /** @default 'row' */
  direction?: PittoricaResponsive<'row' | 'column'>;
  /** @default 'start' */
  align?: PittoricaResponsive<'start' | 'center' | 'end'>;
  children: React.ReactNode;
};

const CalloutRoot = <E extends ElementType = 'div'>({
  variant = 'soft',
  color = 'indigo',
  size = 'md',
  direction = 'row',
  align = 'start',
  children,
  className,
  style,
  as,
  ...props
}: CalloutRootProps<E>) => {
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');

  const resolvedBg = isSemantic
    ? `var(--pittorica-${color}-3)`
    : `color-mix(in srgb, ${color} 12%, var(--pittorica-white))`;

  const resolvedText = isSemantic
    ? `var(--pittorica-${color}-11)`
    : `color-mix(in srgb, ${color} 80%, var(--pittorica-black))`;

  const resolvedBorder = isSemantic
    ? `var(--pittorica-${color}-6)`
    : `color-mix(in srgb, ${color} 20%, transparent)`;

  const Tag = as || 'div';

  const generateResponsiveClasses = (
    prefix: string,
    value: PittoricaResponsive<string>
  ) => {
    if (typeof value === 'string') {
      return `${prefix}-${value}`;
    }

    return clsx({
      [`${prefix}-${value.initial}`]: value.initial,
      [`${prefix}-xs-${value.xs}`]: value.xs,
      [`${prefix}-sm-${value.sm}`]: value.sm,
      [`${prefix}-md-${value.md}`]: value.md,
      [`${prefix}-lg-${value.lg}`]: value.lg,
      [`${prefix}-xl-${value.xl}`]: value.xl,
    });
  };

  return (
    <Box
      as={Tag as ElementType}
      className={clsx(
        'pittorica-callout',
        `pittorica-callout--${variant}`,
        generateResponsiveClasses('pittorica-callout--size', size),
        generateResponsiveClasses('pittorica-callout--dir', direction),
        generateResponsiveClasses('pittorica-callout--align', align),
        className
      )}
      style={
        {
          '--_callout-bg': resolvedBg,
          '--_callout-text': resolvedText,
          '--_callout-border': resolvedBorder,
          ...style,
        } as React.CSSProperties
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
