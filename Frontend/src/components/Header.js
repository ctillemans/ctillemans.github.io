import React from 'react';
import img from '../../public/static/images/2021_Cassidy-Tillemans_Headshots-8.png';
import FadeInWrapper from './FadeInWrapper';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__content grid-container'>
        <div className='col-12 col-lg-6 '>
          <FadeInWrapper>
            <div className='header__text'>
              <h1 className=' header__title header__title--mega '>
                Web <br /> Developer
              </h1>
              <div className=' header__description'>
                <p>Forever learning and building fun things on the internet.</p>
              </div>
              <button className='button button--cta'>Learn more </button>
            </div>
          </FadeInWrapper>
        </div>
        <div className='col-12 col-lg-6 header__right'>
          {/* <div className='header__circle'></div> */}
          <div className='header__image'>
            {/* <img src={img} alt='' /> */}
            {/* <img src={img} className='header__image' /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
