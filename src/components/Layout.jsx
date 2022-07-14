import Link from 'next/link'

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <div className="w-full text-2xl font-bold h-12 text-center flex justify-center space-x-6 items-center border-b mb-4">
        <Link href="/">
          <a>Journal</a>
        </Link>
      </div>
      {children}
    </>
  )
};

export default Layout;
