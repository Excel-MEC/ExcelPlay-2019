import React from 'react';
import { login } from '../../config/auth0';
import '../../App.scss';

const Login = () => {
  return (
    <div>
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
