import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: '80px' }}>{children}</div>
    </div>
  );
};

export default Layout;
