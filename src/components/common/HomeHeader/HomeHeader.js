import React from 'react';
import './HomeHeader.scss';
import logo from '../../../assets/logo.png';

const HomeHeader = () => {
  return (
    <div className="big-header-bg">
      <div className="logo-container-bg" />
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </div>
  );
};

export default HomeHeader;
