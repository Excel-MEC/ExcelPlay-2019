import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPotfolioHistory } from '../apicalls/apicalls';
import './Portfolio.scss';

const HistoryItem = ({ company, current, number, purchase, type }) => (
  <tr>
    <td>{company}</td>
    <td>{type}</td>
    <td>{number}</td>
    <td>{purchase}</td>
    <td>{current}</td>
    <td>
      <Link to={`/Dalalbull/${company}`}>
        <button type="button" className="btn btn-success bg-success">
          view
        </button>
      </Link>
    </td>
  </tr>
);

const Portfolio = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getPotfolioHistory().then(res => setHistory(res.stockholdings));
  }, []);

  return (
    <div className="sharesInHand">
      <div className="head">Shares In Hand</div>
      <table className="table table-responsive-lg">
        <thead>
          <tr>
            <th scope="col">Shares of</th>
            <th scope="col">Type</th>
            <th scope="col">Shares in Hand</th>
            <th scope="col">Purchase Price</th>
            <th scope="col">Current Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, i) => (
            <HistoryItem {...item} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
