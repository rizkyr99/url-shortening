import React from 'react';
import heroImg from '../images/illustration-working.svg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__container container grid'>
        <div className='hero__text'>
          <h1 className='hero__title'>More than just shorter links</h1>
          <p className='hero__desc'>
            Build your own brand's recognition and get detailed insights on how
            your links are performing.
          </p>
          <button className='hero__button button-cyan'>Get Started</button>
        </div>
        <div className='hero__image'>
          <img src={heroImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
