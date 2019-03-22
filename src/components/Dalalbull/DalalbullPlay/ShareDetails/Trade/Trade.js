import React, { useState } from 'react';
import './Trade.scss';

const toggleDisable = (e, setDisable) => {
  if (e.target.checked) {
    setDisable(false);
  } else {
    setDisable(true);
  }
};

const Trade = ({ type }) => {
  const [pendingDisabled, setPendingDisabled] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  return (
    <div className="buy">
      <div className="quantity-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div>{type === 'buy' ? 'Buy' : 'Sell'} Nifty 50</div>
            <br />
            <div className="d-flex">
              <div className="button">
                <button
                  type="button"
                  className="btn increment-button"
                  onClick={() => {
                    if (quantity > 0) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  <i className="fa fa-minus" />
                </button>
              </div>
              <div className="align-middle">
                <input
                  type="number"
                  name="quantity"
                  id="quantity-input"
                  className="quantity-input text-center"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={e => setQuantity(parseInt(e.target.value, 10))}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn increment-button"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>

            <br />
            <span className="pending">
              <input
                type="checkbox"
                id="pending"
                onChange={() => setPendingDisabled(!pendingDisabled)}
              />
              <label htmlFor="pending" className="small">
                Pending
              </label>
              <br />
              <div className={pendingDisabled.toString()}>
                <div className="small">
                  <span className="pending small">
                    BUY THE STOCK ONLY WHEN IT REACHES
                  </span>
                </div>
                <div className="d-flex" id="pending_block">
                  <div>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity-input"
                      className="quantity-input text-center"
                      placeholder="Quantity"
                      disabled={pendingDisabled}
                      value={price}
                      onChange={e => setPrice(parseInt(e.target.value, 10))}
                    />
                  </div>
                </div>
              </div>
            </span>
            {type === 'buy' ? (
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-success btn-lg btn-block my-2"
                >
                  BUY
                </button>
              </div>
            ) : (
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-success btn-lg btn-block my-2"
                >
                  Sell
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-lg btn-block my-2"
                >
                  Short Sell
                </button>
              </div>
            )}
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

export default Trade;
