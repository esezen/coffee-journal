import type { NextPage } from "next";
import { CheckCircleIcon } from '@heroicons/react/outline'
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

      <div className="w-full h-10 py-2 text-center bg-green-100">
        <h1>Journal</h1>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-4">
          {journalEntries.map((entry, index) =>
            <div className="flex justify-between items-center mx-4 my-2 px-3 py-2 border rounded bg-gray-200" key={index} >
              <div>
                <p className="capitalize">{entry.type}</p>
                <div className="flex flex-row space-x-2 sm:space-x-0 sm:flex-col">
                  <p>In: {entry.in}</p>
                  <p>Out: {entry.out}</p>
                  <p>Time: {entry.brewTime}</p>
                </div>
              </div>
              <CheckCircleIcon className="h-6 w-6 text-green-600"/>
            </div>
          )}
        </div>
    </>
  );
};

export default Home;
