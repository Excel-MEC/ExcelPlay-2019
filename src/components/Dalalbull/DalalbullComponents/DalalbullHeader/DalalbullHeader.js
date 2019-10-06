import React from 'react';
import './DalalbullHeader.scss';
import Dalalbull from '../../../../assets/dalalBullc_500.png';
import { GameHeader, MItem } from '../../../common/GameHeader/GameHeader';

const DalalbullHeader = () => {
  return (
    <GameHeader gName="DALALBULL" icon={Dalalbull}>
      <MItem text="Rules" link="/Dalalbull/rules" />
      <MItem text="Play" link="/Dalalbull" />
      <MItem text="Portfolio" link="/Dalalbull/Portfolio" />
      <MItem text="Ranklist" link="/Dalalbull/ranklist" />
    </GameHeader>
  );
};

export default DalalbullHeader;
