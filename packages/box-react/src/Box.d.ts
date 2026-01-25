import React, { type ElementType, type ReactNode } from 'react';

import { type Sprinkles } from '@pittorica/styles';
export type BoxProps<T extends ElementType = 'div'> = {
  as?: T;
  className?: string;
  children?: ReactNode;
  ref?: React.Ref<Element>;
} & Sprinkles &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Sprinkles | 'as' | 'ref'>;
declare function Box<T extends ElementType = 'div'>(
  props: BoxProps<T>
): React.ReactElement;
declare namespace Box {
  var displayName: string;
}
export { Box };
//# sourceMappingURL=Box.d.ts.map
