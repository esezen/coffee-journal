const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <div className="w-full h-10 py-2 text-center bg-green-100">
        <h1>Journal</h1>
      </div>
      {children}
    </>
  )
};

export default Layout;
