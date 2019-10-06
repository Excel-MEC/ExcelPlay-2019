import React from 'react';
import Trade, { tradeProps } from '../Trade/Trade';
import './Buy.scss';
import { submitBuyOrShortSell } from '../../apicalls/apicalls';

const Buy = ({ company }) => {
  const props = tradeProps('BUY');
  return (
    <div className="buy">
      <div className="quantity-wrapper">
        <div className="row">
          <div className="col-lg-6">
            <div>Buy Nifty 50</div>
            <br />
            <Trade {...props} />
            <div className="col-lg-6">
              <button
                type="button"
                className="btn btn-success btn-lg btn-block my-2"
                onClick={e => {
                  e.preventDefault();
                  if (props.pendingDisabled) {
                    submitBuyOrShortSell(props.quantity, company, null, true);
                  } else {
                    submitBuyOrShortSell(props.quantity, company, props.price, true);
                  }
                }}
              >
                BUY
              </button>
            </div>
          </div>
          <div className="col-lg-6 details">
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
