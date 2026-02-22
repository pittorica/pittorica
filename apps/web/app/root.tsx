import 'pittorica';
import '@fontsource/inknut-antiqua';
import '@fontsource-variable/inter';
import '@fontsource/momo-trust-display';
import '@fontsource-variable/kode-mono';

import { useState } from 'react';

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import {
  IconAlertTriangle,
  IconChevronLeft,
  IconHome,
} from '@tabler/icons-react';

import {
  Box,
  Button,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  PittoricaTheme,
  Section,
  Skeleton,
  Text,
  ToastProvider,
} from '@pittorica/react';

import 'vanilla-cookieconsent/dist/cookieconsent.css';
import './app.css';

import type { Route } from './+types/root';
import { AppBar } from './components/AppBar';
import { ComponentsSideNav } from './components/ComponentsSideNav';
import { CookieConsentInit } from './components/CookieConsentInit';
import { SideNav } from './components/SideNav';
import { cookieConsentConfig } from './configs/cookie-consent';

export const links: Route.LinksFunction = () => [
  {
    rel: 'icon',
    type: 'image/png',
    href: '/favicon-96x96.png',
    sizes: '96x96',
  },
  { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  { rel: 'shortcut icon', href: '/favicon.ico' },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/apple-touch-icon.png',
  },
  { rel: 'manifest', href: '/site.webmanifest' },
];

export const meta: Route.MetaFunction = () => [
  { title: 'Pittorica' },
  {
    name: 'description',
    content:
      'Pittorica is a painterly, CSS-first UI framework that brings elegant, lightweight structure to modern interfaces.',
  },
  { name: 'apple-mobile-web-app-title', content: 'Pittorica' },
  { property: 'og:title', content: 'Pittorica' },
  {
    property: 'og:description',
    content:
      'A painterly, CSS-first UI framework designed for aesthetic precision.',
  },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://pittorica.dcdavidev.me' },
  {
    property: 'og:image',
    content: 'https://pittorica.dcdavidev.me/og-image-20260222.png',
  },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Pittorica' },
  {
    name: 'twitter:description',
    content:
      'A painterly, CSS-first UI framework designed for aesthetic precision.',
  },
  {
    name: 'twitter:image',
    content: 'https://pittorica.dcdavidev.me/og-image-20260222.png',
  },
];

export function Layout({ children: _children }: { children: React.ReactNode }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isComponentsSideNavOpen, setIsComponentsSideNavOpen] = useState(false);
  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');

  const toggleAppearance = () => {
    setAppearance((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className="pittorica-theme"
        data-appearance={appearance}
        data-source-color="#29294b"
      >
        <PittoricaTheme appearance={appearance} sourceColor="#29294b">
          <AppBar
            onOpenSideNav={() => setIsSideNavOpen(true)}
            onOpenComponentsSideNav={() => setIsComponentsSideNavOpen(true)}
            appearance={appearance}
            onToggleAppearance={toggleAppearance}
          />

          <SideNav
            isOpen={isSideNavOpen}
            onClose={() => setIsSideNavOpen(false)}
          />

          <ComponentsSideNav
            isOpen={isComponentsSideNavOpen}
            onClose={() => setIsComponentsSideNavOpen(false)}
          />

          <Box className="app-content" id="top">
            <Outlet
              context={{
                openSideNav: () => setIsSideNavOpen(true),
                openComponentsSideNav: () => setIsComponentsSideNavOpen(true),
              }}
            />
          </Box>
          <ToastProvider />
          <ScrollRestoration />
        </PittoricaTheme>
        <CookieConsentInit config={cookieConsentConfig} />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrationFallback() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="pittorica-theme" data-source-color="#29294b">
        <PittoricaTheme sourceColor="#29294b">
          <Box
            style={{
              height: '64px',
              borderBottom: '1px solid var(--pittorica-slate-4)',
              padding: '0 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Flex align="center" gap="2">
              <Skeleton width="32px" height="32px" borderRadius="full" />
              <Skeleton width="120px" height="24px" />
            </Flex>
            <Flex gap="3">
              <Skeleton width="80px" height="32px" borderRadius="2" />
              <Skeleton width="32px" height="32px" borderRadius="full" />
            </Flex>
          </Box>

          <Flex>
            <Box
              style={{
                width: '280px',
                height: 'calc(100vh - 64px)',
                borderRight: '1px solid var(--pittorica-slate-4)',
                padding: '24px',
                display: 'none',
              }}
              // Hidden on mobile, but would be nice to show on md+ if possible via pure CSS
              className="hydration-sidebar"
            >
              <Flex direction="column" gap="4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Skeleton key={i} width="80%" height="20px" />
                ))}
              </Flex>
            </Box>

            <Box style={{ flex: 1 }}>
              <Section size="3">
                <Container>
                  <Flex direction="column" gap="6">
                    <Skeleton width="40%" height="48px" mb="4" />
                    <Skeleton width="100%" height="24px" />
                    <Skeleton width="90%" height="24px" />
                    <Skeleton width="95%" height="24px" />

                    <Box mt="8">
                      <Skeleton
                        width="100%"
                        height="300px"
                        borderRadius="3"
                        style={{ opacity: 0.5 }}
                      />
                    </Box>
                  </Flex>
                </Container>
              </Section>
            </Box>
          </Flex>
          <Scripts />
        </PittoricaTheme>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="pittorica-theme" data-source-color="#29294b">
        <PittoricaTheme sourceColor="#29294b">
          <Section size="4">
            <Container maxWidth="md">
              <Flex direction="column" align="center" justify="center" gap="6">
                <Card
                  variant="outlined"
                  p="8"
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    background: 'var(--pittorica-surface-1)',
                  }}
                >
                  <Flex direction="column" align="center" gap="4">
                    <Box
                      style={{
                        background: 'var(--pittorica-red-3)',
                        color: 'var(--pittorica-red-9)',
                        padding: '20px',
                        borderRadius: 'var(--pittorica-radius-full)',
                        display: 'flex',
                      }}
                    >
                      <IconAlertTriangle size={48} stroke={1.5} />
                    </Box>

                    <Heading size="9" weight="bold">
                      {message}
                    </Heading>

                    <Text size="4" color="gray" style={{ maxWidth: '500px' }}>
                      {details}
                    </Text>

                    <Flex gap="3" mt="4">
                      <Button as="a" href="/" variant="filled" size="lg">
                        <Flex align="center" gap="2">
                          <IconHome size={18} />
                          Go Home
                        </Flex>
                      </Button>
                      <Button
                        as="button"
                        onClick={() => globalThis.history.back()}
                        variant="outlined"
                        size="lg"
                        color="gray"
                      >
                        <Flex align="center" gap="2">
                          <IconChevronLeft size={18} />
                          Go Back
                        </Flex>
                      </Button>
                    </Flex>
                  </Flex>
                </Card>

                {stack && (
                  <Box width="100%">
                    <Heading size="3" mb="3" color="gray">
                      Stack Trace (Dev Only)
                    </Heading>
                    <Code language="bash">{stack}</Code>
                  </Box>
                )}
              </Flex>
            </Container>
          </Section>
          <Scripts />
        </PittoricaTheme>
      </body>
    </html>
  );
}
