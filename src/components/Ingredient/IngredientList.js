import React, { useContext } from 'react';

import { AppContext } from '../../AppContext';

import Ingredient from './Ingredient';

import './Ingredient.css';

const IngredientList = () => {
  const { recipe } = useContext(AppContext);

  const ingredients = [];
  const measures = [];

  for (const key in recipe) {
    if (key.slice(0, 13) === 'strIngredient' && recipe[key])
      ingredients.push(recipe[key]);

    if (key.slice(0, 10) === 'strMeasure' && recipe[key])
      measures.push(recipe[key]);
  }

  const ingredientsFull = ingredients.map((el, i) => {
    return { ingredient: el, measure: measures[i] };
  });

  const ingredientList = ingredientsFull.map((ingredient, i) => (
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
