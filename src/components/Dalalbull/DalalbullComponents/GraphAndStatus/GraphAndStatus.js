import React from 'react';
import { Line } from 'react-chartjs-2';
import './GraphAndStatus.scss';

const data = {
  labels: [],
  datasets: [
    {
      data: [],
      label: 'Price',
      borderColor: '#ff6e40',
      fill: false,
      lineTension: 0,
    },
  ],
};

const options = {
  tooltips: {
    displayColors: false,
    backgroundColor: 'black',
    enabled: true,
    mode: 'single',
    bodyFontSize: 15,
    bodyFontFamily: 'Gamja Flower',
    bodyFontColor: 'white',
    yPadding: 5,
    xPadding: 15,
    cornerRadius: 4,
    bodyFontStyle: 'bold',
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          drawBorder: true,
          color: 'grey',
          zeroLineColor: 'white',
        },
        ticks: {
          fontColor: 'white',
          fontFamily: 'Gamja Flower',
          fontSize: 15,
          fontStyle: 'bold',
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          drawBorder: true,
          color: 'grey',
          zeroLineColor: 'white',
        },
        ticks: {
          fontColor: 'white',
          fontFamily: 'Gamja Flower',
          fontSize: 12,
          fontStyle: 'bold',
        },
      },
    ],
  },
};

const GraphAndStatus = props => {
  let new_label = [];
  let new_data = [];
  if (props.graphData) {
    props.graphData.map(gdata => {
      new_label.push(Math.round(gdata[0] / 60));
      new_data.push(gdata[1]);
    });
  }
  data.labels = new_label;
  data.datasets[0].data = new_data;
  return (
    <div className="graph-userdata">
      <div className="inner-flex">
        <h1 align="center">{props.name}</h1>
        <div className="graph">
          <Line data={data} width={100} height={50} options={options} />
        </div>
      </div>
    </div>
  );
};

export default GraphAndStatus;
