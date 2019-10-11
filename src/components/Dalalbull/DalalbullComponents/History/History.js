import React, { useState, useEffect } from 'react';
import { getFullHistory } from '../apicalls/apicalls';

const HistoryItem = ({ buy_ss, price, quantity, symbol, time, total }) => (
  <tr>
    <td>{time}</td>
    <td>{symbol}</td>
    <td>{buy_ss}</td>
    <td>{price}</td>
    <td>{quantity}</td>
    <td>{total}</td>
  </tr>
);

const History = () => {
  const [fullHistory, setFullHistory] = useState([]);
  useEffect(() => {
    getFullHistory().then(res => setFullHistory(res.history));
  }, []);
  return (
    <table className="table table-responsive-lg">
      <thead>
        <tr>
          <th scope="col">Time</th>
          <th scope="col">Shares of</th>
          <th scope="col">Type</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        {fullHistory.map((item, i) => (
          <HistoryItem {...item} key={i} />
        ))}
        {fullHistory.length === 0 ? (
          <tr>
            <td colSpan="6" align="center">
              You haven't done any transactions yet
            </td>
          </tr>
        ) : null}
      </tbody>
    </table>
  );
};

export default History;
