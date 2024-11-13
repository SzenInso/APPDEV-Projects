import { useState } from 'react';
import './App.css';
import Grocery from './Grocery';

function App() {
  const items = [
    { id: 1, name: "Grapes", price: 10 },
    { id: 2, name: "Oranges", price: 15 },
    { id: 3, name: "Kiwis", price: 20 },
    { id: 4, name: "Bananas", price: 25 },
    { id: 5, name: "Cucumbers", price: 30 },
  ];

  return (
    <>
      <Grocery items={items} />
    </>
  );
}

export default App;
