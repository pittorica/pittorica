import React, { type ComponentPropsWithRef, type ElementType } from 'react';

import { clsx } from 'clsx';

import type {
  PittoricaPosition,
  PittoricaResponsive,
  PittoricaResponsiveDisplay,
  PittoricaSpace,
} from '../../types';

interface BoxOwnProps<E extends ElementType> {
  /**
   * The component or HTML tag to render.
   * @default 'div'
   */
  as?: E;
  display?: PittoricaResponsiveDisplay;
  m?: PittoricaSpace | `${PittoricaSpace}`;
  mt?: PittoricaSpace | `${PittoricaSpace}`;
  mr?: PittoricaSpace | `${PittoricaSpace}`;
  mb?: PittoricaSpace | `${PittoricaSpace}`;
  ml?: PittoricaSpace | `${PittoricaSpace}`;
  mx?: PittoricaSpace | `${PittoricaSpace}`;
  my?: PittoricaSpace | `${PittoricaSpace}`;
  p?: PittoricaSpace | `${PittoricaSpace}`;
  pt?: PittoricaSpace | `${PittoricaSpace}`;
  pr?: PittoricaSpace | `${PittoricaSpace}`;
  pb?: PittoricaSpace | `${PittoricaSpace}`;
  pl?: PittoricaSpace | `${PittoricaSpace}`;
  px?: PittoricaSpace | `${PittoricaSpace}`;
  py?: PittoricaSpace | `${PittoricaSpace}`;
  width?: PittoricaResponsive<string>;
  height?: PittoricaResponsive<string>;
  position?: PittoricaPosition;
  disabled?: boolean;
  required?: boolean;
}

export type BoxProps<E extends ElementType> = BoxOwnProps<E> &
  Omit<ComponentPropsWithRef<E>, keyof BoxOwnProps<E>>;

export const Box = <E extends ElementType = 'div'>({
  as,
  children,
  display,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  width,
  height,
  position,
  style,
  className,
  disabled,
  required,
  ...props
}: BoxProps<E>) => {
  const Tag = as || 'div';

  const utilityStyles: React.CSSProperties &
    Record<string, string | undefined> = {};

  if (position) utilityStyles.position = position;

  // --- Responsive Prop Mapping ---
  const applyResponsiveStyle = (
    propName: 'width' | 'height' | 'display',
    value: PittoricaResponsive<string> | undefined
  ) => {
    if (!value) return;

    if (typeof value === 'string') {
      utilityStyles[propName] = value;
    } else {
      if (value.initial) utilityStyles[propName] = value.initial;
      if (value.xs) utilityStyles[`--pittorica-box-${propName}-xs`] = value.xs;
      if (value.sm) utilityStyles[`--pittorica-box-${propName}-sm`] = value.sm;
      if (value.md) utilityStyles[`--pittorica-box-${propName}-md`] = value.md;
      if (value.lg) utilityStyles[`--pittorica-box-${propName}-lg`] = value.lg;
      if (value.xl) utilityStyles[`--pittorica-box-${propName}-xl`] = value.xl;
    }
  };

  applyResponsiveStyle('width', width);
  applyResponsiveStyle('height', height);
  applyResponsiveStyle('display', display as PittoricaResponsive<string>);

  // --- Margin Mapping ---
  if (m !== undefined) utilityStyles.margin = `var(--pittorica-space-${m})`;
  if (mt !== undefined)
    utilityStyles.marginTop = `var(--pittorica-space-${mt})`;
  if (mr !== undefined)
    utilityStyles.marginRight = `var(--pittorica-space-${mr})`;
  if (mb !== undefined)
    utilityStyles.marginBottom = `var(--pittorica-space-${mb})`;
  if (ml !== undefined)
    utilityStyles.marginLeft = `var(--pittorica-space-${ml})`;

  // Axis Mapping (mx, my)
  if (mx !== undefined) {
    utilityStyles.marginLeft = `var(--pittorica-space-${mx})`;
    utilityStyles.marginRight = `var(--pittorica-space-${mx})`;
  }
  if (my !== undefined) {
    utilityStyles.marginTop = `var(--pittorica-space-${my})`;
    utilityStyles.marginBottom = `var(--pittorica-space-${my})`;
  }

  // --- Padding Mapping ---
  if (p !== undefined) utilityStyles.padding = `var(--pittorica-space-${p})`;
  if (pt !== undefined)
    utilityStyles.paddingTop = `var(--pittorica-space-${pt})`;
  if (pr !== undefined)
    utilityStyles.paddingRight = `var(--pittorica-space-${pr})`;
  if (pb !== undefined)
    utilityStyles.paddingBottom = `var(--pittorica-space-${pb})`;
  if (pl !== undefined)
    utilityStyles.paddingLeft = `var(--pittorica-space-${pl})`;

  // Axis Mapping (px, py)
  if (px !== undefined) {
    utilityStyles.paddingLeft = `var(--pittorica-space-${px})`;
    utilityStyles.paddingRight = `var(--pittorica-space-${px})`;
  }
  if (py !== undefined) {
    utilityStyles.paddingTop = `var(--pittorica-space-${py})`;
    utilityStyles.paddingBottom = `var(--pittorica-space-${py})`;
  }

  const finalStyles: React.CSSProperties = {
    ...style,
    ...(utilityStyles as React.CSSProperties),
  };

  return (
    <Tag
      className={clsx('pittorica-box', className)}
      style={finalStyles}
      disabled={disabled}
      required={required}
      {...props}
    >
      {children}
    </Tag>
  );
};

Box.displayName = 'Box';
