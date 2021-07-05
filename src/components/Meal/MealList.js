import React, { useContext } from 'react';

import { AppContext } from '../../AppContext';

import Loader from '../Loader/Loader';
import Meal from './Meal';

const MealList = () => {
  const { meals } = useContext(AppContext);

  const mealsList = meals.length ? (
    meals.map(meal => <Meal key={meal.id} meal={meal} />)
  ) : (
    <Loader />
  );

  return (
    <div className='meals'>
      <ul className='meal__list'>{mealsList}</ul>
    </div>
  );
};

export default MealList;
