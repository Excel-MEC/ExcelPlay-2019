import React from 'react';
import './DalalbullRaklist.scss';

const DalalbullRanklist = () => {
  return (
    <div className="content">
      <h2>Ranklist</h2>
      <table className="table">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Net Worth</th>
        </tr>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {/* <img src="{{ record.pic }}" alt="" class="propic"> */}
              Name
            </td>
            <td>55</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DalalbullRanklist;
