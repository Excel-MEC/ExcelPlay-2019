import React from 'react';
import './PercentageChange.scss';

const ChangeInPercentage = ({ change_per }) => {
  if (change_per > 0) {
    return (
      <span className="percentage-change positive-change">
        <i className="fa fa-arrow-up" />+{change_per}%
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

export default ChangeInPercentage;
