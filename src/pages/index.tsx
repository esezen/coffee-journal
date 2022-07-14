import type { NextPage } from "next";
import Entry from "../components/Entry";
import AddButton from "../components/AddButton";
import Head from "next/head";

const Home: NextPage = () => {
  const journalEntry = {
    type: 'espresso',
    in: 18,
    out: 40,
    brewTime: 25,
    result: 'good',
    createdAt: Date.now(),
  };
  const journalEntries = [journalEntry, journalEntry, journalEntry];

  return (
    <>
      <Head>
        <title>Coffee Journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        {journalEntries.map((entry, index) =>
          <Entry entry={entry} key={index} />
        )}
      </div>
      <AddButton />
    </>
  );
};

export default Home;
