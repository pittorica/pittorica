import {
  Code,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Section,
  Text,
} from '@pittorica/react';

export default function Terms() {
  return (
    <Container>
      <Flex direction={'column'} gap="6">
        <Section size="2">
          <Heading size="8" mb="4">
            Terms of Service
          </Heading>
          <Text size="4" color="gray">
            Last updated: February 22, 2026
          </Text>
        </Section>

        <Divider variant="wave" color="gray" />

        <Section size="1">
          <Flex direction="column" gap="4">
            <Heading size="6">License</Heading>
            <Text>
              Pittorica is released under the <strong>MIT License</strong>. This
              means you are free to use, copy, modify, merge, publish,
              distribute, sublicense, and/or sell copies of the Software,
              provided that the copyright notice and this permission notice are
              included in all copies or substantial portions of the Software.
            </Text>
            <Code language="text">
              {`MIT License

        Copyright (c) 2025-${new Date().getFullYear()} Davide Di Criscito

        Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </Code>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        <Section size="1">
          <Flex direction="column" gap="4">
            <Heading size="6">Disclaimer of Warranty</Heading>
            <Text>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT.
            </Text>
            <Text>
              IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
              ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
              CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
              WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </Text>
          </Flex>
        </Section>

        <Divider variant="wave" color="gray" />

        <Section size="1">
          <Flex direction="column" gap="4">
            <Heading size="6">Usage and Contributions</Heading>
            <Text>
              You are encouraged to contribute to the development of Pittorica
              by submitting issues, feature requests, or pull requests on our{' '}
              <Link
                href="https://github.com/pittorica/pittorica"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repository
              </Link>
              .
            </Text>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
