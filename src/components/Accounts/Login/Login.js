import React from 'react';
import { login } from '../../../config/auth0';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <button type="button" className="btn" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
