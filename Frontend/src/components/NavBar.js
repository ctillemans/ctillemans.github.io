import React from 'react';
import { useState } from 'react';
import MobileNav from './MobileNav';

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='navbar'>
        <div className='navbar__content'>
          <div className='navbar__logo'>
            <h1>CT</h1>
          </div>
          <div className='links'></div>
          <button
            className='navbar__mobile-toggle'
            onClick={() => {
              setOpen(!open);
            }}
          >
            hey there {`${open}`}
          </button>
        </div>
      </div>
      <MobileNav open={open} />
    </>
  );
}

export default NavBar;
