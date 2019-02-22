import React, { useState } from 'react';
import './ShareDetails.css';

const ShareDetails = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      <div className="quantity-wrapper">
        <button
          className="btn btn-danger increment-button"
          onClick={e => setQuantity(quantity - 1)}
        >
          <icon className="fa fa-minus" />
        </button>
        <input
          type="number"
          name="quantity"
          id="quantity-input"
          className="quantity-input"
          placeholder="Quantity"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <button
          className="btn btn-success increment-button"
          onClick={e => setQuantity(quantity + 1)}
        >
          <icon className="fa fa-plus" />
        </button>
      </div>
      <button type="button" className="btn btn-success">
        BUY
      </button>
      <button type="button" className="btn btn-danger">
        SHORT
      </button>
    </div>
  );
};

export default ShareDetails;
