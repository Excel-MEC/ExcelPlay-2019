import React from 'react';
import HomeHeader from './common/HomeHeader/HomeHeader';
import '../App.scss';
import Navbar from './common/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHeader />
    </div>
  );
};

export default Home;
