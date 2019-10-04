import React from 'react';

const withLogin = (Component) => {
  if (
    localStorage.getItem('access_token') &&
    localStorage.getItem('expires_at')
  ) {
    if (localStorage.getItem('expires_at') < new Date()) {
      alert("Login Expired");
    } else {
      return Component;
    }
  } else {
    alert("Not Logged in");
  }
};

export default withLogin;
