import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/Dalalbull">
          <i className="fa fa-suitcase" />
        </Link>
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
