import React, { useState, useEffect } from 'react';
import Ticker from '../DalalbullComponents/Ticker/Ticker';
import ListCompanies from '../DalalbullComponents/ListCompanies/ListCompanies';
import Portfolio from '../DalalbullComponents/Portfolio/Portfolio';
import Status from '../DalalbullComponents/Status/Status';
import './DalalbullPortfolio.scss';
import { getPortfolio } from '../DalalbullComponents/apicalls/apicalls';

const HomeView = ({ portfolioDetails }) => {
  return (
    <div className="dalalbullPortfolio">
      <Ticker />
      <div className="content">
        <div className="row">
          <div className="col-lg-3">
            <ListCompanies />
          </div>
          <div className="col-lg-5 d-none d-sm-block history">
            <h2 className="h2">Portfolio</h2>
            <Portfolio />
          </div>
          <div className="col-lg-4">
            <Status {...portfolioDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExclusiveView = ({ portfolioDetails }) => {
  return (
    <div className="dalalbullPortfolio">
      <Ticker />
      <div className="content" style={{ padding: '1em' }}>
        <div className="row">
          <div className="col-lg-6 d-sm-block history">
            <h2 className="h2">Portfolio</h2>
            <Portfolio />
          </div>
          <div className="col-lg-6">
            <Status />
          </div>
        </div>
      </div>
    </div>
  );
};

const DalalbullPortfolio = props => {
  const [portfolioDetails, setPortfolioDetails] = useState(null);
  useEffect(() => {
    getPortfolio().then(res => {
      setPortfolioDetails(res);
    });
  }, []);
  if (props.match.url.includes('Portfolio'))
    return <ExclusiveView portfolioDetails={portfolioDetails} />;
  else return <HomeView portfolioDetails={portfolioDetails} />;
};

export default DalalbullPortfolio;
