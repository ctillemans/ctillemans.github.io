import React from 'react';
import img from '../../public/static/2021_Cassidy-Tillemans_Headshots-8.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__content grid-container--fluid'>
        <div className='col-12 col-lg-6'>
          <div className='header__text'>
            <h1 className=' header__title header__title--mega '>
              Web <br /> Developer
            </h1>
            <div className=' header__description'>
              <p>Forever learning and building fun things on the internet.</p>
            </div>
            <button className='button button--cta'>Learn more </button>
          </div>
        </div>
        <div className='col-12 col-lg-6 '>
          <div className='header__right'>
            <div className='header__circle'></div>
            <img src={img} className='header__image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
