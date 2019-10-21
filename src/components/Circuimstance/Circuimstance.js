import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GameHeader, MItem } from '../common/GameHeader/GameHeader';
import withLogin from '../HOC/withLogin';
import '../../App.scss';
import circuimstanceLogo from '../../assets/circuimstancec_500.png';
import CircuimstancePlay from './CircuimstancePlay/CircuimstancePlay';
import CircuimstanceRanklist from './CircuimstanceRanklist/CircuimstanceRanklist';

const Circuimstance = props => {
  const { match } = props;
  return (
    <div>
      <GameHeader gName="CIRCUIMSTANCE" icon={circuimstanceLogo}>
        <MItem text="Play" link="/Circuimstance" />
        <MItem text="Ranklist" link="/Circuimstance/ranklist" />
      </GameHeader>
      <Switch>
        <Route exact path={`${match.url}/`} component={CircuimstancePlay} />
        <Route
          exact
          path={`${match.url}/ranklist`}
          component={CircuimstanceRanklist}
        />
      </Switch>
    </div>
  );
};

export default withLogin(Circuimstance);
