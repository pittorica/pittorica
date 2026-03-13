import type { Meta, StoryObj } from '@storybook/react-vite';

import { Box } from './Box';
import { HeroText } from './HeroText';

const meta: Meta<typeof HeroText> = {
  title: 'Typography/HeroText',
  component: HeroText,
  args: {
    text: 'PITTORICA',
  },
  decorators: [
    (Story) => (
      <Box p="8" style={{ background: 'var(--pittorica-surface-0)' }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HeroText>;

export const Default: Story = {};

export const LongText: Story = {
  args: {
    text: 'RESPONSIVE HEADING',
  },
};
