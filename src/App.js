import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Spinner from "./components/common/Spinner/Spinner";
import Callback from "./components/Accounts/callback";
import './App.scss';

const DalalBull = lazy(() => import('./components/Dalalbull/DalalBull'));
const Kryptos = lazy(() => import('./components/Kryptos/Kryptos'));
const Login = lazy(() => import('./components/Accounts/Login'));

const App = () => (
  <Router>
    <div className="main-background">
      <Suspense
        fallback={Spinner}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/login/callback" component={Callback}/>
        <Route path="/dalalbull" component={DalalBull} />
        <Route path="/kryptos" component={Kryptos} />
      </Suspense>
    </div>
  </Router>
);

export default App;
