import React, { CSSProperties } from 'react';

import type {
  PittoricaAppearance,
  PittoricaColor,
  PittoricaRadius,
} from '../../types';

export type ThemeAppearance = PittoricaAppearance | 'inherit';

export interface PittoThemeProps {
  children: React.ReactNode;
  sourceColor?: PittoricaColor;
  appearance?: ThemeAppearance;
  radius?: PittoricaRadius;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

export const PittoricaTheme = ({
  children,
  sourceColor = 'indigo',
  appearance = 'light',
  radius = 'medium',
  className,
  style,
  id,
}: PittoThemeProps) => {
  const isCustomColor =
    typeof sourceColor === 'string' &&
    (sourceColor.startsWith('#') || sourceColor.startsWith('rgb'));

  const containerProps = {
    id,
    className: ['pittorica-theme', className].filter(Boolean).join(' '),
    'data-source-color': isCustomColor ? 'custom' : sourceColor,
    'data-appearance': appearance,
    'data-radius': radius,
    style: {
      ...style,
      ...(isCustomColor ? { '--pittorica-source-color': sourceColor } : {}),
    } as CSSProperties,
  };

  return <div {...containerProps}>{children}</div>;
};
