import React from 'react';
import Trade, { tradeProps } from '../Trade/Trade';
import './Sell.scss';

const Sell = () => {
  const props = tradeProps('SELL');
  return (
    <div className="buy">
      <div className="quantity-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div>Sell Nifty 50</div>
            <br />
            <Trade {...props} />
            <div className="row">
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-success btn-lg btn-block my-2"
                >
                  Sell
                </button>
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-success btn-lg btn-block my-2"
                >
                  Short Sell
                </button>
              </div>
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

export default Sell;
