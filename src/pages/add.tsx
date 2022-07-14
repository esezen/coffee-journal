import type { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

const Add: NextPage = () => {
  const [brewMethod, setBrewMethod] = useState<string>('Espresso');
  const [coffeeIn, setCoffeeIn] = useState<number>(0);
  const [coffeeOut, setCoffeeOut] = useState<number>(0);
  const [brewTime, setBrewTime] = useState<number>(0);
  const [result, setResult] = useState<string>('Good');
  const createEntry = trpc.useMutation(['entry.createEntry']);

  const handleLog = async () => {
    createEntry.mutate({
      brewMethod,
      coffeeIn,
      coffeeOut,
      brewTime,
      result,
    });
  };
  const handleBrewMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setBrewMethod(e.target.value); };
  const handleCoffeeInChange = (e: React.ChangeEvent<HTMLInputElement>) => { setCoffeeIn(Number(e.target.value)); };
  const handleCoffeeOutChange = (e: React.ChangeEvent<HTMLInputElement>) => { setCoffeeOut(Number(e.target.value)); };
  const handleBrewTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => { setBrewTime(Number(e.target.value)); };
  const handleResultChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setResult(e.target.value); };

  return (
    <>
      <Head>
        <title>Add Journal Entry</title>
      </Head>

      <div className="flex justify-center mx-4">
        <form className="form-control w-full max-w-xl">
          <label className="label block" htmlFor="brew-method">
            <span className="label-text">Brew Method</span>
            <select
              className="select select-bordered w-full"
              onChange={handleBrewMethodChange}
              defaultValue={brewMethod}
            >
              <option>Espresso</option>
              <option>V60</option>
              <option>Aeropress</option>
              <option>French Press</option>
            </select>
          </label>
          <label className="label block" htmlFor="coffee-in">
            <span className="label-text">Coffee In</span>
            <input
              type="number"
              pattern="[0-9]*"
              className="input input-bordered w-full"
              onChange={handleCoffeeInChange}
            />
          </label>
          <label className="label block" htmlFor="coffee-out">
            <span className="label-text">Coffee Out</span>
            <input
              type="number"
              pattern="[0-9]*"
              className="input input-bordered w-full"
              onChange={handleCoffeeOutChange}
            />
          </label>
          <label className="label block" htmlFor="brew-time">
            <span className="label-text">Brew Time</span>
            <input
              type="number"
              pattern="[0-9]*"
              className="input input-bordered w-full"
              onChange={handleBrewTimeChange}
            />
          </label>
          <label className="label block" htmlFor="result">
            <span className="label-text">Result</span>
            <select
              className="select select-bordered w-full"
              defaultValue={result}
              onChange={handleResultChange}
            >
              <option>Good</option>
              <option>Meh</option>
              <option>Bad</option>
            </select>
          </label>
          <button type="button" className="mt-4 btn btn-primary" onClick={handleLog}>Log</button>
        </form>
      </div>
    </>
  );
};

export default Add;
