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

import { Box, PittoricaTheme, ToastProvider } from '@pittorica/react';

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
