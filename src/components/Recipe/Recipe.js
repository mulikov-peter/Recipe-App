import React, { useContext } from 'react';

import { AppContext } from '../../AppContext';

import Loader from '../Loader/Loader';
import IngredientList from '../Ingredient/IngredientList';

import './Recipe.css';

const Recipe = () => {
  const { recipe, isLoading, isRecipeLoading, error } = useContext(AppContext);

  let recipeComponent = recipe && (
    <>
      <h1 className='recipe__title'>{recipe.title}</h1>
      <img className='recipe__img' src={recipe.image_url} alt={recipe.title} />

      {recipe.strSource ? (
        <a
          className='recipe__source'
          href={recipe.source}
          rel='noreferrer'
          target='_blank'
        >
          Link to source &rarr;
        </a>
      ) : null}

      <p>
        Category: {recipe.category}. Traditionally for {recipe.area}.
      </p>

      <IngredientList />
      <p className='recipe__instructions'>{recipe.instructions}</p>
      <a href={recipe.youtube} rel='noreferrer' target='_blank'>
        Recipe on YouTube
      </a>
    </>
  );

  const content = isRecipeLoading && isLoading ? <Loader /> : recipeComponent;

  return <div className='recipe'>{error ? <h2>{error}</h2> : content}</div>;
};

export default Recipe;
