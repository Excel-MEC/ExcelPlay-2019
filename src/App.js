import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Spinner from './components/common/Spinner/Spinner';
import Logout from './components/Accounts/Logout/Logout';
import './App.scss';

const DalalBull = lazy(() => import('./components/Dalalbull/DalalBull'));
const Kryptos = lazy(() => import('./components/Kryptos/Kryptos'));
const Login = lazy(() => import('./components/Accounts/Login/Login'));

const App = () => (
  <Router>
    <div className="main-background">
      <Suspense fallback={Spinner}>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/dalalbull" component={DalalBull} />
        <Route path="/kryptos" component={Kryptos} />
      </Suspense>
    </div>
  </Router>
);

export default App;
