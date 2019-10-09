import React from 'react';
import { Route } from 'react-router-dom';
import { login } from '../../../config/auth0';
import Callback from './callback';
import './Login.scss';
import HomeHeader from '../../common/HomeHeader/HomeHeader';

const LoginButton = () => (
  <div className="login-btn" align="center">
    <HomeHeader />
    <button type="button" className="btn" onClick={login}>
      Login
    </button>
  </div>
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
