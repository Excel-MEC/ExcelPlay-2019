import React from 'react';
import { Redirect } from 'react-router-dom';

const withLogin = Component => {
  if (
    localStorage.getItem('access_token') &&
    localStorage.getItem('expires_at')
  ) {
    if (new Date().getTime() >= parseInt(localStorage.getItem('expires_at'))) {
      alert('Login Expired');
    } else {
      return Component;
    }
  } else {
    alert('Not Logged in');
  }
  return () => <Redirect to="/login" />;
};

export default withLogin;
