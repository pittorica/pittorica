import { NavLink } from 'react-router';

import {
  IconBrandGithub,
  IconComponents,
  IconLayoutSidebarLeftExpand,
} from '@tabler/icons-react';

import { Avatar, Button, Card, Chip, Flex, IconButton } from '@pittorica/react';

interface AppBarProps {
  onOpenSideNav: () => void;
  onOpenComponentsSideNav: () => void;
}

export const AppBar = ({
  onOpenSideNav,
  onOpenComponentsSideNav,
}: AppBarProps) => {
  const version = import.meta.env.VITE_PITTORICA_VERSION;

  return (
    <Card as="header" className="appbar" translucent>
      <Flex align="center" justify="between" height="100%">
        <Flex align="center" gap="3">
          <IconButton
            variant="text"
            color="white"
            onClick={onOpenSideNav}
            aria-label="Open menu"
          >
            <IconLayoutSidebarLeftExpand size={20} />
          </IconButton>

          <IconButton
            as={NavLink}
            to="/"
            variant="text"
            color="white"
            aria-label="Home"
            style={{ padding: 0, width: 'auto', height: 'auto' }}
          >
            <Avatar
              src="/static/logo/square.png"
              fallback="P"
              size="2"
              style={{ boxShadow: 'none', backgroundColor: '#29294b' }}
            />
          </IconButton>
        </Flex>

        <nav>
          <Flex gap="3" align="center">
            <Chip size="1" variant="soft" color="indigo">
              v{version}
            </Chip>
            <IconButton
              as="a"
              href="https://github.com/dcdavidev/pittorica"
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              color="white"
              aria-label="GitHub"
            >
              <IconBrandGithub size={20} />
            </IconButton>

            <Button
              variant="tonal"
              color="amber"
              onClick={onOpenComponentsSideNav}
            >
              <Flex gap="2" align="center">
                <IconComponents size={20} />
                Components
              </Flex>
            </Button>
          </Flex>
        </nav>
      </Flex>
    </Card>
  );
};
