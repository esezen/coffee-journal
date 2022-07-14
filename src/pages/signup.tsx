import type { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

const Signup: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const createUser = trpc.useMutation(['auth.createUser']);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); };
  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setRepeatPassword(e.target.value); };
  const handleSignup = () => {
    if (password === repeatPassword) {
      createUser.mutate({ email, password });
    }
  };

  return (
    <>
      <Head>
        <title>Add Journal Entry</title>
      </Head>

      <div className="flex justify-center mx-4">
        <form className="form-control w-full max-w-xl">
          <label className="label block" htmlFor="email">
            <span className="label-text">Email</span>
            <input
              type="email"
              className="input input-bordered w-full"
              onChange={handleEmailChange}
            />
          </label>
          <label className="label block" htmlFor="password">
            <span className="label-text">Password</span>
            <input
              type="number"
              pattern="[0-9]*"
              className="input input-bordered w-full"
              onChange={handlePasswordChange}
            />
          </label>
          <label className="label block" htmlFor="password-repeat">
            <span className="label-text">Repeat Password</span>
            <input
              type="number"
              pattern="[0-9]*"
              className="input input-bordered w-full"
              onChange={handleRepeatPasswordChange}
            />
          </label>
          <button type="button" className="mt-4 btn btn-primary" onClick={handleSignup}>Signup</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
