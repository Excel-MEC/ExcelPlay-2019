import React, { useState } from 'react';
import Ticker from './Ticker/Ticker';
import ListCompanies from './ListCompanies/ListCompanies';
import ShareDetails from './ShareDetails/ShareDetails';
import GraphAndStatus from './GraphAndStatus/GraphAndStatus';
import './DalalbullPlay.scss';

const DalalbullPlay = () => {
  const [shareDetails, setShareDetails] = useState(null);
  return (
    <div>
      <Ticker />
      <div className="content">
        <div className="row">
          <div className="col-md-3">
            <ListCompanies
              shareDetails={shareDetails}
              setShareDetails={setShareDetails}
            />
          </div>
          <div className="col-md-5 d-none d-md-block">
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
