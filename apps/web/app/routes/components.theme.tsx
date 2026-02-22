import { Card, Flex, PittoricaTheme, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function ThemeRoute() {
  return (
    <DocPage
      name="Theme"
      description="PittoricaTheme is the root provider for the design system. It manages color schemes, appearance (light/dark), and spacing tokens for all nested components."
      packageName="theme-react"
      props={[
        {
          name: 'sourceColor',
          type: 'string',
          default: '"indigo"',
          description: 'The primary seed color (keyword or HEX/RGB).',
        },
        {
          name: 'appearance',
          type: '"light" | "dark" | "inherit"',
          default: '"light"',
          description: 'The color scheme.',
        },
        {
          name: 'radius',
          type: '"none" | "small" | "medium" | "large" | "full"',
          default: '"medium"',
          description: 'Global border radius.',
        },
      ]}
      examples={[
        {
          title: 'Custom Coloring',
          description: 'You can provide any CSS color to the theme.',
          code: `<PittoricaTheme sourceColor="#ff5500">
  <Card>Custom Color Theme</Card>
</PittoricaTheme>`,
          render: (
            <PittoricaTheme sourceColor="#ff5500">
              <Card
                p="4"
                style={{
                  background: 'var(--pittorica-source-3)',
                  border: '1px solid var(--pittorica-source-6)',
                }}
              >
                <Text weight="bold" color="source">
                  Custom Orange Theme
                </Text>
              </Card>
            </PittoricaTheme>
          ),
        },
        {
          title: 'Nested Theming',
          description:
            'Themes can be nested to create sections with different appearances.',
          code: `<PittoricaTheme appearance="dark">
  <Card>Dark Section</Card>
</PittoricaTheme>`,
          render: (
            <Flex gap="4">
              <PittoricaTheme appearance="light">
                <Card
                  p="4"
                  style={{
                    background: 'var(--pittorica-surface-0)',
                    width: '150px',
                  }}
                >
                  <Text weight="bold">Light</Text>
                </Card>
              </PittoricaTheme>
              <PittoricaTheme appearance="dark">
                <Card
                  p="4"
                  style={{
                    background: 'var(--pittorica-surface-0)',
                    width: '150px',
                  }}
                >
                  <Text weight="bold">Dark</Text>
                </Card>
              </PittoricaTheme>
            </Flex>
          ),
        },
      ]}
    />
  );
}
