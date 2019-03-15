import React from 'react';
import './SharesInHand.scss';

const SharesInHand = () => {
  return (
    <div className="sharesInHand">
      <div className="head">Shares In Hand</div>
      <table className="table">
        <thead>
        <tr>
          <th scope="col">Type</th>
          <th scope="col">Shares in Hand</th>
          <th scope="col">Current Price</th>
          <th scope="col">Gain</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>BUY</td>
          <td>80</td>
          <td>1820.00</td>
          <td>3.62</td>
          <td><button className="btn btn-info">Sell</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SharesInHand;
