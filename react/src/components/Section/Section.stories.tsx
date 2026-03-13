import type { Meta, StoryObj } from '@storybook/react-vite';

import { Container } from '../Container';
import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Section } from './Section';

const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
  argTypes: {
    size: {
      control: 'select',
      options: ['1', '2', '3', '4'],
    },
    as: {
      control: 'select',
      options: ['section', 'div', 'header', 'footer'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    size: '3',
    children: (
      <Container>
        <Heading size="8" mb="4">
          Section Title
        </Heading>
        <Text as="p">
          Sections provide vertical spacing for high-level page layout. They are
          designed to wrap containers and content to create balanced, airy
          interfaces.
        </Text>
      </Container>
    ),
    style: { background: 'var(--pittorica-slate-2)' },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Flex direction="column" gap="4">
      <Section
        {...args}
        size="1"
        style={{ background: 'var(--pittorica-indigo-2)' }}
      >
        <Container>
          <Text weight="bold">Size 1</Text>
          <Text size="2" color="slate">
            Smallest vertical padding.
          </Text>
        </Container>
      </Section>
      <Section
        {...args}
        size="2"
        style={{ background: 'var(--pittorica-teal-2)' }}
      >
        <Container>
          <Text weight="bold">Size 2</Text>
          <Text size="2" color="slate">
            Medium-small vertical padding.
          </Text>
        </Container>
      </Section>
      <Section
        {...args}
        size="3"
        style={{ background: 'var(--pittorica-amber-2)' }}
      >
        <Container>
          <Text weight="bold">Size 3</Text>
          <Text size="2" color="slate">
            Standard large vertical padding (default).
          </Text>
        </Container>
      </Section>
      <Section
        {...args}
        size="4"
        style={{ background: 'var(--pittorica-crimson-2)' }}
      >
        <Container>
          <Text weight="bold">Size 4</Text>
          <Text size="2" color="slate">
            Largest vertical padding, ideal for hero sections.
          </Text>
        </Container>
      </Section>
    </Flex>
  ),
};

export const Polymorphic: Story = {
  args: {
    as: 'footer',
    size: '2',
    style: {
      background: 'var(--pittorica-slate-9)',
      color: 'var(--pittorica-white)',
    },
    children: (
      <Container>
        <Flex justify="between" align="center">
          <Text weight="bold">Pittorica UI</Text>
          <Text size="2">© 2026. All rights reserved.</Text>
        </Flex>
      </Container>
    ),
  },
};
