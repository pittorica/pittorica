import {
  Container,
  Divider,
  Flex,
  Heading,
  Section,
  Text,
} from '@pittorica/react';

export default function Privacy() {
  return (
    <Container>
      <Flex direction={'column'} gap="6">
        <Section size="2">
          <Heading size="8" mb="4">
            Privacy Policy
          </Heading>
          <Text size="4" color="gray">
            Last updated: February 22, 2026
          </Text>
        </Section>

        <Divider variant="wave" color="gray" />

        <Section size="1">
          <Flex direction="column" gap="4">
            <Heading size="6">No Data Collection</Heading>
            <Text>
              Pittorica is designed with privacy as a core principle. This
              documentation site and the framework itself **do not collect,
              store, or process any personal data**.
            </Text>
            <Text>Specifically:</Text>
            <ul
              style={{
                paddingLeft: 'var(--pittorica-space-5)',
                color: 'var(--pittorica-gray-11)',
              }}
            >
              <li>No cookies are used.</li>
              <li>No user accounts or profiles exist.</li>
              <li>No contact forms or data entry points are provided.</li>
              <li>No analytics or tracking scripts are integrated.</li>
            </ul>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        <Section size="1">
          <Flex direction="column" gap="4">
            <Heading size="6">Usage of Pittorica</Heading>
            <Text>
              As a UI framework, Pittorica is a set of client-side tools (CSS
              and React components). When you integrate Pittorica into your own
              projects, the framework itself does not phone home or transmit any
              data to us or any third parties.
            </Text>
            <Text>
              Your privacy and the privacy of your users remain entirely under
              your control when using our components.
            </Text>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
