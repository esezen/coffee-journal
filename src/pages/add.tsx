import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Head from 'next/head';
import { ZodError } from 'zod';
import { countReset } from 'console';
import { trpc } from '../utils/trpc';
import { entry } from '../sharedTypes';

const Add: NextPage = () => {
  const [brewMethod, setBrewMethod] = useState<string>('Espresso');
  const [coffeeIn, setCoffeeIn] = useState<number>(0);
  const [coffeeOut, setCoffeeOut] = useState<number>(0);
  const [brewTime, setBrewTime] = useState<number>(0);
  const [result, setResult] = useState<string>('Good');
  const defaultFieldErrors = {
    brewMethod: [],
    coffeeIn: [],
    coffeeOut: [],
    brewTime: [],
    result: [],
  };
  const [fieldErrors, setFieldErrors] = useState(defaultFieldErrors);
  const router = useRouter();
  const createEntry = trpc.useMutation(['entry.createEntry']);

  const handleLog = async () => {
    try {
      const validatedEntry = entry.parse({
        brewMethod,
        coffeeIn,
        coffeeOut,
        brewTime,
        result,
      });
      createEntry.mutate(validatedEntry);

      router.push('/');
    } catch (error) {
      if (error instanceof ZodError) {
        setFieldErrors({ ...fieldErrors, ...error.flatten().fieldErrors });
      }
    }
  };
  const resetErrorForField = (field:string) => {
    setFieldErrors({ ...fieldErrors, [field]: defaultFieldErrors[field as keyof typeof defaultFieldErrors] });
  };
  const handleBrewMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrewMethod(e.target.value);
    resetErrorForField('brewMethod');
  };
  const handleCoffeeInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoffeeIn(Number(e.target.value));
    resetErrorForField('coffeeIn');
  };
  const handleCoffeeOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoffeeOut(Number(e.target.value));
    resetErrorForField('coffeeOut');
  };
  const handleBrewTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrewTime(Number(e.target.value));
    resetErrorForField('brewTime');
  };
  const handleResultChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setResult(e.target.value);
    resetErrorForField('result');
  };

  const renderErrorMessage = (field:string) => {
    const fieldError = fieldErrors?.[field as keyof typeof defaultFieldErrors];

    if (fieldError.length) {
      return <span className="label-text-alt text-error">{ fieldError[0] }</span>;
    }
    return '';
  };

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
            { renderErrorMessage('brewMethod') }
          </label>
          <label className="label block" htmlFor="coffee-in">
            <span className="label-text">Coffee In</span>
            <input
              type="number"
              pattern="[0-9]*"
              className="input input-bordered w-full"
              onChange={handleCoffeeInChange}
            />
            { renderErrorMessage('coffeeIn') }
          </label>
          <label className="label block" htmlFor="coffee-out">
            <span className="label-text">Coffee Out</span>
            <input
              type="number"
              pattern="[0-9]*"
              className="input input-bordered w-full"
              onChange={handleCoffeeOutChange}
            />
            { renderErrorMessage('coffeeOut') }
          </label>
          <label className="label block" htmlFor="brew-time">
            <span className="label-text">Brew Time</span>
            <input
              type="number"
              pattern="[0-9]*"
              className="input input-bordered w-full"
              onChange={handleBrewTimeChange}
            />
            { renderErrorMessage('brewTime') }
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
            { renderErrorMessage('result') }
          </label>
          <button type="button" className="mt-4 btn btn-primary" onClick={handleLog}>Log</button>
        </form>
      </div>
    </>
  );
};

export default Add;
