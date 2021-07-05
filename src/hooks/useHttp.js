import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      const data = await response.json();

      if (data.meals === null)
        throw new Error(
          'Probably, we could not found this query... Please, try another one'
        );

      const ingredients = [];
      const measures = [];

      const recipes = data.meals.map(el => {
        for (const key in el) {
          if (key.slice(0, 13) === 'strIngredient' && el[key])
            ingredients.push(el[key]);

          if (key.slice(0, 10) === 'strMeasure' && el[key])
            measures.push(el[key]);
        }

        const ingredientsFull = ingredients.map((el, i) => {
          return { ingredient: el, measure: measures[i] };
        });

        const transformedRecipe = {
          id: el.idMeal,
          title: el.strMeal,
          category: el.strCategory,
          image_url: el.strMealThumb,
          instructions: el.strInstructions,
          source: el.strSource,
          youtube: el.strYoutube,
          area: el.strArea,
          ingredients,
          measures,
          ingredientsFull,
        };
        return transformedRecipe;
      });

      applyData(recipes);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
