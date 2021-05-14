import React, { useContext } from 'react';

import { AppContext } from '../../AppContext';

import Loader from '../Loader/Loader';
import IngredientList from '../Ingredient/IngredientList';

import './Recipe.css';

const Recipe = () => {
  const { recipe } = useContext(AppContext);

  // const {
  //   strMeal: title,
  //   strCategory: category,
  //   strMealThumb: image_url,
  //   strInstructions: instructions,
  //   strSource: source,
  //   strYoutube: youtube,
  //   strArea: area,
  // } = recipe;

  const recipeComponent = recipe ? (
    <>
      <h1 className='recipe__title'>{recipe.strMeal}</h1>
      <img
        className='recipe__img'
        src={recipe.strMealThumb}
        alt={recipe.title}
      />

      {recipe.strSource ? (
        <a
          className='recipe__source'
          href={recipe.strSource}
          rel='noreferrer'
          target='_blank'
        >
          Link to source &rarr;
        </a>
      ) : null}

      <p>
        Category: {recipe.strCategory}. Traditionally for {recipe.strArea}.
      </p>

      <IngredientList />
      <p className='recipe__instructions'>{recipe.strInstructions}</p>
      <a href={recipe.strYoutube} rel='noreferrer' target='_blank'>
        Recipe on youtube
      </a>
    </>
  ) : (
    <Loader />
  );

  return <div className='recipe'>{recipeComponent}</div>;
};

export default Recipe;
