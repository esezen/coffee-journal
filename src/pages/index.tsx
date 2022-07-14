/* eslint-disable react/no-array-index-key */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Entry from '../components/Entry';
import AddButton from '../components/AddButton';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const {
    data: entries,
  } = trpc.useQuery(['entry.getAll']);
  const session = useSession();
  const isAuthenticated = session.status !== 'unauthenticated';

  return (
    <>
      <Head>
        <title>Coffee Journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { !isAuthenticated
        && (
        <div>
          <p>It looks like you did not sign in yet.</p>
          <Link href="/api/auth/signin">
            Sign In
          </Link>
          <Link href="/signup">
            Sign Up
          </Link>
        </div>
        )}
      { isAuthenticated
        && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-4">
              {entries && entries.map((entry, index) => <Entry entry={entry} key={index} />)}
            </div>
            <AddButton />
          </>
        )}
    </>
  );
};

export default Home;
