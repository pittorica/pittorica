import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Interactive/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'teal', 'amber', 'red', 'slate', 'source'], // Added 'source'
    },
    disabled: { control: 'boolean' },
    required: {
      control: 'boolean',
      description: 'Marks the slider as required',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onClick: fn(),
    defaultValue: 50,
    color: 'indigo',
  },
  render: (args) => (
    <div style={{ padding: '2rem', width: '300px' }}>
      {' '}
      {/* Added padding */}
      <Slider {...args} />
    </div>
  ),
};

export const Stepped: Story = {
  args: {
    min: 0,
    max: 10,
    step: 2,
    color: 'orange',
  },
  render: (args) => (
    <div style={{ padding: '2rem', width: '300px' }}>
      {' '}
      {/* Added padding */}
      <Slider {...args} />
    </div>
  ),
};

export const RequiredExample: Story = {
  args: {
    required: true,
    color: 'source',
    label: 'Volume',
  },
  render: (args) => (
    <div style={{ padding: '2rem', width: '300px' }}>
      {' '}
      {/* Added padding */}
      <Slider {...args} defaultValue={20} />
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <PittoricaTheme
      appearance="dark"
      style={{
        padding: '2rem',
        background: 'var(--pittorica-surface-0)',
        borderRadius: '8px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Slider defaultValue={30} color="source" />
      <Slider defaultValue={70} color="indigo" />
      <Slider defaultValue={50} color="red" disabled />
    </PittoricaTheme>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const element =
      canvas.queryByRole('button') ||
      canvas.queryByRole('checkbox') ||
      canvas.queryByRole('radio');
    if (element) {
      await userEvent.click(element);
      if (args.onClick) {
        await expect(args.onClick).toHaveBeenCalled();
      }
    }
  },
};
