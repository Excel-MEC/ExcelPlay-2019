/* global fetch:false */
import React, { useState, useEffect } from 'react';
import '../../../App.scss';
import KryptosInfoBar from '../KryptosInfoBar/KryptosInfoBar';
import KryptosQuestion from '../KryptosQuestion/KryptosQuestion';
import KryptosHintModal from '../KryptosHintModal/KryptosHintModal';
import { ApiRoot } from "../../../config/api";

const KryptosPlay = () => {
  const [level, setLevel] = useState(1);
  const [rank, setRank] = useState(0);
  const [imgUrl, setImgUrl] = useState(
    '',
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
        if (data.completed === undefined) {
          setImgUrl(`${ApiRoot}${data.level_file}`);
          setLevel(data.level);
          const hints = data.hints.map(e => { return e.hint; });
          setHintText(hints);
        }
        else if (data.completed === true) {
          window.alert("You have completed all levels");
        }
      });

    fetch(`${ApiRoot}/auth/leaderboard/rank`, {
      mode: 'cors',
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.kryptos != null)
          setRank(data.kryptos.rank);
        else
          setRank(1);
      });
  }, []);

  const onSubmit = ans => {
    fetch(`${ApiRoot}/kryptos/api/answer?answer=${ans}`, {
      mode: 'cors',
    }).then(res => {
      return res.json();
    }).then(data => {
      if (data.answer === 'Correct') {
        window.alert("Correct answer");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        window.alert("Wrong answer");
      }
    })
  };

  return (
    <div>
      <KryptosInfoBar level={level} rank={rank} />
      <KryptosQuestion imgUrl={imgUrl} onSubmit={ans => onSubmit(ans)} />
      <KryptosHintModal hintText={hintText} />
    </div>
  );
};

export default KryptosPlay;
