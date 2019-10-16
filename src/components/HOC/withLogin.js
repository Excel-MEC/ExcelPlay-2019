import React from 'react';
import { Redirect } from 'react-router-dom';

const withLogin = Component => {
  if (
    localStorage.getItem('access_token') &&
    localStorage.getItem('expires_at')
  ) {
    const currentDate = new Date();
    const newDate = new Date(JSON.parse(localStorage.getItem('expires_at')));
    if (currentDate<newDate) {
      return Component;
    } else {
      alert('Login Expired');
    }
  } else {
    alert('Not Logged in');
  }
  return () => <Redirect to="/login" />;
};

export default withLogin;
