import React, { createContext, useState, useEffect } from 'react';
// import fetchData from './fetchData';

import useHttp from './hooks/useHttp';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [isRecipeLoading, setIsRecipeLoading] = useState(false);
  const [isMealLoading, setIsMealLoading] = useState(false);

  const { isLoading, error, sendRequest: fetchData } = useHttp();

  // Fetching random meal-recipe & seafood category of meal
  useEffect(() => {
    setIsMealLoading(true);
    setIsRecipeLoading(true);

    Promise.all([
      fetchData(
        {
          url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`,
        },
        recObj => {
          setMeals(recObj);
          setIsMealLoading(false);
        }
      ),
      fetchData(
        {
          url: `https://www.themealdb.com/api/json/v1/1/random.php`,
        },
        recObj => {
          setRecipe(...recObj);
          setIsRecipeLoading(false);
        }
      ),
    ]);
  }, [fetchData]);

  // Handle select a meal by category - search by category
  const handleSelect = selectedOption => {
    setIsMealLoading(true);

    fetchData(
      {
        url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedOption}`,
      },
      recObj => {
        setMeals(recObj);
        setIsMealLoading(false);
      }
    );
  };

  // Handle search recipe - search by meal name
  const handleSearch = inputValue => {
    // setIsMealLoading(true);
    setIsRecipeLoading(true);
    fetchData(
      {
        url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
      },
      recObj => {
        setRecipe(...recObj);
        setIsRecipeLoading(false);
      }
    );

    // Promise.all([
    //   fetchData(
    //     {
    //       url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
    //     },
    //     recObj => {
    //       setRecipe(...recObj);
    //       setIsRecipeLoading(false);
    //     }
    //   ),
    //   fetchData(
    //     {
    //       url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
    //     },
    //     recObj => {
    //       setMeals(recObj);
    //       setIsMealLoading(false);
    //     }
    //   ),
    // ]);
  };

  // Click on meal - search by id
  const handleOnClick = id => {
    setIsRecipeLoading(true);
    fetchData(
      {
        url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      },
      recObj => {
        setRecipe(...recObj);
        setIsRecipeLoading(false);
      }
    );
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isRecipeLoading,
        isMealLoading,
        meals,
        recipe,
        error,
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
