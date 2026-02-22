import { NavLink } from 'react-router';

import { Box, Flex, Heading, Link, Sheet } from '@pittorica/react';

import { componentGroups, formatComponentName } from '../configs/components';

interface ComponentsSideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComponentsSideNav = ({
  isOpen,
  onClose,
}: ComponentsSideNavProps) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose} side="right" title="Components">
      <Flex direction="column" gap="5">
        {componentGroups.map((group) => (
          <Box key={group.title}>
            <Heading
              size="2"
              weight="bold"
              color="gray"
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 'var(--pittorica-space-3)',
                opacity: 0.6,
              }}
            >
              {group.title}
            </Heading>
            <Flex direction="column" gap="2">
              {group.components.map((component) => (
                <Link
                  key={component}
                  as={NavLink}
                  to={`/components/${component}`}
                  color="inherit"
                  onClick={onClose}
                  style={{
                    fontSize: 'var(--pittorica-font-size-2)',
                    paddingLeft: 'var(--pittorica-space-1)',
                  }}
                >
                  {formatComponentName(component)}
                </Link>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Sheet>
  );
};
