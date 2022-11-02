import React, { useContext } from 'react';
import { LinkContext } from '../contexts/LinkContext';
import { toast } from 'react-hot-toast';

const ShortenList = () => {
  const { links } = useContext(LinkContext);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Link copied to clipboard', { position: 'bottom-center' });
  };
  return (
    <div className='list container'>
      {links?.map((item, index) => (
        <div className='list__item' key={index}>
          <p>{item.link}</p>

          <div className='list__item-right'>
            <a
              href={`https://${item.shortLink}`}
              target='_blank'
              rel='noreferrer'
              className='list__item-link'>
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
