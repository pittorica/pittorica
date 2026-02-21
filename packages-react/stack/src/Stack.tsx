import { type ElementType } from 'react';

import { Flex, type FlexProps } from '@pittorica/flex-react';

/**
 * Stack component for vertical or horizontal linear layouts.
 * Inherits all properties from Flex but defaults direction to 'column'.
 */
export const Stack = <E extends ElementType = 'div'>({
  direction = 'column',
  ...props
}: FlexProps<E>) => {
  return <Flex direction={direction} {...props} />;
};

Stack.displayName = 'Stack';
