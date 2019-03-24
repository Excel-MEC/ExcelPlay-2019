import React, { Component } from 'react';
import './games.scss';

const Games = props => {
  const rank = () => {
    if (props.type === 'ranked') {
      return (
        <div className="rankDiv">
          <div className="rank">
            <p>RANK</p>
          </div>
          <div className="RankValue">{props.rank}</div>
        </div>
      );
    } else {
      return <div className="PlayNow">PLAY NOW</div>;
    }
  };
  return (
    <div className="dalalCell">
      <div>
        <img src={props.logo} alt="dalabull" className={props.imageSize} />
      </div>

      <div className="Rankdetail">
        <div>{props.name}</div>
        {rank()}
      </div>
    </div>
  );
};

export default Games;
