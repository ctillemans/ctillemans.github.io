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
      path: '/projects',
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
            <Link to='/'>
              <div className='logo'>
                <div className='letter top-left'>
                  <h2>C</h2>
                </div>
                <div className='letter top-right'>
                  <h2>T</h2>
                </div>
                <div className='letter bottom-right'>
                  <h2>C</h2>
                </div>
                <div className='letter bottom-left'>
                  <h2>T</h2>
                </div>
              </div>
            </Link>
          </div>
          <ul className='navbar__linkList'>
            {linkList.map((linkItem) => {
              return (
                <li className='navbar__list-item'>
                  <Link to={linkItem.path} activeClassName='navbar__list-item--active'>
                    {linkItem.title}
                  </Link>
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
