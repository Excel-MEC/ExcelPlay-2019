import React, { useEffect, useState } from 'react';
import { GameHeader, MItem } from '../common/GameHeader/GameHeader';
import kryptosLogo from '../../assets/kry-grey.png';
import '../../App.scss';
import KryptosInfoBar from './KryptosInfoBar/KryptosInfoBar';

const Kryptos = () => {
  const [level, setLevel] = useState(1);
  const [rank, setRank] = useState(0);

  useEffect(() => {
    // TODO: Make a request to API to fetch level and rank
    setLevel(1);
    setRank(0);
  });

  return (
    <div>
      <GameHeader gName="KRYPTOS" icon={kryptosLogo}>
        <MItem text="Rules" link="/Kryptos/rules" />
        <MItem text="Play" link="/Kryptos" />
        <MItem text="Ranklist" link="/Kryptos/ranklist" />
      </GameHeader>
      <KryptosInfoBar level={level} rank={rank} />
    </div>
  );
};

export default Kryptos;
