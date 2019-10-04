import React from 'react';

const ChangeInPercentage = ({ change_per }) => {
  if (change_per > 0) {
    return (
      <span className="percentage-change positive-change">
        <i className="fa fa-arrow-up" />
        {change_per}%
      </span>
    );
  } else {
    return (
      <span className="percentage-change negative-change">
        <i className="fa fa-arrow-down" />
        {change_per}%
      </span>
    );
  }
};

const CompanyItem = ({ name, current_price, change_per }) => {
  return (
    <div className="company" data-toggle="modal" data-target="#share-modal">
      <div className="row">
        <div className="c-details">
          <div className="float-left">
            <h1>{name}</h1>
            <p>Shares of {name}</p>
          </div>
          <div className="float-right">
            <div className="data">
              <span className="current-price">{current_price}</span>
              <ChangeInPercentage change_per={change_per}/>
              <br />
              <i className="fa fa-arrow-circle-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;
