import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import DalalBull from "./pages/DalalBull";
import Kryptos from "./pages/Kryptos";
import Login from "./pages/Login";
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
