import type { NextPage } from "next";
import Head from "next/head";

const Add: NextPage = () => {
  return (
    <>
      <Head>
        <title>Add Journal Entry</title>
      </Head>

      <div className="mx-4">
        <form className="form-control w-full">
          <label className="label">
            <span className="label-text">Brew Method</span>
          </label>
          <select className="select select-bordered">
            <option>Espresso</option>
            <option>V60</option>
          </select>
          <label className="label">
            <span className="label-text">Coffee In</span>
          </label>
          <input type="text" className="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Coffee Out</span>
          </label>
          <input type="text" className="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Brew Time</span>
          </label>
          <input type="number" className="input input-bordered w-full max-w-xs" />
        </form>
      </div>
    </>
  );
};

export default Add;
