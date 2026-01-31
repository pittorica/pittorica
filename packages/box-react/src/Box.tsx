import React from 'react';

import { clsx } from 'clsx';

type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  display?:
    | 'none'
    | 'inline'
    | 'block'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid';
  m?: Spacing;
  mt?: Spacing;
  mr?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
  p?: Spacing;
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
  width?: string;
  height?: string;
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
}

export const Box = ({
  as: Tag = 'div',
  children,
  display,
  m,
  mt,
  mr,
  mb,
  ml,
  p,
  pt,
  pr,
  pb,
  pl,
  width,
  height,
  position,
  style,
  className,
  ...props
}: BoxProps) => {
  const customStyles: React.CSSProperties = { ...style };

  if (display) customStyles.display = display;
  if (width) customStyles.width = width;
  if (height) customStyles.height = height;
  if (position) customStyles.position = position;

  // Mapping layout props only if they exist
  if (m) customStyles.margin = `var(--pittorica-space-${m})`;
  if (mt) customStyles.marginTop = `var(--pittorica-space-${mt})`;
  if (mr) customStyles.marginRight = `var(--pittorica-space-${mr})`;
  if (mb) customStyles.marginBottom = `var(--pittorica-space-${mb})`;
  if (ml) customStyles.marginLeft = `var(--pittorica-space-${ml})`;

  if (p) customStyles.padding = `var(--pittorica-space-${p})`;
  if (pt) customStyles.paddingTop = `var(--pittorica-space-${pt})`;
  if (pr) customStyles.paddingRight = `var(--pittorica-space-${pr})`;
  if (pb) customStyles.paddingBottom = `var(--pittorica-space-${pb})`;
  if (pl) customStyles.paddingLeft = `var(--pittorica-space-${pl})`;

  return (
    <Tag
      className={clsx('pittorica-box', className)}
      style={customStyles}
      {...props}
    >
      {children}
    </Tag>
  );
};
