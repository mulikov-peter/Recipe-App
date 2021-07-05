import React, { useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from '../../AppContext';

const Search = () => {
  const { handleSearch } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');

  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const handleOnChange = e => setInputValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (!inputValue) return alert('Input should not be an empty...');

    handleSearch(inputValue);

    setInputValue('');
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search meal title...'
        className='search__input'
        value={inputValue}
        onChange={handleOnChange}
      />
      <span>|</span>
      <button className='search__button'>{searchIcon}</button>
    </form>
  );
};

export default Search;
