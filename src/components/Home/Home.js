import React from 'react';
import HomeHeader from '../common/HomeHeader/HomeHeader';
import './home.scss';
import Navbar from '../common/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <div className="events">
        <div className="row">
          <div className="col-md-6 center-block text-center cell">
            DALAL BULL
          </div>
          <div className="col-md-6 center-block text-center cell">KRYTPOS</div>
          <div className="w-100" />
          <div className="col-md-6 center-block text-center cell">#INCLUDE</div>
          <div className="col-md-6 center-block text-center cell">ECHO</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
