import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css'
        ></link>
      </head>
      <NavBar />
      <div style={{ paddingTop: '80px' }}>{children}</div>
    </div>
  );
};

export default Layout;
