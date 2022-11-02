import React, { useState } from 'react';
import logo from '../images/logo.svg';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar__container container'>
        <img src={logo} alt='' />
        <div className={`navbar__menu ${mobileMenu && 'show-mobile-menu'}`}>
          <div className='navbar__links'>
            <a href='#' className='navbar__link'>
              Features
            </a>
            <a href='#' className='navbar__link'>
              Pricing
            </a>
            <a href='#' className='navbar__link'>
              Resources
            </a>
          </div>
          <div className='navbar__right'>
            <button className='navbar__button navbar__button-login'>
              Login
            </button>
            <button className='navbar__button'>Sign Up</button>
          </div>
        </div>
        <div className='navbar__toggle'>
          <IoMenu
            className='navbar__toggle-icon'
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
