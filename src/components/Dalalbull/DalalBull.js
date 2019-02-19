import React, { Component } from 'react';
import './DalalBull.css';

class DalalBull extends Component {
  render() {
    return (
      <React.Fragment>
        <header>header</header>
        <div className="dalalbull-container">
          <div>
            <input placeholder="Search" className="search-box" />
          </div>
          <div>
            <button type="button" className="buy-button">
              BUY
            </button>
            <button type="button" className="short-button">
              SHORT
            </button>
          </div>
          <div>overall graph and info</div>
        </div>
      </React.Fragment>
    );
  }
}

export default DalalBull;
