import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DalalbullHeader from './DalalbullComponents/DalalbullHeader/DalalbullHeader';
import DalalbullPortfolio from './DalalbullPortfolio/DalalbullPortfolio';
import DalalbullPlay from './DalalbullPlay/DalalbullPlay';
import DalalbullRules from './DalalbullRules/DalalbullRules';
import DalalbullRanklist from './DalalbullRanklist/DalalbullRanklist';
import withLogin from '../HOC/withLogin';


const Dalalbull = props => {
  const { match } = props;
  return (
    <div>
      <DalalbullHeader />
      <Switch>
        <Route exact path={`${match.url}/`} component={DalalbullPortfolio} />
        <Route exact path={`${match.url}/rules`} component={DalalbullRules} />
        <Route exact path={`${match.url}/Portfolio`} component={DalalbullPortfolio} />
        <Route
          exact
          path={`${match.url}/ranklist`}
          component={DalalbullRanklist}
        />
        <Route exact path={`${match.url}/:cid`} component={DalalbullPlay} />
      </Switch>
    </div>
  );
};

export default withLogin(Dalalbull);
