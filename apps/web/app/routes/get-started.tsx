import {
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

export default function GetStarted() {
  return (
    <Container>
      <Flex direction={'column'} gap="6">
        <Section size="2">
          <Flex direction={'column'} gap="4" justify={'start'} align={'start'}>
            <header>
              <Heading size="8" mb="4">
                Get Started
              </Heading>
              <Text size="4" color="gray">
                Welcome to Pittorica! This guide will help you get up and
                running with the framework.
              </Text>
            </header>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

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
            <Text mb="4">
              Install Pittorica and its React components using your preferred
              package manager:
            </Text>

            <Tabs.Root defaultValue="npm" style={{ width: '100%' }}>
              <Tabs.List>
                <Tabs.Trigger value="npm">npm</Tabs.Trigger>
                <Tabs.Trigger value="pnpm">pnpm</Tabs.Trigger>
                <Tabs.Trigger value="bun">bun</Tabs.Trigger>
                <Tabs.Trigger value="yarn">yarn</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="npm">
                <Code language="bash">
                  {`npm install pittorica @pittorica/react
                  `}
                </Code>
              </Tabs.Content>
              <Tabs.Content value="pnpm">
                <Code language="bash">
                  {`pnpm add pittorica @pittorica/react
                  `}
                </Code>
              </Tabs.Content>
              <Tabs.Content value="bun">
                <Code language="bash">
                  {`bun add pittorica @pittorica/react
                  `}
                </Code>
              </Tabs.Content>
              <Tabs.Content value="yarn">
                <Code language="bash">
                  {`yarn add pittorica @pittorica/react
                  `}
                </Code>
              </Tabs.Content>
            </Tabs.Root>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        <Section size="1" id="configuration">
          <Flex direction="column" gap="4">
            <Flex align="center" gap="2">
              <Link
                href="#configuration"
                color="gray"
                underline="none"
                style={{ opacity: 0.5 }}
              >
                #
              </Link>
              <Heading size="6">Configuration</Heading>
            </Flex>
            <Text mb="4">
              Configure Pittorica in your project by importing the styles and
              wrapping your application with the theme provider.
            </Text>

            <Tabs.Root defaultValue="react" style={{ width: '100%' }}>
              <Tabs.List>
                <Tabs.Trigger value="react">React (Root)</Tabs.Trigger>
                <Tabs.Trigger value="css">Global CSS</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="react">
                <Flex direction="column" gap="4">
                  <Text size="2" color="gray">
                    Wrap your application with <code>PittoricaTheme</code> in
                    your root file (e.g., <code>root.tsx</code> or{' '}
                    <code>main.tsx</code>
                    ):
                  </Text>

                  <Code language="typescript">
                    {`import 'pittorica';
import { PittoricaTheme } from '@pittorica/react';

export default function App() {
  return (
    <PittoricaTheme appearance="light" sourceColor="#29294b">
      <YourApp />
    </PittoricaTheme>
  );
}`}
                  </Code>
                </Flex>
              </Tabs.Content>

              <Tabs.Content value="css">
                <Flex direction="column" gap="4">
                  <Text size="2" color="gray">
                    Customize the default variables in your global CSS file:
                  </Text>
                  <Code language="css">
                    {`:root {
  --pittorica-font-family: 'Inter Variable', sans-serif;
  --pittorica-font-heading: 'Inknut Antiqua', cursive;
}

.pittorica-theme {
  --pittorica-source-color: #29294b;
}`}
                  </Code>
                </Flex>
              </Tabs.Content>
            </Tabs.Root>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
