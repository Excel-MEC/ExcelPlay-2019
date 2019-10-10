import React, { useState, useEffect } from 'react';
import { getPendingHistory, cancelPending } from '../apicalls/apicalls';

const fetchPendingHistory = setPending => {
  getPendingHistory().then(res => setPending(res.pending));
};

const HistoryItem = ({
  type,
  value,
  quantity,
  symbol,
  current_price,
  id,
  setPending,
}) => (
  <tr>
    <td>{symbol}</td>
    <td>{type}</td>
    <td>{quantity}</td>
    <td>{value}</td>
    <td>{current_price}</td>
    <td>
      <button
        className="btn btn-danger"
        onClick={() => {
          const sure = window.confirm(
            'Are you sure you want to cancel this transaction?',
          );
          if (sure) {
            cancelPending(id).then(res => fetchPendingHistory(setPending));
          }
        }}
      >
        Cancel
      </button>
    </td>
  </tr>
);

const Pending = () => {
  const [pending, setPending] = useState([]);
  useEffect(() => {
    fetchPendingHistory(setPending);
  }, []);
  return (
    <table className="table table-responsive-lg">
      <thead>
        <tr>
          <th scope="col">Shares of</th>
          <th scope="col">Type</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Current Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {pending.map((item, i) => (
          <HistoryItem {...item} setPending={setPending} key={i} />
        ))}
      </tbody>
    </table>
  );
};

export default Pending;
