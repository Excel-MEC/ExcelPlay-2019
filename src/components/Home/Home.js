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
            <div className="dalalCell">
              <div>
                <img src={dalal} alt="dalabull" className="dalalPic" />
              </div>

              <div className="Rankdetail">
                <div>DALAL BULL</div>
                <div className="rankDiv">
                  <div className="rank">
                    <p>RANK</p>
                  </div>
                  <div className="RankValue">12</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 center-block text-center cell">
            <div className="dalalCell">
              <div>
                <img src={kryp} alt="dalabull" className="krypPic" />
              </div>

              <div className="Rankdetail">
                <div>KRYPTOS</div>
                <div className="rankDiv">
                  <div className="rank">
                    <p>RANK</p>
                  </div>
                  <div className="RankValue">12</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100" />
          <div className="col-md-6 center-block text-center cell">
            <div className="dalalCell">
              <div>
                <img src={hash} alt="#include" className="hashPic" />
              </div>

              <div className="Rankdetail">
                <div>#INCLUDE</div>
                <div className="PlayNow">PLAY NOW</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 center-block text-center cell">
            <div className="dalalCell">
              <div>
                <img src={echo} alt="echo" className="echoPic" />
              </div>

              <div className="Rankdetail">
                <div>ECHO</div>
                <div className="PlayNow">COMING SOON</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
