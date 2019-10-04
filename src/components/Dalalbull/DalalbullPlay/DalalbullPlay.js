import React, { useState } from 'react';
import Ticker from '../DalalbullComponents/Ticker/Ticker';
import ListCompanies from '../DalalbullComponents/ListCompanies/ListCompanies';
import ShareDetails from '../DalalbullComponents/ShareDetails/ShareDetails';
import GraphAndStatus from '../DalalbullComponents/GraphAndStatus/GraphAndStatus';
import './DalalbullPlay.scss';

const DalalbullPlay = props => {
  const [shareDetails, setShareDetails] = useState(null);
  return (
    <div>
      <Ticker />
      <div className="content">
        <div className="row">
          <div className="col-md-3">
            <ListCompanies
            />
          </div>
          <div className="col-md-5 d-none d-sm-block">
            <ShareDetails />
          </div>
          <div className="col-md-4">
            <GraphAndStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DalalbullPlay;
