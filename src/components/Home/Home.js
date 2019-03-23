import React from 'react';
import HomeHeader from '../common/HomeHeader/HomeHeader';
import './home.scss';
// import Navbar from '../common/Navbar/Navbar';
import dalal from '../../assets/bull5-grey.png';
import kryp from '../../assets/kry-grey.png';
import hash from '../../assets/hash2-grey.png';
import echo from '../../assets/ech2-grey.png';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HomeHeader />
      <div className="events">
        <div className="row">
          <div className="col-md-6 center-block text-center cell">
            <img src={dalal} alt="dalabull" className="dalalPic" />
            DALAL BULL
          </div>
          <div className="col-md-6 center-block text-center cell">
            <img src={kryp} alt="kryptos" className="krypPic" />
            KRYTPOS
          </div>
          <div className="w-100" />
          <div className="col-md-6 center-block text-center cell">
            <img src={hash} alt="#include" className="hashPic" />
            #INCLUDE
          </div>
          <div className="col-md-6 center-block text-center cell">
            <img src={echo} alt="echo" className="echoPic" />
            ECHO
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
