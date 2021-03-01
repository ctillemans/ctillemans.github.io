import React from 'react';
import { Link } from 'gatsby';

const MobileNav = ({ open }) => {
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
  return (
    <>
      <div
        className={`mobile-nav mobile-nav__container ${open ? 'mobile-nav__container--open' : ''}`}
      >
        <div className='mobile-nav__content'>
          <div className='mobile-nav__linklist-container linklist linklist__container'>
            <ul className='linklist__list'>
              {linkList.map((linkItem) => {
                return (
                  <li className='linklist__list-item'>
                    <Link to={linkItem.path}>{linkItem.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
