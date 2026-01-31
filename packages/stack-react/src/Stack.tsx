import { Flex, type FlexProps } from '@pittorica/flex-react';

/**
 * Stack component for vertical layouts.
 * Inherits all properties from Flex but defaults direction to 'column'.
 */
export const Stack = (props: FlexProps) => {
  return <Flex direction="column" {...props} />;
};
