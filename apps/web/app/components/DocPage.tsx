import { NavLink } from 'react-router';

import { IconChevronLeft } from '@tabler/icons-react';

import {
  Box,
  Button,
  Card,
  Code,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Section,
  Tabs,
  Text,
} from '@pittorica/react';

export interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface DocPageProps {
  name: string;
  description: string;
  packageName: string;
  installationCommands?: string[];
  props: PropRow[];
  examples: {
    title: string;
    description: string;
    code: string;
    render: React.ReactNode;
  }[];
}

export function DocPage({
  name,
  description,
  packageName,
  props,
  examples,
}: DocPageProps) {
  return (
    <Container>
      <Box>
        {/* Header */}
        <Section size="2">
          <Flex direction="column" gap="4" align="start">
            <Heading size="9">{name}</Heading>
            <Text size="4" color="gray" style={{ maxWidth: '700px' }}>
              {description}
            </Text>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        {/* Installation */}
        <Section size="1" id="installation">
          <Flex direction="column" gap="4">
            <Flex align="center" gap="2">
              <Link
                href="#installation"
                color="gray"
                underline="none"
                style={{ opacity: 0.5 }}
              >
                #
              </Link>
              <Heading size="6">Installation</Heading>
            </Flex>
            <Tabs.Root defaultValue="full">
              <Tabs.List>
                <Tabs.Trigger value="full">Full Library</Tabs.Trigger>
                <Tabs.Trigger value="individual">Individual</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="full">
                <Code language="bash">{`npm install pittorica @pittorica/react`}</Code>
              </Tabs.Content>
              <Tabs.Content value="individual">
                <Code language="bash">{`npm install pittorica @pittorica/${packageName}`}</Code>
              </Tabs.Content>
            </Tabs.Root>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        {/* Usage / Examples */}
        <Section size="1" id="examples">
          <Flex direction="column" gap="6">
            <Flex align="center" gap="2">
              <Link
                href="#examples"
                color="gray"
                underline="none"
                style={{ opacity: 0.5 }}
              >
                #
              </Link>
              <Heading size="6">Examples</Heading>
            </Flex>

            {examples.map((example) => (
              <Box key={example.title}>
                <Heading size="4" mb="2">
                  {example.title}
                </Heading>
                <Text mb="4" color="gray" size="2">
                  {example.description}
                </Text>
                <Card variant="outlined" p="0" style={{ overflow: 'hidden' }}>
                  <Box p="6" style={{ background: 'var(--pittorica-gray-1)' }}>
                    {example.render}
                  </Box>
                  <Divider />
                  <Code language="tsx">{example.code}</Code>
                </Card>
              </Box>
            ))}
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        {/* API Reference */}
        <Section size="1" id="api">
          <Flex direction="column" gap="4">
            <Flex align="center" gap="2">
              <Link
                href="#api"
                color="gray"
                underline="none"
                style={{ opacity: 0.5 }}
              >
                #
              </Link>
              <Heading size="6">API Reference</Heading>
            </Flex>
            <Card variant="outlined" style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  textAlign: 'left',
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: '1px solid var(--pittorica-gray-5)',
                    }}
                  >
                    <th style={{ padding: '12px' }}>Prop</th>
                    <th style={{ padding: '12px' }}>Type</th>
                    <th style={{ padding: '12px' }}>Default</th>
                    <th style={{ padding: '12px' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {props.map((prop) => (
                    <tr
                      key={prop.name}
                      style={{
                        borderBottom: '1px solid var(--pittorica-gray-3)',
                      }}
                    >
                      <td style={{ padding: '12px' }}>
                        <code>{prop.name}</code>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <code style={{ color: 'var(--pittorica-teal-11)' }}>
                          {prop.type}
                        </code>
                      </td>
                      <td style={{ padding: '12px' }}>
                        {prop.default ? <code>{prop.default}</code> : '-'}
                      </td>
                      <td
                        style={{
                          padding: '12px',
                          fontSize: 'var(--pittorica-font-size-2)',
                        }}
                      >
                        {prop.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        <Section size="3">
          <Flex justify="center">
            <Button
              as={NavLink}
              to="/components"
              variant="filled"
              size="lg"
              color="gray"
            >
              <Flex align="center" gap="2">
                <IconChevronLeft size={20} />
                Back to Components
              </Flex>
            </Button>
          </Flex>
        </Section>
      </Box>
    </Container>
  );
}
