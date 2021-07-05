import React, { useContext } from 'react';

import { AppContext } from '../../AppContext';

import Ingredient from './Ingredient';

import './Ingredient.css';

const IngredientList = () => {
  const { recipe } = useContext(AppContext);

  const ingredientList = recipe.ingredientsFull.map((ingredient, i) => (
    <Ingredient key={i} ingredientFull={ingredient} />
  ));

  return (
    <div className='ingredients'>
      <p>Ingredients:</p>
      <ul className='ingredient__list'>{ingredientList}</ul>
    </div>
  );
};

export default IngredientList;
