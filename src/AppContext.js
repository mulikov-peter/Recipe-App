import React, { createContext, useState, useEffect } from 'react';
import fetchData from './fetchData';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const [recipe, setRecipe] = useState(null);

  // Fetch recipes by category seafood & random recipe
  useEffect(() => {
    Promise.all([
      fetchData('filter.php?c=Seafood').then(setMeals),
      fetchData('random.php').then(recipe => setRecipe(...recipe)),
    ]).then(setLoading(false));
  }, []);

  // Handle select a meal by category
  const handleSelect = selectedOption => {
    const path = 'filter.php?c=';

    setLoading(true);
    (async () => {
      const meals = await fetchData(`${path}${selectedOption}`);

      setMeals(meals);
      setLoading(false);
    })();
  };

  // Handle search recipe
  const handleSearch = inputValue => {
    const path = `search.php?s=`;

    (async () => {
      const recipe = await fetchData(`${path}${inputValue}`);

      setRecipe(...recipe);
    })();
  };

  // Click on meal
  const handleOnClick = id => {
    const path = `lookup.php?i=`;

    (async () => {
      const recipe = await fetchData(`${path}${id}`);

      setRecipe(...recipe);
    })();
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        meals,
        recipe,
        handleSelect,
        handleSearch,
        handleOnClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
