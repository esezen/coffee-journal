/* eslint-disable */
// src/pages/_app.tsx
import { withTRPC } from '@trpc/next';
import type { AppType } from 'next/dist/shared/lib/utils';
import superjson from 'superjson';
import { SessionProvider } from 'next-auth/react';
import type { AppRouter } from '../server/router';
import '../styles/globals.css';
import Layout from '../components/Layout';

const MyApp: AppType = ({
  Component,
  pageProps: { ...pageProps },
}) => (
  <SessionProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>
);

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return '';
  }
  if (process.browser) return ''; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);
