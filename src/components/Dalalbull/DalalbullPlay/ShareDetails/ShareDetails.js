import React, { useState } from 'react';
import './ShareDetails.scss';

const ShareDetails = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="share-details">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="/dalalbull/">
            Buy
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/dalalbull/">
            Sell
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/dalalbull/">
            History
          </a>
        </li>
      </ul>
      <br />
      <div className="quantity-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div>Buy Share</div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <div>
                <button
                  className="btn increment-button"
                  onClick={e => setQuantity(quantity - 1)}
                >
                  <icon className="fa fa-minus" />
                </button>
              </div>
              <div>
                <input
                  type="number"
                  name="quantity"
                  id="quantity-input"
                  className="quantity-input text-center"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                />
              </div>
              <div>
                <button
                  className="btn increment-button"
                  onClick={e => setQuantity(quantity + 1)}
                >
                  <icon className="fa fa-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <button type="button" className="btn btn-success btn-block my-2">
            BUY
          </button>
        </div>
        <div className="col-md-6">
          <button type="button" className="btn btn-danger btn-block my-2">
            SHORT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareDetails;
