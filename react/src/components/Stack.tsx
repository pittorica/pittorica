import { type ElementType } from 'react';

import { Flex, type FlexProps } from './Flex';

/**
 * Stack component for vertical or horizontal linear layouts.
 * Inherits all properties from Flex but defaults direction to 'column'.
 * @param props - Props inherited from Flex component.
 * @returns The rendered Stack component.
 */
export const Stack = <E extends ElementType = 'div'>({
  direction = 'column',
  ...props
}: FlexProps<E>) => {
  return <Flex direction={direction} {...(props as FlexProps<E>)} />;
};

Stack.displayName = 'Stack';
