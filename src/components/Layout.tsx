import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode,
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <div className="w-full text-2xl font-bold h-12 text-center flex justify-center space-x-6 items-center border-b mb-4">
        <Link href="/">
          Coffee Journal
        </Link>
      </div>
      {children}
    </>
  );
};

export default Layout;
