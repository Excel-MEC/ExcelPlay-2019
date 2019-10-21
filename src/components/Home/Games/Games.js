import React from 'react';
import './Games.scss';

const Games = props => {
  const { type, status, href, logo, name } = props;

  const rank = () => {
    if (type === 'ranked') {
      return (
        <div className="rankDiv">
          <div className="rank">
            <p>RANK</p>
          </div>
          <div className="RankValue">{props.rank}</div>
        </div>
      );
    }
    return <div className="PlayNow">{status}</div>;
  };
  return (
    <div className="games">
      <a href={href}>
        <div className="gameCell">
          <div>
            <img src={logo} alt="dalabull" className="pic" />
          </div>

          <div className="Rankdetail">
            <div>{name}</div>
            {rank()}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Games;
