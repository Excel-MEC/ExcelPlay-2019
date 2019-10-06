import React from 'react';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <div className="sharesInHand">
      <div className="head">Shares In Hand</div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Shares of</th>
            <th scope="col">Type</th>
            <th scope="col">Shares in Hand</th>
            <th scope="col">Current Price</th>
            <th scope="col">Gain</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TSLA</td>
            <td>BUY</td>
            <td>80</td>
            <td>1820.00</td>
            <td>3.62</td>
            <td>
              <button type="button" className="btn">
                Sell
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
