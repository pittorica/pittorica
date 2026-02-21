import { Box } from '@pittorica/box-react';
import { Button } from '@pittorica/button-react';
import { PittoricaTheme } from '@pittorica/theme-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from './Carousel.js';

/**
 * MD3 Hero Carousel with Glass-Blur background.
 * Features "contain" scaling for full image visibility and responsive slots.
 */
const meta: Meta<typeof Carousel.Root> = {
  title: 'Media/Carousel',
  tags: ['autodocs'],
  component: Carousel.Root,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Carousel>;

export default meta;

const mockImages = [
  {
    id: 10,
    title: 'Mountain Retreat',
    desc: 'Experience the serenity of the peaks.',
  },
  { id: 14, title: 'Urban Jungle', desc: 'Explore the city hidden gems.' },
  { id: 15, title: 'Ocean Breeze', desc: 'Calm waters and golden sunsets.' },
  { id: 16, title: 'Desert Sands', desc: 'Discover the dunes.' },
  { id: 19, title: 'Forest Path', desc: 'Green trails through ancient trees.' },
];

export const Default: StoryObj<typeof Carousel.Root> = {
  render: (args) => (
    <Box p="4">
      <Carousel.Root {...args}>
        {mockImages.map((img) => (
          <Carousel.Item
            key={img.id}
            src={`https://picsum.photos/id/${img.id}/800/1200`}
            alt={img.title}
          >
            <Carousel.Description>
              {img.title}
              <br />
              <span
                style={{
                  fontSize: '0.8em',
                  opacity: 0.8,
                  fontWeight: 'normal',
                }}
              >
                {img.desc}
              </span>
              <Box mt="3">
                <Button as="a" href="https://google.com" target="_blank">
                  View more
                </Button>
              </Box>
            </Carousel.Description>
          </Carousel.Item>
        ))}
      </Carousel.Root>
    </Box>
  ),
};

export const DarkMode: StoryObj<typeof Carousel.Root> = {
  render: (args) => (
    <PittoricaTheme
      appearance="dark"
      style={{ padding: '2rem', background: 'var(--pittorica-surface-0)' }}
    >
      <Carousel.Root {...args} appearance="dark">
        {mockImages.slice(0, 3).map((img) => (
          <Carousel.Item
            key={img.id}
            src={`https://picsum.photos/id/${img.id}/800/1200`}
            alt={img.title}
          >
            <Carousel.Description>
              {img.title}
              <br />
              <span
                style={{
                  fontSize: '0.8em',
                  opacity: 0.8,
                  fontWeight: 'normal',
                }}
              >
                {img.desc}
              </span>
            </Carousel.Description>
          </Carousel.Item>
        ))}
      </Carousel.Root>
    </PittoricaTheme>
  ),
};

/**
 * Demonstrates the contained layout where landscape or portrait images
 * are fully visible without cropping.
 */
export const MixedAspectRatios: StoryObj<typeof Carousel.Root> = {
  render: (args) => (
    <Box p="4">
      <Carousel.Root {...args}>
        <Carousel.Item
          src="https://picsum.photos/id/10/800/1200"
          alt="Portrait"
        />
        <Carousel.Item
          src="https://picsum.photos/id/20/1200/800"
          alt="Landscape"
        />
        <Carousel.Item
          src="https://picsum.photos/id/30/1000/1000"
          alt="Square"
        />
      </Carousel.Root>
    </Box>
  ),
};
