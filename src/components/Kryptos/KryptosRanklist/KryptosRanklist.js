import React, { useEffect, useState } from 'react';
import './KryptosRanklist.scss';
import { fetchKryptosLeaderboard } from '../KryptosApi/ApiCalls';

const KryptosRanklist = () => {
  const [ranklist, setRanklist] = useState([]);

  useEffect(() => {
    fetchKryptosLeaderboard()
      .then(data => {
        setRanklist(data.ranklist);
      });
  }, []);

  const RankListRows = ({ ranklist }) => (
    <>
      {ranklist.map(curr => (
        <tr>
          <td>
            <img src={curr.pic} alt="" className="propic" />
          </td>
          <td>{curr.name}</td>
          <td>{curr.rank}</td>
          <td>{curr.level}</td>
        </tr>
      ))}
    </>
  );

  return (
    <div className="content">
      <h2>Ranklist</h2>
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Rank</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <RankListRows ranklist={ranklist} />
        </tbody>
      </table>
    </div>
  );
};

export default KryptosRanklist;
