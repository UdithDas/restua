// src/App.js
import React from 'react';
import './App.css'; // You can remove this line if you don't need the default styles
import RestaurantForm from './RestaurantForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurant Form App</h1>
        <RestaurantForm />
      </header>
    </div>
  );
}

export default App;
