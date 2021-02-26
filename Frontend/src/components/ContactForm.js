import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <form>
        <div className='grid-container contact-form'>
          <div className='grid-container__row'>
            <div className='col-12 col-md-4 contact-form__title'>
              <h1 className='title'>Say Hello!</h1>
            </div>
            <div className='col-12 col-md-8 contact-form__contents'>
              <div className='grid-container__row'>
                <div className='col-12 col-md-6'>
                  <input type='text' id='name' name='name' required placeholder='name' />
                </div>
                <div className='col-12 col-md-6'>
                  <input type='email' id='email' name='email' required placeholder='email' />
                </div>
              </div>
              <select name='category' id='category'>
                <option>Category</option>
                <option value='Project Inquiry'>Project Inquiry</option>
                <option value='Just to say Hello'>Just to say Hello</option>
              </select>

              <input type='textarea' name='message' id='message' placeholder='message' />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
