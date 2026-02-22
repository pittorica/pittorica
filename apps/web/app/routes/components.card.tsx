import { Avatar, Box, Card, Flex, Heading, Text } from '@pittorica/react';

import { DocPage } from '../components/DocPage';

export default function CardRoute() {
  return (
    <DocPage
      name="Card"
      description="Card is a container for grouped content. It supports surface variants, outlining, and a unique translucent glassmorphism effect."
      packageName="card-react"
      props={[
        {
          name: 'variant',
          type: '"surface" | "outlined" | "ghost"',
          default: 'surface',
          description: 'The visual style of the card.',
        },
        {
          name: 'translucent',
          type: 'boolean',
          default: 'false',
          description: 'If true, applies a glassmorphism effect.',
        },
        {
          name: 'as',
          type: 'ElementType',
          default: 'div',
          description: 'The component or HTML tag to render.',
        },
      ]}
      examples={[
        {
          title: 'Basic Card',
          description: 'A standard surface card with some content.',
          code: `<Card p="4" style={{ width: '300px' }}>
  <Heading size="3" mb="2">Card Title</Heading>
  <Text color="gray">This is a basic card with default surface styling.</Text>
</Card>`,
          render: (
            <Card p="4" style={{ width: '300px' }}>
              <Heading size="3" mb="2">
                Card Title
              </Heading>
              <Text color="gray">
                This is a basic card with default surface styling.
              </Text>
            </Card>
          ),
        },
        {
          title: 'Glass Card',
          description: 'A translucent card rendered on a colorful background.',
          code: `<Box p="8" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '8px' }}>
  <Card translucent p="4" style={{ width: '300px' }}>
    <Flex gap="3" align="center" mb="3">
      <Avatar fallback="JD" />
      <Box>
        <Text weight="bold">Jane Doe</Text>
        <Text size="1" color="slate">Software Engineer</Text>
      </Box>
    </Flex>
    <Text size="2">translucent cards adapt to the background color behind them.</Text>
  </Card>
</Box>`,
          render: (
            <Box
              p="8"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '8px',
              }}
            >
              <Card translucent p="4" style={{ width: '300px' }}>
                <Flex gap="3" align="center" mb="3">
                  <Avatar fallback="JD" />
                  <Box>
                    <Text weight="bold">Jane Doe</Text>
                    <Text size="1" color="slate">
                      Software Engineer
                    </Text>
                  </Box>
                </Flex>
                <Text size="2">
                  translucent cards adapt to the background color behind them.
                </Text>
              </Card>
            </Box>
          ),
        },
      ]}
    />
  );
}
