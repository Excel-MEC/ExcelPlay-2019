import React from 'react';
import { handleLogout } from '../../../config/auth0';

const Logout = props => {
  handleLogout(props.history);
  return null;
};

export default Logout;
