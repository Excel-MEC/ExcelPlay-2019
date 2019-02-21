import React from 'react';
import HomeHeader from './common/HomeHeader/HomeHeader';
import '../App.css';
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
