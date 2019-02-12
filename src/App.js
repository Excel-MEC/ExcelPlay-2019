import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import DalalBull from "./components/Dalalbull/DalalBull";
import Kryptos from "./components/Kryptos/Kryptos";
import Login from "./components/Accounts/Login";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dalalbull" component={DalalBull} />
      <Route path="/kryptos" component={Kryptos} />
    </div>
  </Router>
);

export default App;
