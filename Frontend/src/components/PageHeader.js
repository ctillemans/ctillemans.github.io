import React from 'react';

const PageHeader = ({ text, subText, image, bgColor, textColor, textPosition }) => {
  const styles = {
    backgroundColor: bgColor,
  };

  console.log(styles);
  return (
    <>
      <div className={`page-header__container grid-container--fluid  bg--${bgColor}`}>
        <div className={`grid-container__row center`}>
          {text && <h1 className='text'>{text}</h1>}
        </div>
        {subText && (
          <div className='grid-container__row'>
            <p className='subtext'></p>
          </div>
        )}
      </div>
    </>
  );
};

export default PageHeader;
