import React, { useContext, useState } from 'react';
import axios from 'axios';
import { LinkContext } from '../contexts/LinkContext';
import validator from 'validator';

const Shorten = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const { dispatch } = useContext(LinkContext);

  const shortenIt = () => {
    if (input !== '' && validator.isURL(input)) {
      setError('');
      axios
        .get(`https://api.shrtco.de/v2/shorten`, {
          params: {
            url: input,
          },
        })
        .then((res) => {
          dispatch({
            type: 'ADD_LINK',
            link: {
              link: res.data.result.original_link,
              shortLink: res.data.result.short_link,
            },
          });
        });
    } else {
      setError('Please add a valid URL');
    }
  };

  return (
    <div className='shorten container'>
      <div className='shorten__input'>
        <input
          type='text'
          placeholder='Shorten a link here'
          value={input}
          className={`${error && 'error'}`}
          onChange={(e) => setInput(e.target.value)}
        />
        {error && <p className='shorten__error'>{error}</p>}
      </div>
      <button className='shorten__button button-cyan' onClick={shortenIt}>
        Shorten It!
      </button>
    </div>
  );
};

export default Shorten;
