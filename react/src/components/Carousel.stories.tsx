import type { Meta, StoryObj } from '@storybook/react-vite';

import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel.Root> = {
  title: 'Navigation/Carousel',
  component: Carousel.Root,
  args: {
    children: [
      <Carousel.Item
        key="1"
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop"
        alt="Coding"
      >
        <Carousel.Description>
          Building the future with code.
        </Carousel.Description>
      </Carousel.Item>,
      <Carousel.Item
        key="2"
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop"
        alt="Workspace"
      >
        <Carousel.Description>Design meets functionality.</Carousel.Description>
      </Carousel.Item>,
      <Carousel.Item
        key="3"
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop"
        alt="Development"
      >
        <Carousel.Description>
          Scalable architecture for modern apps.
        </Carousel.Description>
      </Carousel.Item>,
      <Carousel.Item
        key="4"
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
        alt="Laptop"
      >
        <Carousel.Description>
          Crafting seamless user experiences.
        </Carousel.Description>
      </Carousel.Item>,
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Carousel.Root>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    children: [
      <Carousel.Item key="1">
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--pittorica-indigo-3)',
            color: 'var(--pittorica-indigo-11)',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          Slide 1
        </div>
      </Carousel.Item>,
      <Carousel.Item key="2">
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--pittorica-crimson-3)',
            color: 'var(--pittorica-crimson-11)',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          Slide 2
        </div>
      </Carousel.Item>,
      <Carousel.Item key="3">
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--pittorica-teal-3)',
            color: 'var(--pittorica-teal-11)',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          Slide 3
        </div>
      </Carousel.Item>,
    ],
  },
};
