import React, { useState } from 'react';
import Trade from '../Trade/Trade';
import './Buy.scss';

const Buy = () => {
  const [pendingDisabled, setPendingDisabled] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  return (
    <div className="buy">
      <div className="quantity-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div>Buy Nifty 50</div>
            <br />
            <Trade
              type="BUY"
              quantity={quantity}
              setQuantity={setQuantity}
              pendingDisabled={pendingDisabled}
              setPendingDisabled={setPendingDisabled}
              price={price}
              setPrice={setPrice}
            />
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-success btn-lg btn-block my-2"
              >
                BUY
              </button>
            </div>
          </div>
          <div className="col-md-6 details">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th>BASE VALUE</th>
                  <td>0.00</td>
                </tr>
                <tr>
                  <th>BROKERAGE</th>
                  <td>0.00</td>
                </tr>
                <tr>
                  <th>TOTAL VALUE</th>
                  <td>0.00</td>
                </tr>
                <tr>
                  <th>CASH AVAILABLE</th>
                  <td>393780.35</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
