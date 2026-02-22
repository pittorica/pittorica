import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  PittoricaTheme,
  Text,
} from '@pittorica/react';

export default function OgImage() {
  return (
    <PittoricaTheme appearance="dark" sourceColor="#29294b">
      <Box
        style={{
          width: '1280px',
          height: '640px',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #29294b 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative elements */}
        <Box
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            background: 'var(--pittorica-indigo-9)',
            filter: 'blur(120px)',
            opacity: 0.15,
            top: '-200px',
            right: '-100px',
            borderRadius: '50%',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'var(--pittorica-teal-9)',
            filter: 'blur(100px)',
            opacity: 0.1,
            bottom: '-100px',
            left: '-100px',
            borderRadius: '50%',
          }}
        />

        <Card
          translucent
          style={{
            width: '1000px',
            height: '450px',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '40px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Flex align="center" gap="6">
            <Avatar
              src="/static/logo/square.png"
              fallback="P"
              size="9"
              style={{
                backgroundColor: '#29294b',
                boxShadow: 'var(--pittorica-shadow-5)',
                width: '120px',
                height: '120px',
                fontSize: '48px',
              }}
            />
            <Heading
              size="9"
              weight="bold"
              style={{
                fontSize: '84px',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(to right, #fff, #a5a5c7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Pittorica
            </Heading>
          </Flex>

          <Text
            size="6"
            style={{
              maxWidth: '800px',
              lineHeight: '1.4',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '32px',
            }}
          >
            A painterly, CSS-first UI framework that brings elegant, lightweight
            structure to modern interfaces. Built for React and designed for
            aesthetic precision.
          </Text>

          <Flex gap="4" mt="auto">
            <Box
              style={{
                padding: '8px 16px',
                borderRadius: 'full',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Text size="2" color="gray">
                pittorica.dcdavidev.me
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
    </PittoricaTheme>
  );
}
