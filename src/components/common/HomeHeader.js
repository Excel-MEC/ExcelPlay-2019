import React, { Component } from 'react';
import '../../App.css';
import logo from '../../assets/logo.png';

class HomeHeader extends Component {
  render() {
    return (
      <div className="big-header-bg">
        <div className="logo-container-bg" />
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
    );
  }
}

export default HomeHeader;
