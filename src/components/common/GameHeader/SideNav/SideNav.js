import React from 'react';
import './SideNav.scss';

const SideNav = props => {
  return (
    <div className="sideNav">
      <div className={props.sideMenuVisibility + ' menu'}>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fa fa-home" /> HOME{' '}
          </a>
        </li>
        {props.children}
      </div>
      <div className="backDrop" onClick={props.toggleMenu} />
    </div>
  );
};

export default SideNav;
