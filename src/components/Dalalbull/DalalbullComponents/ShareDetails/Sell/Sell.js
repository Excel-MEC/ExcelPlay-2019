import React, { useState, useEffect } from 'react';
import Trade, { tradeProps } from '../Trade/Trade';
import './Sell.scss';
import {
  submitSellOrShortCover,
  submitBuyOrShortSell,
  getPortfolio,
  getDashboard,
  getIsGoodTime,
} from '../../apicalls/apicalls';

const Sell = ({
  symbol,
  current_price,
  total_transactions,
  cash_bal,
  setPortfolioDetails,
  setDashboardDetails,
}) => {
  let props = tradeProps('SELL');
  const [base, setBase] = useState(0.0);
  const [brokerage, setBrokerage] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const [isGoodTime, setIsGoodTime] = useState(false);
  useEffect(() => {
    getIsGoodTime().then(res => {
      setIsGoodTime(res.response);
    });
  }, []);
  props = {
    ...props,
    setBase,
    setBrokerage,
    setTotal,
    current_price,
    total_transactions,
  };
  const updateValues = () => {
    props.setBase(0.0);
    props.setBrokerage(0.0);
    props.setTotal(0.0);
  };
  const updateAfterTrade = res => {
    props.setQuantity(0);
    updateValues();
    getPortfolio()
      .then(portDetails => {
        setPortfolioDetails(portDetails);
        getDashboard()
          .then(dashDetails => {
            setDashboardDetails(dashDetails);
            window.alert(res.msg);
          })
          .catch(err => window.alert(err));
      })
      .catch(err => window.alert(err));
  };
  return (
    <div className="buy">
      {isGoodTime ? (
        <div className="quantity-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div>Sell {symbol}</div>
              <br />
              <Trade {...props} />
              <div className="row">
                <div className="col-lg-6">
                  <button
                    type="button"
                    className="btn btn-success btn-lg btn-block my-2"
                    onClick={e => {
                      e.preventDefault();
                      if (!(props.quantity === 0))
                        if (props.pendingDisabled) {
                          submitSellOrShortCover(
                            props.quantity,
                            symbol,
                            null,
                            true,
                          )
                            .then(res => {
                              updateAfterTrade(res);
                            })
                            .catch(err => window.alert(err));
                        } else {
                          submitSellOrShortCover(
                            props.quantity,
                            symbol,
                            props.price,
                            true,
                          )
                            .then(res => {
                              updateAfterTrade(res);
                            })
                            .catch(err => window.alert(err));
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
                        submitSellOrShortCover(
                          props.quantity,
                          symbol,
                          null,
                          false,
                        )
                          .then(res => {
                            updateAfterTrade(res);
                          })
                          .catch(err => window.alert(err));
                      } else {
                        submitSellOrShortCover(
                          props.quantity,
                          symbol,
                          props.price,
                          false,
                        )
                          .then(res => {
                            updateAfterTrade(res);
                          })
                          .catch(err => window.alert(err));
                      }
                    }}
                  >
                    Short Cover
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
        </div>
      ) : (
        <h1>Market Closed</h1>
      )}
    </div>
  );
};

export default Sell;
