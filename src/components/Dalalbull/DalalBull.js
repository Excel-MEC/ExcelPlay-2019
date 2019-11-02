import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DalalbullHeader from './DalalbullComponents/DalalbullHeader/DalalbullHeader';
import DalalbullPortfolio from './DalalbullPortfolio/DalalbullPortfolio';
import DalalbullPlay from './DalalbullPlay/DalalbullPlay';
import DalalbullRules from './DalalbullRules/DalalbullRules';
import DalalbullRanklist from './DalalbullRanklist/DalalbullRanklist';
import withLogin from '../HOC/withLogin';
import { handshake } from './DalalbullComponents/apicalls/apicalls';
import './DalalBull.scss';

const Dalalbull = props => {
  React.useEffect(() => {
    handshake();
  }, []);
  const { match } = props;
  return (
    <div className="dalalbull">
      <DalalbullHeader />
      <Switch>
        <Route exact path={`${match.url}/rules`} component={DalalbullRules} />
        <Route exact path={`${match.url}/*`} component={DalalbullRanklist} />
      </Switch>
    </div>
  );
};

export default withLogin(Dalalbull);
