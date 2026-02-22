import { useParams } from 'react-router';

import { Container, Heading, Section, Text } from '@pittorica/react';

const formatName = (name: string) =>
  name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export default function ComponentDoc() {
  const { slug } = useParams();
  const name = slug ? formatName(slug) : '';

  return (
    <main>
      <Section size="3">
        <Container>
          <Heading size="8" mb="4">
            {name}
          </Heading>
          <Text size="4" color="gray" mb="6">
            Documentation and examples for the {name} component.
          </Text>

          {/* Component-specific content will go here */}
          <Text>Coming soon...</Text>
        </Container>
      </Section>
    </main>
  );
}
