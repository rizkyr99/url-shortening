import React from 'react';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container container grid'>
        <div className='footer__logo'>
          <img src={logo} alt='' />
        </div>
        <div className='footer__content'>
          <div>
            <h4 className='footer__title'>Features</h4>

            <div className='footer__links'>
              <a href='#' className='footer__link'>
                Link Shortening
              </a>
              <a href='#' className='footer__link'>
                Branded Links
              </a>
              <a href='#' className='footer__link'>
                Analytics
              </a>
            </div>
          </div>
          <div>
            <h4 className='footer__title'>Resources</h4>

            <div className='footer__links'>
              <a href='#' className='footer__link'>
                Blog
              </a>
              <a href='#' className='footer__link'>
                Developers
              </a>
              <a href='#' className='footer__link'>
                Support
              </a>
            </div>
          </div>
          <div>
            <h4 className='footer__title'>Company</h4>

            <div className='footer__links'>
              <a href='#' className='footer__link'>
                About
              </a>
              <a href='#' className='footer__link'>
                Our Team
              </a>
              <a href='#' className='footer__link'>
                Careers
              </a>
              <a href='#' className='footer__link'>
                Contact
              </a>
            </div>
          </div>
          <div className='footer__social'>
            <a href='#' className='footer__social-link'>
              <img src={facebook} alt='' />
            </a>
            <a href='#' className='footer__social-link'>
              <img src={twitter} alt='' />
            </a>
            <a href='#' className='footer__social-link'>
              <img src={pinterest} alt='' />
            </a>
            <a href='#' className='footer__social-link'>
              <img src={instagram} alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
