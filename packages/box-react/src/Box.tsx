import React, { type ElementType, type ReactNode } from 'react';

import clsx from 'clsx';

import { type Sprinkles, sprinkles } from '@pittorica/styles';

export type BoxProps<T extends ElementType = 'div'> = {
  as?: T;
  className?: string;
  children?: ReactNode;
  ref?: React.Ref<Element>;
} & Sprinkles &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Sprinkles | 'as' | 'ref'>;

function Box<T extends ElementType = 'div'>(
  props: BoxProps<T>
): React.ReactElement {
  const { as: Component = 'div', className, children, ref, ...rest } = props;

  const sprinkleProps: Record<string, unknown> = {};
  const htmlProps: Record<string, unknown> = {};

  for (const key of Object.keys(rest)) {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      sprinkleProps[key] = rest[key as keyof typeof rest];
    } else {
      htmlProps[key] = rest[key as keyof typeof rest];
    }
  }

  const atomicClasses = sprinkles(sprinkleProps as Sprinkles);

  return (
    <Component
      ref={ref}
      className={clsx(atomicClasses, className)}
      {...(htmlProps as React.ComponentPropsWithoutRef<T>)}
    >
      {children}
    </Component>
  );
}

Box.displayName = 'Box';

export { Box };
