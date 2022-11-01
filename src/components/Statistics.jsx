import React from 'react';
import brand from '../images/icon-brand-recognition.svg';
import detailed from '../images/icon-detailed-records.svg';
import fully from '../images/icon-fully-customizable.svg';

const Statistics = () => {
  return (
    <div className='statistics container'>
      <h2 className='statistics__title'>Advanced Statistics</h2>
      <p className='statistics__desc'>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className='statistics__data grid'>
        <div className='statistics__item'>
          <div className='statistics__icon'>
            <img src={brand} alt='' />
          </div>
          <h3 className='statistics__item-title'>Brand Recognition</h3>
          <p className='statistics__item-desc'>
            Boost your brand recognition with each click, Generic links don't
            mean a thing. Branded link help instil confidence in your content.
          </p>
        </div>
        <div className='statistics__item'>
          <div className='statistics__icon'>
            <img src={detailed} alt='' />
          </div>
          <h3 className='statistics__item-title'>Brand Recgnition</h3>
          <p className='statistics__item-desc'>
            Boost your brand recognition with each click, Generic links don't
            mean a thing. Branded link help instil confidence in your content.
          </p>
        </div>
        <div className='statistics__item'>
          <div className='statistics__icon'>
            <img src={fully} alt='' />
          </div>
          <h3 className='statistics__item-title'>Brand Recgnition</h3>
          <p className='statistics__item-desc'>
            Boost your brand recognition with each click, Generic links don't
            mean a thing. Branded link help instil confidence in your content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
