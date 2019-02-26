import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <ul className="nav navbar-nav my-auto nav-main">
      <li>
        <a href="/" className="active">
          <i className="fa fa-home" />
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fa fa-suitcase" />
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fa fa-shopping-cart" />
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fa fa-book" />
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
