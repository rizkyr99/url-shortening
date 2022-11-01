import React, { useState } from 'react';

const Shorten = () => {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const shortenIt = () => {};
  return (
    <div className='shorten container'>
      <div className='shorten__input'>
        <input
          type='text'
          placeholder='Shorten a link here'
          value={link}
          className='error'
          onChange={(e) => setLink(e.target.value)}
        />
        <p className='shorten__error'>Error</p>
      </div>
      <button className='shorten__button button-cyan' onClick={shortenIt}>
        Shorten It!
      </button>
    </div>
  );
};

export default Shorten;
