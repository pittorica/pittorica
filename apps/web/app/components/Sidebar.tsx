import { Link } from 'react-router';

import { Box, Flex, Sheet, Text } from '@pittorica/react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Sidebar component using Sheet for navigation.
 * Closes automatically upon link interaction.
 */
export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <Sheet side="left" isOpen={isOpen} onClose={onClose} title="Navigation">
      <Flex direction="column" gap="1">
        {/* Logic: Wrap Link in a Box for styling and trigger onClose
          to dismiss the sheet overlay when a route change occurs.
        */}
        <Box
          as={Link}
          to="/"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Home</Text>
        </Box>

        <Box
          as={Link}
          to="/components"
          onClick={onClose}
          p="3"
          style={{
            textDecoration: 'none',
            borderRadius: 'var(--pittorica-radius-3)',
            color: 'inherit',
            transition: 'background-color 0.2s ease',
          }}
          className="pittorica-nav-item"
        >
          <Text weight="medium">Components</Text>
        </Box>
      </Flex>
    </Sheet>
  );
};
