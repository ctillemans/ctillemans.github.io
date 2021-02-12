import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__content container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <div className='row'>
              <h2 className='blue header__title header__title--mega '>Web Developer</h2>
            </div>
            <div className='row header__description'>
              <p>Forever learning and building fun things on the internet.</p>
            </div>
            <div className='row '>
              <button className='button button--cta'>Learn more </button>
            </div>
          </div>
          <div className='col-12 col-lg-6 '></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
