import React from 'react';
import { Route } from 'react-router-dom';
import DalalbullHeader from './DalalbullComponents/DalalbullHeader/DalalbullHeader';
import DalalbullPortfolio from './DalalbullPortfolio/DalalbullPortfolio';
import DalalbullPlay from './DalalbullPlay/DalalbullPlay';
import DalalbullRules from './DalalbullRules/DalalbullRules';
import DalalbullRanklist from './DalalbullRanklist/DalalbullRanklist';
import withLogin from '../HOC/withLogin';

let history = null;

const Dalalbull = props => {
  const { match } = props;
  history = props.history;
  return (
    <div>
      <DalalbullHeader />
      <Route exact path={`${match.url}/`} component={DalalbullPortfolio} />
      <Route path={`${match.url}/:cid`} component={DalalbullPlay} />
      <Route path={`${match.url}/rules`} component={DalalbullRules} />
      <Route path={`${match.url}/ranklist`} component={DalalbullRanklist} />
    </div>
  );
};

export default withLogin(Dalalbull);
