import React from 'react';

import AppProvider from '../AppContext';

import Header from './Header/Header';
import MealList from './Meal/MealList';
import Recipe from './Recipe/Recipe';
import Footer from './Footer/Footer';

import './App.css';

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <Header />
        <main>
          <MealList />
          <Recipe />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;
