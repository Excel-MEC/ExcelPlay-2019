import React from 'react';
import { handleAuthentication } from '../../config/auth0';

const Callback = props => {
  handleAuthentication(props.location.hash, props.history);
  return null;
};

export default Callback;
