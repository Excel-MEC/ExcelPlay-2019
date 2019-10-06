import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GameHeader, MItem } from '../common/GameHeader/GameHeader';
import kryptosLogo from '../../assets/kry.png';
import KryptosPlay from './KryptosPlay/KryptosPlay';
import KryptosRules from './KryptosRules/KryptosRules';

const Kryptos = (props) => {
    const { match } = props;
    return (
        <div>
            <GameHeader gName="KRYPTOS" icon={kryptosLogo}>
                <MItem text="Rules" link="/Kryptos/rules" />
                <MItem text="Play" link="/Kryptos" />
                <MItem text="Ranklist" link="/Kryptos/ranklist" />
            </GameHeader>
            <Switch>
                <Route exact path={`${match.url}/`} component={KryptosPlay} />
                <Route exact path={`${match.url}/rules`} component={KryptosRules} />
            </Switch>
        </div>
    )
}

export default Kryptos;