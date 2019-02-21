import React, { Component } from 'react';
import DalalbullHeader from './DalalbullHeader/DalalbullHeader';
import DalalbullPlay from './DalalbullPlay/DalalbullPlay';
import './DalalBull.css';

class DalalBull extends Component {
  render() {
    return (
      <div>
        <DalalbullHeader />
        <DalalbullPlay />
      </div>
    );
  }
}

export default DalalBull;
