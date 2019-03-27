import React from 'react';
import './Games.scss';

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
    }
    return <div className="PlayNow">PLAY NOW</div>;
  };
  return (
    <div className="gameCell">
      <a href={props.href}>
        <div>
          <img src={props.logo} alt="dalabull" className={props.imageSize} />
        </div>

        <div className="Rankdetail">
          <div>{props.name}</div>
          {rank()}
        </div>
      </a>
    </div>
  );
};

export default Games;
