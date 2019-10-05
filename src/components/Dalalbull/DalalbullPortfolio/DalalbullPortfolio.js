import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../DalalbullComponents/Ticker/Ticker';
import ListCompanies from '../DalalbullComponents/ListCompanies/ListCompanies';
import Portfolio from '../DalalbullComponents/Portfolio/Portfolio';
import ShareDetails from '../DalalbullComponents/ShareDetails/ShareDetails';
import GraphAndStatus from '../DalalbullComponents/GraphAndStatus/GraphAndStatus';
import './DalalbullPortfolio.scss';

const DalalbullPortfolio = () => {
  return (
    <div className="dalalbullPortfolio">
      <Ticker />
      <div className="content">
        <div className="row">
          <div className="col-md-3">
            <Link to="/Dalalbull">
              <ListCompanies />
            </Link>
          </div>
          <div className="col-md-5 d-none d-sm-block history">
            <h2 className="h2">Portfolio</h2>
            <Portfolio/>
          </div>
          <div id="share-modal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <ShareDetails />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <GraphAndStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DalalbullPortfolio;
