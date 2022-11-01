import React, { useContext, useEffect, useState } from 'react';
import { LinkContext } from '../contexts/LinkContext';

const ShortenList = () => {
  const { links } = useContext(LinkContext);
  const storage = JSON.parse(localStorage.getItem('links'));
  // setLinks(storage);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className='list container'>
      {links?.map((item, index) => (
        <div className='list__item' key={index}>
          <p>{item.link}</p>

          <div className='list__item-right'>
            <a href='' className='list__item-link'>
              {item.shortLink}
            </a>
            <button
              className='list__item-button'
              onClick={(e) => copyToClipboard(item.shortLink)}>
              Copy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortenList;
