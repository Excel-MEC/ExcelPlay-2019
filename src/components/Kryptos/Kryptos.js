import React, { useState, useEffect } from 'react';
import { GameHeader, MItem } from '../common/GameHeader/GameHeader';
import kryptosLogo from '../../assets/kry.png';
import '../../App.scss';
import KryptosInfoBar from './KryptosInfoBar/KryptosInfoBar';
import KryptosQuestion from './KryptosQuestion/KryptosQuestion';
import KryptosHintModal from './KryptosHintModal/KryptosHintModal';
import { ApiRoot } from "../../config/api";

const Kryptos = () => {
  const [level, setLevel] = useState(1);
  const [rank, setRank] = useState(0);
  const [imgUrl, setImgUrl] = useState(
    'https://i.postimg.cc/J003sfrb/DEXATI20180913132106.png',
  );
  const [hintText, setHintText] = useState([]);

  useEffect(() => {
    fetch(`${ApiRoot}/kryptos/api/ask`, {
      mode: 'cors',
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(JSON.stringify(data));
        setImgUrl(data.level_file);
        setLevel(data.level);
        setHintText([data.hint1, data.hint2, data.hint3]);
      });
  }, []);

  const onSubmit = ans => {
    // Check if answer is correct
    console.log(ans);
  };

  return (
    <div>
      <GameHeader gName="KRYPTOS" icon={kryptosLogo}>
        <MItem text="Rules" link="/Kryptos/rules" />
        <MItem text="Play" link="/Kryptos" />
        <MItem text="Ranklist" link="/Kryptos/ranklist" />
      </GameHeader>
      <KryptosInfoBar level={level} rank={rank} />
      <KryptosQuestion imgUrl={imgUrl} onSubmit={ans => onSubmit(ans)} />
      <KryptosHintModal hintText={hintText} />
    </div>
  );
};

export default Kryptos;
