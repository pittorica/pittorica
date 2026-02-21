import {
  Box,
  Card,
  Carousel,
  Code,
  Container,
  Flex,
  Heading,
  PittoricaTheme,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Carousel, Button, Box } from '@pittorica/react';

export const Example = () => {
  return (
    <Carousel.Root style={{ maxWidth: 600 }}>
      <Carousel.Item src="https://picsum.photos/id/10/800/400" alt="Mountain">
        <Carousel.Description>
          Mountain Retreat
          <Box mt="2">
            <Button size="xs">Explore</Button>
          </Box>
        </Carousel.Description>
      </Carousel.Item>
      <Carousel.Item src="https://picsum.photos/id/14/800/400" alt="City" />
    </Carousel.Root>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Carousel</Heading>
          <Text size="4" color="gray" mb="6">
            A responsive slideshow component with glass-blur effects and fluid
            positioning logic.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/carousel-react
`}
            </Code>
          </Flex>
        </Flex>

        {/* Interactive Preview */}
        <Section>
          <Heading size="4" mb="4">
            Usage Preview
          </Heading>
          <Card
            variant="outlined"
            p="9"
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Box style={{ width: '100%', maxWidth: '600px' }}>
              <Carousel.Root>
                <Carousel.Item
                  src="https://picsum.photos/id/10/800/1200"
                  alt="Mountain"
                >
                  <Carousel.Description>
                    Mountain Retreat
                    <br />
                    <Text size="1" style={{ opacity: 0.8 }}>
                      Experience the serenity of the peaks.
                    </Text>
                  </Carousel.Description>
                </Carousel.Item>
                <Carousel.Item
                  src="https://picsum.photos/id/14/800/1200"
                  alt="City"
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
          </Card>
        </Section>

        {/* Dark Mode Preview */}
        <Section>
          <Heading size="4" mb="4">
            Dark Mode Preview
          </Heading>
          <PittoricaTheme appearance="dark">
            <Card
              variant="outlined"
              p="9"
              style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'var(--pittorica-black)',
              }}
            >
              <Box style={{ width: '100%', maxWidth: '600px' }}>
                <Carousel.Root appearance="dark">
                  <Carousel.Item
                    src="https://picsum.photos/id/20/800/1200"
                    alt="Dark 1"
                  >
                    <Carousel.Description>Starlit Night</Carousel.Description>
                  </Carousel.Item>
                  <Carousel.Item
                    src="https://picsum.photos/id/21/800/1200"
                    alt="Dark 2"
                  >
                    <Carousel.Description>Midnight Echo</Carousel.Description>
                  </Carousel.Item>
                </Carousel.Root>
              </Box>
            </Card>
          </PittoricaTheme>
        </Section>

        {/* Implementation Code */}
        <Box mb="9">
          <Heading size="4" mb="4">
            Implementation
          </Heading>
          <Code language="typescript" filename="Example.tsx" showLineNumbers>
            {codeExample}
          </Code>
        </Box>

        {/* Api Reference */}
        <Section>
          <Flex direction="column" gap="4">
            <Heading size="4" mb="4">
              Api
            </Heading>

            <Box mb="6">
              <Heading size="3" mb="3">
                Carousel.Root
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Box props.
              </Text>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Prop</Table.ColumnHeader>
                    <Table.ColumnHeader>Type</Table.ColumnHeader>
                    <Table.ColumnHeader>Default</Table.ColumnHeader>
                    <Table.ColumnHeader>Description</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Code>defaultIndex</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">number</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">0</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Initial active slide index.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>appearance</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'light' | 'dark' | 'inherit'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Theme appearance of the carousel.</Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                Carousel.Item
              </Heading>
              <Text mb="4" color="gray">
                Accepts all standard Box props.
              </Text>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Prop</Table.ColumnHeader>
                    <Table.ColumnHeader>Type</Table.ColumnHeader>
                    <Table.ColumnHeader>Default</Table.ColumnHeader>
                    <Table.ColumnHeader>Description</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Code>src</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">string</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The image source URL.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>alt</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">string</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Alt text for the image.</Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
