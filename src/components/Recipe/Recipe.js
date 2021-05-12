import React, { useContext } from 'react';

import Context from '../../context';

import IngredientList from '../Ingredient/IngredientList';

import './Recipe.css';

const Recipe = () => {
  const { recipe } = useContext(Context);

  const {
    strMeal: title,
    strCategory: category,
    strMealThumb: image_url,
    strInstructions: instructions,
    strSource: source,
    strYoutube: youtube,
    strArea: area,
  } = recipe;

  return (
    <div className='recipe'>
      <h1 className='recipe__title'>{title}</h1>
      <img className='recipe__img' src={image_url} alt={title} />

      {source ? (
        <a
          className='recipe__source'
          href={source}
          rel='noreferrer'
          target='_blank'
        >
          Link to source &rarr;
        </a>
      ) : null}

      <p>
        Category: {category}. Traditionally for {area}.
      </p>

      <IngredientList />
      <p className='recipe__instructions'>{instructions}</p>
      <a href={youtube} rel='noreferrer' target='_blank'>
        Recipe on youtube
      </a>
    </div>
  );
};

export default Recipe;
