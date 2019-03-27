import React from 'react';
import './SideNav.scss';

const SideNav = props => {
  return (
    <div className="sideNav">
      <div className="menu">{props.children}</div>
	    <div className="backDrop" onClick={props.toggleMenu}>.</div>
    </div>
  );
};

export default SideNav;
