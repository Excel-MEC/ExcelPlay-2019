import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import DalalbullHeader from './DalalbullHeader/DalalbullHeader';
import DalalbullPlay from './DalalbullPlay/DalalbullPlay';
import DalalbullRules from './DalalbullRules/DalalbullRules';

class DalalBull extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <DalalbullHeader />
        <Route exact path={`${match.url}/`} component={DalalbullPlay}/>
        <Route path={`${match.url}/rules`} component={DalalbullRules}/>
      </div>
    );
  }
}

export default DalalBull;
