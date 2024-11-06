import React from 'react';
import FavoriteFood from './FavoriteFood';

function App (){
  const fruits = [
    { id: 1, name: 'Apple', color: 'Red', rating: 5 },
    { id: 2, name: 'Banana', color: 'Yellow', rating: 4 },
    { id: 3, name: 'Cherry', color: 'Red', rating: 5 },
    { id: 4, name: 'Grape', color: 'Purple', rating: 4 },
    { id: 5, name: 'Orange', color: 'Orange', rating: 5 },
  ];

  const porkDishes = [];

  return (
    <div className="App">
      <FavoriteFood items={fruits} type="Fruits" />
      <FavoriteFood items={porkDishes} type="Pork Dishes" />
    </div>
  );
};

export default App;
