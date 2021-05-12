import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => {
  const github = <FontAwesomeIcon icon={faGithub} />;
  return (
    <footer className='footer'>
      <p>
        created by pettergov1@gmail.com
        <span>
          <a
            className='footer__icon'
            href='https://github.com/mulikov-peter'
            target='_blank'
            rel='noreferrer'
          >
            {github}
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
