import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

interface Props {
  children: React.ReactNode,
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <div className="w-full text-2xl font-bold h-12 text-center flex justify-center space-x-6 items-center border-b mb-4">
        <Link href="/">
          Coffee Journal
        </Link>
      </div>
      { children }
    </>
  );
};

export default Layout;
