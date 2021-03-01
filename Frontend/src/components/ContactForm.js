import React from 'react';

import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('contactForm');
  const [category, setCategory] = useState('Category');
  const [selectOpen, setSelectOpen] = useState(false);
  const handleSelect = (e) => {
    setCategory(e.target.dataset.value);
    setSelectOpen(!selectOpen);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='grid-container contact-form'>
          <div className='grid-container__row justify-center '>
            <div className='col-12 col-md-4 contact-form__title'>
              <h1 className='title'>Say Hello!</h1>
            </div>
            <div className='col-12 col-md-6 contact-form__inputs'>
              <input
                className='contact-form__input'
                type='text'
                id='name'
                name='name'
                required
                placeholder='name'
              />

              <input
                className='contact-form__input'
                type='email'
                id='email'
                name='email'
                required
                placeholder='email'
              />

              <div
                className='contact-form__input select-box__wrapper'
                onClick={() => setSelectOpen(!selectOpen)}
              >
                <div className='select-box'>
                  <div className='select-box__box'>
                    <div className='select-box__title' name='category'>
                      {category}
                    </div>
                    <div className='select-box__arrow'></div>
                  </div>
                  <div
                    className={` select-box__options select-box__options${
                      selectOpen ? '--open' : ''
                    }`}
                  >
                    <div
                      className='select-box__option'
                      onClick={handleSelect}
                      data-value='Project inquiry'
                    >
                      Project Inquiry
                    </div>
                    <div
                      className='select-box__option'
                      onClick={handleSelect}
                      data-value='Just to say hello'
                    >
                      Just to say hello
                    </div>
                  </div>
                </div>
              </div>

              <input
                className='contact-form__input'
                type='textarea'
                name='message'
                id='message'
                placeholder='message'
              />
              <button type='submit' disabled={state.submitting}>
                submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
