import React from 'react';
import './KryptosInfoBar.scss';

const KryptosInfoBar = props => {
  const { level, rank } = props;
  return (
    <div className="wrapper">
      LEVEL<span className="emphasis">{level}</span>&nbsp;&nbsp; RANK
      <span className="emphasis">{rank}</span>
    </div>
  );
};

export default KryptosInfoBar;
