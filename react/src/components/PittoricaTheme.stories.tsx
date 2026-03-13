import type { Meta, StoryObj } from '@storybook/react-vite';

import { PittoricaTheme } from './PittoricaTheme';

const meta: Meta<typeof PittoricaTheme> = {
  title: 'Components/PittoricaTheme',
  component: PittoricaTheme,
  args: {
    children: 'PittoricaTheme content',
  },
};

export default meta;
type Story = StoryObj<typeof PittoricaTheme>;

export const Default: Story = {};
