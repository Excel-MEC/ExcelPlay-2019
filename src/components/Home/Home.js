import React, { useState, useEffect } from 'react';
import HomeHeader from '../common/HomeHeader/HomeHeader';
import Games from './Games/Games';
import './Home.scss';
import { ApiRoot } from '../../config/api';
// import Navbar from '../common/Navbar/Navbar';
import dalal from '../../assets/dalalBull_500.png';
import kryp from '../../assets/kryptos_500.png';
import hash from '../../assets/hash_500.png';
import circ from '../../assets/circuimstance_500.png';

const Home = () => {
  const [kryptosRank, setKryptosRank] = useState(0);
  const [dalalbullRank, setDalalbullRank] = useState(0);
  const [circuimstanceRank, setCircuimstanRank] = useState(0);
  const [userPic, setUserPic] = useState('');

  useEffect(() => {
    fetch(`${ApiRoot}/auth/leaderboard/rank`, {
      mode: 'cors',
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.kryptos) setKryptosRank(data.kryptos.rank);
        if (data.dalalbull) setDalalbullRank(data.dalalbull.rank);
        setUserPic(data.pic);
      });
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12">
        <HomeHeader userPic={userPic} />
      </div>
      <div className="container col-lg-12">
        <div className="events">
          <div className="row">
            <div className="col-lg-6 center-block text-center cell">
              <Games
                name="DALALBULL"
                rank={dalalbullRank}
                logo={dalal}
                type="ranked"
                href="Dalalbull"
                status="PLAY NOW"
              />
            </div>
            <div className="col-lg-6 center-block text-center cell">
              <Games
                name="KRYPTOS"
                rank={kryptosRank}
                logo={kryp}
                type="ranked"
                href="Kryptos"
                status="PLAY NOW"
              />
            </div>
            <div className="w-100" />
            <div className="col-lg-6 center-block text-center cell">
              <Games
                name="#INCLUDE"
                logo={hash}
                type="notRanked"
                status="COMING SOON"
              />
            </div>
            <div className="col-lg-6 center-block text-center cell">
              <Games
                name="CIRCUIMSTANCE"
                rank={circuimstanceRank}
                logo={circ}
                type="notRanked"
                status="COMING SOON"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
