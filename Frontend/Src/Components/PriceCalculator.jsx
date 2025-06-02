// src/components/PriceCalculator/PriceCalculator.jsx
import React, { useState } from 'react';

const PriceCalculator = () => {
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: ''
  });
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    // Mock calculation - replace with your actual logic
    const { length, width, height } = dimensions;
    if (length && width && height && weight) {
      const volume = (parseFloat(length) * parseFloat(width) * parseFloat(height)) / 1728; // in cubic feet
      const calculatedPrice = volume * 5 + parseFloat(weight) * 2; // Example pricing formula
      setPrice(calculatedPrice.toFixed(2));
    }
  };

  return (
    <div className="price-calculator">
      <h3>Price Calculator</h3>
      <div className="input-group">
        <label>Length (in)</label>
        <input 
          type="number" 
          value={dimensions.length}
          onChange={(e) => setDimensions({...dimensions, length: e.target.value})}
        />
      </div>
      <div className="input-group">
        <label>Width (in)</label>
        <input 
          type="number" 
          value={dimensions.width}
          onChange={(e) => setDimensions({...dimensions, width: e.target.value})}
        />
      </div>
      <div className="input-group">
        <label>Height (in)</label>
        <input 
          type="number" 
          value={dimensions.height}
          onChange={(e) => setDimensions({...dimensions, height: e.target.value})}
        />
      </div>
      <div className="input-group">
        <label>Weight (lbs)</label>
        <input 
          type="number" 
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculatePrice}>Calculate Price</button>
      {price && <div className="result">Estimated Price: ${price}</div>}
    </div>
  );
};

export default PriceCalculator;