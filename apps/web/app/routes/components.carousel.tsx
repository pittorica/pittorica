import { Box, Carousel } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function CarouselRoute() {
  return (
    <DocPage
      name="Carousel"
      description="Carousel is a rotating showcase of items. It supports glass-blur backgrounds, responsive item scaling, and a fullscreen lightbox mode."
      packageName="carousel-react"
      props={[
        {
          name: 'defaultIndex',
          type: 'number',
          default: '0',
          description: 'Initial active slide.',
        },
        {
          name: 'appearance',
          type: '"light" | "dark" | "inherit"',
          description: 'Theme override.',
        },
      ]}
      examples={[
        {
          title: 'Basic Carousel',
          description: 'A responsive carousel with navigation and dots.',
          code: `<Carousel.Root>
  <Carousel.Item src="img1.jpg" alt="Item 1">
    <Carousel.Description>Description for Item 1</Carousel.Description>
  </Carousel.Item>
  <Carousel.Item src="img2.jpg" alt="Item 2">
    <Carousel.Description>Description for Item 2</Carousel.Description>
  </Carousel.Item>
</Carousel.Root>`,
          render: (
            <Box width="100%">
              <Carousel.Root>
                <Carousel.Item
                  src="https://picsum.photos/id/10/800/1200"
                  alt="Mountain"
                >
                  <Carousel.Description>Mountain Retreat</Carousel.Description>
                </Carousel.Item>
                <Carousel.Item
                  src="https://picsum.photos/id/14/800/1200"
                  alt="Urban"
                >
                  <Carousel.Description>Urban Jungle</Carousel.Description>
                </Carousel.Item>
                <Carousel.Item
                  src="https://picsum.photos/id/15/800/1200"
                  alt="Ocean"
                >
                  <Carousel.Description>Ocean Breeze</Carousel.Description>
                </Carousel.Item>
              </Carousel.Root>
            </Box>
          ),
        },
      ]}
    />
  );
}
