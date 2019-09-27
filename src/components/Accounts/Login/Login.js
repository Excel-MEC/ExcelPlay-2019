import React from 'react';
import { Route } from 'react-router-dom';
import { login } from '../../../config/auth0';
import Callback from './callback';
import './Login.scss';

const LoginButton = () => (
  <button type="button" className="btn" onClick={login}>
    Login
  </button>
);

const Login = props => {
  const { match } = props;
  return (
    <div className="login">
      <Route exact path={`${match.url}/`} component={LoginButton} />
      <Route path={`${match.url}/callback/`} component={Callback} />
    </div>
  );
};

export default Login;
