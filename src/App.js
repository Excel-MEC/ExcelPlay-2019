import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Spinner from './components/common/Spinner/Spinner';
import Logout from './components/Accounts/Logout/Logout';
import './App.scss';

const Kryptos = lazy(() => import('./components/Kryptos/Kryptos'));
const Login = lazy(() => import('./components/Accounts/Login/Login'));


const App = () => (
  <Suspense fallback={<Spinner />}>
    <Router>
      <div className="main-background">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/kryptos" component={Kryptos} />
      </div>
    </Router>
  </Suspense>
);

export default App;
