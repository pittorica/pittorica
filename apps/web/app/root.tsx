import 'pittorica';
import '@fontsource/inknut-antiqua';
import '@fontsource-variable/inter';
import '@fontsource-variable/kode-mono';

import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import { IconBrandGithub } from '@tabler/icons-react';

import {
  Avatar,
  Box,
  Card,
  Flex,
  IconButton,
  Link,
  PittoricaTheme,
} from '@pittorica/react';

import './app.css';

import type { Route } from './+types/root';

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
];

export function Layout({ children }: { children: React.ReactNode }) {
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
        data-appearance="light"
        data-source-color="#29294b"
      >
        <PittoricaTheme appearance="light" sourceColor="#29294b">
          <Card as="header" className="appbar" translucent>
            <Flex align="center" justify="between" height="100%">
              <Flex align="center" gap="3">
                <IconButton
                  as={NavLink}
                  to="/"
                  variant="text"
                  color="inherit"
                  aria-label="Home"
                  style={{ padding: 0, width: 'auto', height: 'auto' }}
                >
                  <Avatar
                    src="/static/logo/square.png"
                    fallback="P"
                    size="2"
                    style={{ boxShadow: 'none', backgroundColor: '#29294b' }}
                  />
                </IconButton>
              </Flex>
              <nav>
                <Flex gap="5" align="center">
                  <Link as={NavLink} to="/docs" color="inherit">
                    Docs
                  </Link>
                  <Link as={NavLink} to="/components" color="inherit">
                    Components
                  </Link>
                  <IconButton
                    as="a"
                    href="https://github.com/pittorica/pittorica"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    color="white"
                    aria-label="GitHub"
                  >
                    <IconBrandGithub size={20} />
                  </IconButton>
                </Flex>
              </nav>
            </Flex>
          </Card>
          <Box className="app-content" id="top">
            {children}
          </Box>
          <ScrollRestoration />
        </PittoricaTheme>
        <Scripts />
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
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
