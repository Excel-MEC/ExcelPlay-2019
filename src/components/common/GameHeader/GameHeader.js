import React, { useState } from 'react';
import './GameHeader.scss';
import excelPlayLogo from '../../../assets/logo.png';
import SideNav from './SideNav/SideNav';

const MItem = props => {
  return (
    <li className="nav-item">
      <a className="nav-link active" href={props.link}>
        <span className="link-rotate">{props.text}</span>
      </a>
    </li>
  );
};

const GameHeader = props => {
  const [sideMenuVisibility, setSideMenuVisibility] = useState(false);
  function toggleMenu() {
    setSideMenuVisibility(!sideMenuVisibility);
  }
  return (
    <div className="gameHeader">
      <div className="top-banner">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex">
              <div className="excel-play-logo">
                <a href="/">
                  <img
                    src={excelPlayLogo}
                    className="img img-fluid play-logo"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <img
                  src={props.icon}
                  className="img img-fluid game-logo"
                  alt=""
                />
              </div>
              <div>
                <h1>{props.gName}</h1>
              </div>
            </div>
          </div>
          <div className="menu-icon">
            <i className="fa fa-navicon" onClick={toggleMenu} />
          </div>
          <div className={`${sideMenuVisibility.toString()  } sideMenu`}>
            <SideNav toggleMenu={toggleMenu} sideMenuVisibility={sideMenuVisibility}>{props.children}</SideNav>
          </div>
          <div className="col-md-8 d-none d-md-block">
            <ul className="nav justify-content-end nav-main">
              {props.children}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GameHeader, MItem };
