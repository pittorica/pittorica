import { Flex, Sheet } from '@pittorica/react';

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
      <Flex direction="column" gap="3">
        {/* Placeholder for future component links */}
        <p style={{ opacity: 0.6, fontSize: 'var(--pittorica-font-size-2)' }}>
          Component list will appear here.
        </p>
      </Flex>
    </Sheet>
  );
};
