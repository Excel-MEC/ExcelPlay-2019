import React, { useState, useEffect } from 'react';
import { GameHeader, MItem } from '../common/GameHeader/GameHeader';
import kryptosLogo from '../../assets/kry.png';
import '../../App.scss';
import KryptosInfoBar from './KryptosInfoBar/KryptosInfoBar';
import KryptosQuestion from './KryptosQuestion/KryptosQuestion';

const Kryptos = () => {
  const [level, setLevel] = useState(1);
  const [rank, setRank] = useState(0);
  const [imgUrl, setImgUrl] = useState(
    'https://i.postimg.cc/J003sfrb/DEXATI20180913132106.png',
  );
  const [hintText, setHintText] = useState('');

  useEffect(() => {
    // TODO: Make a request to API to fetch level and rank
    // Once level is fetched, fetch the corresponding question imgUrl
  });

  const onSubmit = ans => {
    // Check if answer is correct
    console.log(ans);
  };

  const onViewHint = () => {
    // TODO: Fetch hints and store them in hintText using setHintText
  };

  return (
    <div>
      <GameHeader gName="KRYPTOS" icon={kryptosLogo}>
        <MItem text="Rules" link="/Kryptos/rules" />
        <MItem text="Play" link="/Kryptos" />
        <MItem text="Ranklist" link="/Kryptos/ranklist" />
      </GameHeader>
      <KryptosInfoBar level={level} rank={rank} />
      <KryptosQuestion
        imgUrl={imgUrl}
        onSubmit={ans => onSubmit(ans)}
        onViewHint={() => onViewHint()}
      />
    </div>
  );
};

export default Kryptos;
