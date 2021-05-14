import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../AppContext';

import Loader from '../Loader/Loader';

import './Meal.css';

const Meal = ({ meal }) => {
  const { loading, handleOnClick } = useContext(AppContext);
  const { idMeal: id, strMeal: title, strMealThumb: img_url } = meal;

  return (
    <li className='meal__item' onClick={() => handleOnClick(id)}>
      {loading ? <Loader /> : <img src={img_url} alt={title} />}
      <p className='meal__text'>{title}</p>
    </li>
  );
};

Meal.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default Meal;
