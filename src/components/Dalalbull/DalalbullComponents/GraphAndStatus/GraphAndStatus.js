import React from 'react';
import { Line } from 'react-chartjs-2';
import './GraphAndStatus.scss';

const data = {
  labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
  datasets: [
    {
      data: [96, 300, 196, 760, 990, 450, 780, 1200, 600, 450],
      label: 'Net Worth',
      borderColor: '#ff6e40',
      fill: false,
      lineTension: 0
    }
  ],
};

const options = {
  tooltips: {
    displayColors: false,
    backgroundColor: "black",
    enabled: true,
    mode: "single",
    bodyFontSize: 15,
    bodyFontFamily: "Gamja Flower",
    bodyFontColor: "white",
    yPadding: 5,
    xPadding: 15,
    cornerRadius: 4,
    bodyFontStyle: "bold",
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          drawBorder: true,
          color: "grey",
          zeroLineColor: "white"
        },
        ticks: {
          fontColor: "white",
          fontFamily: "Gamja Flower",
          fontSize: 15,
          fontStyle: "bold"
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          drawBorder: true,
          color: "grey",
          zeroLineColor: "white"
        },
        ticks: {
          fontColor: "white",
          fontFamily: "Gamja Flower",
          fontSize: 12,
          fontStyle: "bold"
        }
      }
    ]
  }
};

const GraphAndStatus = (props) => {
  return (
    <div className="graph-userdata">
      <div className="graph">
        <Line data={data} width={100} height={50} options={options} />
      </div>
      <br />
      <div className=" user-data">
        <div className=" row">
          <div className=" col-lg-6">
            <h1>{props.rank}</h1>
            <h3>Rank</h3>
          </div>
          <div className=" col-lg-6">
            <h1>{props.net_worth}</h1>
            <h3>Net worth</h3>
          </div>
        </div>
        <div className=" row">
          <div className=" col-lg-6">
            <h1>{props.cash_bal}</h1>
            <h3>Cash available</h3>
          </div>
          <div className=" col-lg-6">
            <h1>{props.margin}</h1>
            <h3>Margin</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphAndStatus;
