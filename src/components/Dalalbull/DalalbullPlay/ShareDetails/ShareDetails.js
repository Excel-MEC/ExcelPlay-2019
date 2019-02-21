import React from 'react';
import './ShareDetails.css';

const ShareDetails = () => {
  return (
    <div>
      <div className="quantity-wrapper">
        <input
          type="text"
          name="quantity"
          id="quantity-input"
          className="quantity-input"
          placeholder="Quantity"
        />
      </div>
      <button type="button" className="buy-button">
        BUY
      </button>
      <button type="button" className="short-button">
        SHORT
      </button>
    </div>
  );
};

export default ShareDetails;
