import React, { useContext } from 'react';
import Select from 'react-select';
// import Context from '../../context';
import { AppContext } from '../../AppContext';

const options = [
  { value: 'Beef', label: 'Beef' },
  { value: 'Breakfast', label: 'Breakfast' },
  { value: 'Chicken', label: 'Chicken' },
  { value: 'Dessert', label: 'Dessert' },
  { value: 'Lamb', label: 'Lamb' },
  { value: 'Miscellaneous', label: 'Miscellaneous' },
  { value: 'Pasta', label: 'Pasta' },
  { value: 'Pork', label: 'Pork' },
  { value: 'Seafood', label: 'Seafood' },
  { value: 'Side', label: 'Side' },
  { value: 'Starter', label: 'Starter' },
  { value: 'Vegan', label: 'Vegan' },
  { value: 'Vegetarian', label: 'Vegetarian' },
];

const SelectComp = () => {
  const { handleSelect } = useContext(AppContext);
  const handleOnChange = option => handleSelect(option.value);

  return (
    <Select
      className='select'
      placeholder='Select a category...'
      onChange={handleOnChange}
      options={options}
    />
  );
};

export default SelectComp;
