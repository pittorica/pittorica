import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from './Avatar';
import { Button } from './Button';
import { Flex } from './Flex';
import { HoverCard } from './HoverCard';
import { Link } from './Link';
import { Text } from './Text';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    openDelay: { control: 'number' },
    closeDelay: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {
    renderTrigger: ({ ref }) => (
      <Link ref={ref as React.RefObject<HTMLAnchorElement>} href="#">
        @pittorica_ui
      </Link>
    ),
    children: (
      <Flex direction="column" gap="3">
        <Avatar
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
          fallback="PI"
          size="5"
        />
        <div>
          <Text weight="bold" display="block">
            Pittorica UI
          </Text>
          <Text size="2" color="slate">
            @pittorica_ui
          </Text>
        </div>
        <Text size="2">
          A painterly, CSS-first UI framework that brings elegant, lightweight
          structure to modern interfaces.
        </Text>
        <Flex gap="3">
          <Text size="2">
            <Text weight="bold">1.2k</Text> Following
          </Text>
          <Text size="2">
            <Text weight="bold">24.5k</Text> Followers
          </Text>
        </Flex>
      </Flex>
    ),
  },
};

export const Instant: Story = {
  ...Default,
  args: {
    ...Default.args,
    openDelay: 0,
    closeDelay: 0,
    renderTrigger: ({ ref }) => (
      <Button ref={ref as React.RefObject<HTMLButtonElement>} variant="tonal">
        Instant Hover
      </Button>
    ),
  },
};

export const CustomContent: Story = {
  args: {
    renderTrigger: ({ ref }) => (
      <Text
        ref={ref as React.RefObject<HTMLSpanElement>}
        style={{ textDecoration: 'underline', cursor: 'help' }}
      >
        Hover for info
      </Text>
    ),
    children: (
      <div style={{ textAlign: 'center' }}>
        <Text weight="bold" size="4" display="block" mb="2">
          Did you know?
        </Text>
        <Text size="2">
          You can use any component inside a HoverCard. It's fully agnostic and
          renders in a portal for maximum safety.
        </Text>
      </div>
    ),
  },
};
