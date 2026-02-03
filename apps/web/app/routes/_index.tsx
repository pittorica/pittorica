import { Avatar, Box, Button, Flex, Heading } from '@pittorica/react';

import logo from '~/assets/logo/squared.png';

export default function IndexRoute() {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      gap="4"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--pittorica-source-color)',
      }}
    >
      <Avatar src={logo} size="9" />
      <Heading size="9">Pittorica</Heading>
      <Heading size="4">
        A painterly, CSS-first UI framework that brings elegant, lightweight
        structure to modern interfaces.
      </Heading>

      <Box mt="6">
        <Button>React</Button>
      </Box>
    </Flex>
  );
}
