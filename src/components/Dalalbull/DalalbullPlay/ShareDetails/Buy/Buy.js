import React, { useState } from 'react';
import './Buy.scss';

const toggleDisable = (e, setDisable) => {
  if (e.target.checked) {
    setDisable(false);
  } else {
    setDisable(true);
  }
};

const Buy = props => {
  const [pendingDisable, setDisable] = useState(true);
  return (
    <div className="buy">
      <div className="quantity-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div>Buy Nifty 50</div>
            <br />
            <div className="d-flex">
              <div className="button">
                <button
                  className="btn increment-button"
                  onClick={() => {
                    if (props.quantity !== 0) {
                      return props.setQuantity(props.quantity - 1);
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
                  value={props.quantity}
                  onChange={e =>
                    props.setQuantity(parseInt(e.target.value | 0))
                  }
                />
              </div>
              <div>
                <button
                  className="btn increment-button"
                  onClick={e => props.setQuantity(props.quantity + 1)}
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
                onChange={e => toggleDisable(e, setDisable)}
              />
              <label htmlFor="pending" className="small">Pending</label>
              <br />
              <div className={pendingDisable.toString()}>
                <div className="small">
                  <span className="pending small">
                    BUY THE STOCK ONLY WHEN IT REACHES
                  </span>
                </div>
                <div className="d-flex" id="pending_block">
                  <div className="button">
                    <button
                      className="btn increment-button"
                      disabled={pendingDisable}
                      onClick={e => {
                        if (props.quantity !== 0) {
                          return props.setQuantity(props.quantity - 1);
                        }
                      }}
                    >
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity-input"
                      className="quantity-input text-center"
                      placeholder="Quantity"
                      disabled={pendingDisable}
                      value={props.quantity}
                      onChange={e =>
                        props.setQuantity(parseInt(e.target.value | 0))
                      }
                    />
                  </div>
                  <div>
                    <button
                      className="btn increment-button"
                      disabled={pendingDisable}
                      onClick={e => props.setQuantity(props.quantity + 1)}
                    >
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </div>
            </span>
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
