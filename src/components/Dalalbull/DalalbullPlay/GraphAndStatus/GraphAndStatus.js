import React from 'react';
import { Line } from 'react-chartjs-2';
import './GraphAndStatus.scss';

const data = {
  labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
  datasets: [
    {
      data: [96, 300, 196, 760, 990, 450, 780, 1200, 600, 450],
      label: 'Africa',
      borderColor: '#ff0000',
      fill: false,
      lineTension: 0
    }
  ],
};

const GraphAndStatus = () => {
  return (
    <div className="graph-userdata">
      <div className="graph">
        <Line data={data} width={100} height={50} />
      </div>
      <br />
      <div className=" user-data">
        <div className=" row">
          <div className=" col-lg-6">
            <h1>22</h1>
            <h3>Rank</h3>
          </div>
          <div className=" col-lg-6">
            <h1>850000</h1>
            <h3>Net worth</h3>
          </div>
        </div>
        <div className=" row">
          <div className=" col-lg-6">
            <h1>1000000</h1>
            <h3>Cash available</h3>
          </div>
          <div className=" col-lg-6">
            <h1>96000</h1>
            <h3>Margin</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphAndStatus;
