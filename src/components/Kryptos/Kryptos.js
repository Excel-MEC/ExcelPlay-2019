import React, { Component } from 'react';
import { GameHeader, MItem } from '../common/GameHeader/GameHeader';
import kryptosLogo from '../../assets/kry-grey.png';
import '../../App.scss';
import KryptosInfoBar from './KryptosInfoBar/KryptosInfoBar';
import KryptosQuestion from './KryptosQuestion/KryptosQuestion';

class Kryptos extends Component {
  constructor() {
    super();
    this.state = {
      level: 1,
      rank: 0,
      imgUrl: 'https://i.postimg.cc/J003sfrb/DEXATI20180913132106.png',
    };
  }

  componentDidMount() {
    // TODO: Make a request to API to fetch level and rank
    // Once level is fetched, fetch the corresponding question imgUrl
  }

  onSubmit = ans => {
    // Check if answer is correct
    console.log(ans);
  };

  render() {
    const { level, rank, imgUrl } = this.state;
    return (
      <div>
        <GameHeader gName="KRYPTOS" icon={kryptosLogo}>
          <MItem text="Rules" link="/Kryptos/rules" />
          <MItem text="Play" link="/Kryptos" />
          <MItem text="Ranklist" link="/Kryptos/ranklist" />
        </GameHeader>
        <KryptosInfoBar level={level} rank={rank} />
        <KryptosQuestion imgUrl={imgUrl} onSubmit={ans => this.onSubmit(ans)} />
      </div>
    );
  }
}

export default Kryptos;
