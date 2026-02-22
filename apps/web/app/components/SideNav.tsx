import { NavLink } from 'react-router';

import { Flex, Link, Sheet } from '@pittorica/react';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideNav = ({ isOpen, onClose }: SideNavProps) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose} side="left" title="menu">
      <Flex direction="column" gap="3">
        <Link as={NavLink} to="/" color="inherit" onClick={onClose}>
          Home
        </Link>
      </Flex>
    </Sheet>
  );
};
