import React from 'react';
import './DalalbullHeader.scss';
import Dalalbull from '../../../assets/bull5.png';
import { GameHeader, MItem } from '../../common/GameHeader/GameHeader';

const DalalbullHeader = () => {
  return (
    <GameHeader gName="Dalalbull" icon={Dalalbull}>
      <MItem text="Rules" link="/Dalalbull/rules" />
      <MItem text="Play" link="/Dalalbull" />
      <MItem text="History" link="/Dalalbull" />
      <MItem text="Ranklist" link="/Dalalbull/ranklist" />
    </GameHeader>
  );
};

export default DalalbullHeader;
