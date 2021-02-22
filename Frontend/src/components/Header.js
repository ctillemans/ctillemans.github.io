import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__content grid-container'>
        <div className='grid-container__row'>
          <div className='col-12 col-lg-6'>
            <div className='row'>
              <div className='header__text'>
                <h2 className=' header__title header__title--mega '>
                  Web <br /> Developer
                </h2>
                <div className=' header__description'>
                  <p>Forever learning and building fun things on the internet.</p>
                </div>
                <button className='button button--cta'>Learn more </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 '>
            <div className='header__right'>Placeholder for image of me</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
