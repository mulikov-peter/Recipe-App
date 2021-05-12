import React, { useContext } from 'react';

import Context from '../../context';

import Meal from './Meal';

const MealList = () => {
  // const { meals } = useContext(Context);
  // const mealsList = meals.map(meal => <Meal key={meal.idMeal} meal={meal} />);

  // return (
  //   <div className='meals'>
  //     <ul className='meal__list'>{mealsList}</ul>
  //   </div>
  // );
  //=========================================

  const { meals } = useContext(Context);

  const mealsList = meals.map(meal => <Meal key={meal.idMeal} meal={meal} />);

  return (
    <div className='meals'>
      <ul className='meal__list'>{mealsList}</ul>{' '}
    </div>
  );
};

export default MealList;
