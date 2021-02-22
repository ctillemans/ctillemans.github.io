import React from 'react';
import { useState } from 'react';
import MobileNav from './MobileNav';
import { Link } from 'gatsby';

function NavBar() {
  const linkList = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Work',
      path: '/portfolio',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='navbar'>
        <div className='navbar__content'>
          <div className='navbar__logo'>
            <h1>Cass </h1>
          </div>
          <ul className='navbar__linkList'>
            {linkList.map((linkItem) => {
              return (
                <li className='navbar__list-item'>
                  <Link to={linkItem.path}>{linkItem.title}</Link>
                </li>
              );
            })}
          </ul>
          <div
            className='navbar__mobile-toggle'
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <MobileNav open={open} />
    </>
  );
}

export default NavBar;
