import React from 'react';
import MobileNav from './MobileNav';
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
