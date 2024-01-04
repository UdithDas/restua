// src/RestaurantForm.js
import React, { useState } from 'react';

const RestaurantForm = () => {
  const [restaurantType, setRestaurantType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log('Submitted with restaurant type:', restaurantType);
  };

  return (
    <div>
      <h2>Restaurant Type</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="restaurantType">Select Restaurant Type:</label>
          <select
            id="restaurantType"
            name="restaurantType"
            value={restaurantType}
            onChange={(e) => setRestaurantType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="veg">Veg</option>
            <option value="nonVeg">Non-Veg</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RestaurantForm;
