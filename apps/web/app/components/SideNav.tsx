import { NavLink } from 'react-router';

import { Divider, Flex, Link, Sheet } from '@pittorica/react';

import { useCookieConsent } from '../hooks/use-cookie-consent';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideNav = ({ isOpen, onClose }: SideNavProps) => {
  const { showPreferences } = useCookieConsent();

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

        <Divider variant="solid" color="gray" style={{ margin: '1rem 0' }} />

        <Link as={NavLink} to="/privacy" color="inherit" onClick={onClose}>
          Privacy Policy
        </Link>
        <Link as={NavLink} to="/terms" color="inherit" onClick={onClose}>
          Terms of Service
        </Link>
        <Link
          as="button"
          color="inherit"
          onClick={() => {
            onClose();
            showPreferences();
          }}
          style={{ display: 'flex', justifyContent: 'start' }}
        >
          Cookie Preferences
        </Link>
      </Flex>
    </Sheet>
  );
};
