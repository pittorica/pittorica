import {
  IconChevronDown,
  IconLogout,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';

import { Button, DropdownMenu, DropdownMenuItem } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function DropdownMenuRoute() {
  return (
    <DocPage
      name="DropdownMenu"
      description="DropdownMenu displays a list of actions or options that a user can choose from after clicking a trigger element."
      packageName="dropdown-menu-react"
      props={[
        {
          name: 'renderTrigger',
          type: '(props: { ref, onClick }) => ReactNode',
          description: 'Function to render the trigger element.',
        },
        {
          name: 'itemCount',
          type: 'number',
          description: 'Total number of items (for keyboard navigation).',
        },
        { name: 'children', type: 'ReactNode', description: 'Menu items.' },
      ]}
      examples={[
        {
          title: 'Account Menu',
          description: 'A standard dropdown with icons.',
          code: `<DropdownMenu
  itemCount={3}
  renderTrigger={({ ref, onClick }) => (
    <span ref={ref} onClick={onClick}>
      <Button>Options <IconChevronDown size={16} /></Button>
    </span>
  )}
>
  <DropdownMenuItem index={0} icon={<IconUser size={18} />}>Profile</DropdownMenuItem>
  <DropdownMenuItem index={1} icon={<IconSettings size={18} />}>Settings</DropdownMenuItem>
  <DropdownMenuItem index={2} icon={<IconLogout size={18} />} color="red">Logout</DropdownMenuItem>
</DropdownMenu>`,
          render: (
            <DropdownMenu
              itemCount={3}
              renderTrigger={({ ref, onClick }) => (
                <span
                  ref={ref as React.RefObject<HTMLSpanElement>}
                  onClick={onClick}
                >
                  <Button>
                    Options <IconChevronDown size={16} />
                  </Button>
                </span>
              )}
            >
              <DropdownMenuItem index={0} icon={<IconUser size={18} />}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem index={1} icon={<IconSettings size={18} />}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                index={2}
                icon={<IconLogout size={18} />}
                style={{ color: 'var(--pittorica-red-9)' }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenu>
          ),
        },
      ]}
    />
  );
}
