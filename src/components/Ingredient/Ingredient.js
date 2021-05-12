import React from 'react';

import PropTypes from 'prop-types';

const Ingredient = ({ ingredientFull }) => {
  const { ingredient, measure } = ingredientFull;
  return (
    <li className='ingredient__item'>
      <img
        src={`https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`}
        alt={ingredient}
      />
      <p>
        {ingredient}: <span>{measure}</span>{' '}
      </p>
    </li>
  );
};

Ingredient.propTypes = {
  ingredientFull: PropTypes.object.isRequired,
};

export default Ingredient;
