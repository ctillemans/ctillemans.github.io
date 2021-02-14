import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children, ...props }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
