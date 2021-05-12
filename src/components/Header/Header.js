import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import Select from './Select';
import Search from './Search';

import './Header.css';

const Header = () => {
  const logo = <FontAwesomeIcon icon={faUtensils} />;

  return (
    <header className='header'>
      <div className='header__logo'>{logo}</div>
      <div className='header__inputs'>
        <Select />
        <Search />
      </div>
    </header>
  );
};

export default Header;
