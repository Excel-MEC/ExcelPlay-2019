import React, { useState } from 'react';
import Trade, { tradeProps } from '../Trade/Trade';
import './Sell.scss';
import { submitSellOrShortCover, submitBuyOrShortSell } from '../../apicalls/apicalls';

const Sell = ({ symbol, current_price, total_transactions, cash_bal }) => {
  let props = tradeProps('SELL');
  const [base, setBase] = useState(0.00);
  const [brokerage, setBrokerage] = useState(0.00);
  const [total, setTotal] = useState(0.00);
  props = { ...props, setBase, setBrokerage, setTotal, current_price, total_transactions };
  const isGoodTime = () => {
    // return true;
    const x = new Date();
    const time = x.getUTCHours() * 60 + x.getUTCMinutes();
    const day = x.getDay();
    if ((time >= 225 && time < 1000) && (day >= 1 && day <= 5))
      return true;
    return false;
  }
  const updateValues = () => {
    props.setBase(0.00);
    props.setBrokerage(0.00);
    props.setTotal(0.00);
  }
  return (
    <div className="buy">
      {isGoodTime() ?
        (<div className="quantity-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div>Sell Nifty 50</div>
              <br />
              <Trade {...props} />
              <div className="row">
                <div className="col-lg-6">
                  <button
                    type="button"
                    className="btn btn-success btn-lg btn-block my-2"
                    onClick={e => {
                      e.preventDefault();
                      if (props.pendingDisabled) {
                        submitSellOrShortCover(props.quantity, symbol, null, true).then(res => {
                          props.setQuantity(0);
                          updateValues();
                          window.alert(res.msg);
                        }).catch(err => window.alert(err));
                      } else {
                        submitSellOrShortCover(props.quantity, symbol, props.price, true).then(res => {
                          props.setQuantity(0);
                          updateValues();
                          window.alert(res.msg);
                        }).catch(err => window.alert(err));
                      }
                    }}
                  >
                    Sell
                </button>
                </div>
                <div className="col-lg-6">
                  <button
                    type="button"
                    className="btn btn-success btn-lg btn-block my-2"
                    onClick={e => {
                      e.preventDefault();
                      if (props.pendingDisabled) {
                        submitBuyOrShortSell(props.quantity, symbol, null, false).then(res => {
                          props.setQuantity(0);
                          updateValues();
                          window.alert(res.msg);
                        }).catch(err => window.alert(err));
                      } else {
                        submitBuyOrShortSell(props.quantity, symbol, props.price, false).then(res => {
                          props.setQuantity(0);
                          updateValues();
                          window.alert(res.msg);
                        }).catch(err => window.alert(err));
                      }
                    }}
                  >
                    Short Sell
                </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 details">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th>BASE VALUE</th>
                    <td>{base}</td>
                  </tr>
                  <tr>
                    <th>BROKERAGE</th>
                    <td>{brokerage}</td>
                  </tr>
                  <tr>
                    <th>TOTAL VALUE</th>
                    <td>{total}</td>
                  </tr>
                  <tr>
                    <th>CASH AVAILABLE</th>
                    <td>{cash_bal}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>) :
        (<h1>Market Closed</h1>)}
    </div>
  );
};

export default Sell;
