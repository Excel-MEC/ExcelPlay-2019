import React from 'react';
import './Stock.scss';

const Stock = ({ open_price, current_price, high, low, change }) => {
  console.log('hai');
  return (
    <div className="stock">
      <table className="table table-borderless">
        <tbody>
          <tr>
            <th>Open</th>
            <td>{open_price}</td>
          </tr>
          <tr>
            <th>Current Price</th>
            <td>{current_price}</td>
          </tr>
          <tr>
            <th>High</th>
            <td>{high}</td>
          </tr>
          <tr>
            <th>Low</th>
            <td>{low}</td>
          </tr>
          <tr>
            <th>Change</th>
            <td>{change}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
