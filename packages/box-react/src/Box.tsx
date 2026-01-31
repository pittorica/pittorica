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
  /**
   * Compose class names using clsx for better readability and performance.
   */
  const composedClasses = clsx('pittorica-box', className);

  /**
   * Map spacing props to our CSS tokens via inline styles.
   */
  const customStyles: React.CSSProperties = {
    ...style,
    display,
    width,
    height,
    position,
    margin: m ? `var(--pittorica-space-${m})` : undefined,
    marginTop: mt ? `var(--pittorica-space-${mt})` : undefined,
    marginRight: mr ? `var(--pittorica-space-${mr})` : undefined,
    marginBottom: mb ? `var(--pittorica-space-${mb})` : undefined,
    marginLeft: ml ? `var(--pittorica-space-${ml})` : undefined,
    padding: p ? `var(--pittorica-space-${p})` : undefined,
    paddingTop: pt ? `var(--pittorica-space-${pt})` : undefined,
    paddingRight: pr ? `var(--pittorica-space-${pr})` : undefined,
    paddingBottom: pb ? `var(--pittorica-space-${pb})` : undefined,
    paddingLeft: pl ? `var(--pittorica-space-${pl})` : undefined,
  };

  return (
    <Tag className={composedClasses} style={customStyles} {...props}>
      {children}
    </Tag>
  );
};
