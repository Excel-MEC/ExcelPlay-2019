import React, { useState, useEffect } from 'react';
import { getRanklist } from '../DalalbullComponents/apicalls/apicalls';
import './DalalbullRaklist.scss';

const Rank = ({ name, pic, rank, level }) => {
  return (
    <tr>
      <td>{rank}</td>
      <td>
        <img src={pic} alt="" className="propic" />
        {name}
      </td>
      <td>{level}</td>
    </tr>
  );
};

const DalalbullRanklist = () => {
  const [ranklist, setRanklist] = useState([]);
  useEffect(() => {
    getRanklist().then(res => setRanklist(res.ranklist));
  }, []);
  return (
    <div className="content">
      <h2>Ranklist</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Net Worth</th>
          </tr>
        </thead>
        <tbody>
          {ranklist.map(rank => (
            <Rank {...rank} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DalalbullRanklist;
