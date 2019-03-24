import React, { Component } from 'react';
import './games.scss';

class Games extends Component {
  render() {
    const Gametype = this.props.type;
    if (Gametype === 'ranked') {
      return (
        <div className="dalalCell">
          <div>
            <img
              src={this.props.logo}
              alt="dalabull"
              className={this.props.imageSize}
            />
          </div>

          <div className="Rankdetail">
            <div>{this.props.name}</div>
            <div className="rankDiv">
              <div className="rank">
                <p>RANK</p>
              </div>
              <div className="RankValue">{this.props.rank}</div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="dalalCell">
        <div>
          <img
            src={this.props.logo}
            alt="#include"
            className={this.props.imageSize}
          />
        </div>

        <div className="Rankdetail">
          <div>{this.props.name}</div>
          <div className="PlayNow">PLAY NOW</div>
        </div>
      </div>
    );
  }
}

export default Games;
