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
        <Link as={NavLink} to="/get-started" color="inherit" onClick={onClose}>
          Get Started
        </Link>
        <Link as={NavLink} to="/theming" color="inherit" onClick={onClose}>
          Theming
        </Link>
        <Link as={NavLink} to="/typography" color="inherit" onClick={onClose}>
          Typography
        </Link>
      </Flex>
    </Sheet>
  );
};
