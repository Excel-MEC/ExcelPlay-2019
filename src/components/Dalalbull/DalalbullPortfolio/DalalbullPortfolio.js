import React from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../DalalbullComponents/Ticker/Ticker';
import ListCompanies from '../DalalbullComponents/ListCompanies/ListCompanies';
import Portfolio from '../DalalbullComponents/Portfolio/Portfolio';
import GraphAndStatus from '../DalalbullComponents/GraphAndStatus/GraphAndStatus';
import './DalalbullPortfolio.scss';

const HomeView = props => {
  return (
    <div className="dalalbullPortfolio">
      <Ticker />
      <div className="content">
        <div className="row">
          <div className="col-lg-3">
            <Link to="/Dalalbull">
              <ListCompanies />
            </Link>
          </div>
          <div className="col-lg-5 d-none d-sm-block history">
            <h2 className="h2">Portfolio</h2>
            <Portfolio />
          </div>
          <div className="col-lg-4">
            <GraphAndStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExclusiveView = () => {
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
            <GraphAndStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

const DalalbullPortfolio = props => {
  if (props.match.url.includes('Portfolio')) return <ExclusiveView />;
  else return <HomeView />;
};

export default DalalbullPortfolio;
