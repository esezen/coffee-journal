/* eslint-disable react/no-array-index-key */
import type { NextPage } from 'next';
import Head from 'next/head';
import Entry from '../components/Entry';
import AddButton from '../components/AddButton';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const {
    data: entries,
  } = trpc.useQuery(['entry.getAll']);

  return (
    <>
      <Head>
        <title>Coffee Journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        {entries && entries.map((entry, index) => <Entry entry={entry} key={index} />)}
      </div>
      <AddButton />
    </>
  );
};

export default Home;
