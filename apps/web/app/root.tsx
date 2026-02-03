import '@fontsource-variable/inter';
import 'pittorica';

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import { PittoricaTheme } from '@pittorica/react';

import '~/app.css';

import type { Route } from './+types/root';

export const meta: Route.MetaFunction = () => [
  {
    title: 'Pittorica',
  },
  {
    descripion:
      'Pittorica is a painterly, CSS-first UI framework that brings elegant, lightweight structure to modern interfaces.',
  },
  { name: 'msapplication-TileColor', content: '#29294b' },
  { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
  { name: 'theme-color', content: '#29294b' },
  { property: 'og:type', content: 'website' },
  { property: 'og:title', content: 'Pittorica' },
  {
    property: 'og:description',
    content:
      'Pittorica is a painterly, CSS-first UI framework that brings elegant, lightweight structure to modern interfaces.',
  },
  { property: 'og:url', content: 'https://pittorica.dcdavidev.me' },
  { property: 'og:image', content: '/og.webp' },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Pittorica' },
  {
    name: 'twitter:description',
    content:
      'Pittorica is a painterly, CSS-first UI framework that brings elegant, lightweight structure to modern interfaces.',
  },
  { name: 'twitter:image', content: '/og.webp' },
  { name: 'twitter:image:width', content: '1280' },
  { name: 'twitter:image:height', content: '640' },
];

export const links: Route.LinksFunction = () => [
  // { rel: 'stylesheet', href: pittorica },
  { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
  { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
  { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
  { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/apple-icon-114x114.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/apple-icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/apple-icon-180x180.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/android-icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/manifest.json' },
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
      <body className="pittorica-theme" data-appearance="dark">
        <PittoricaTheme sourceColor="#29294b" appearance="dark">
          {children}
        </PittoricaTheme>
        <ScrollRestoration />
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
