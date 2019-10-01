import React, { useState } from 'react';
import Ticker from '../DalalbullComponents/Ticker/Ticker';
import ListCompanies from '../DalalbullComponents/ListCompanies/ListCompanies';
import ShareDetails from '../DalalbullComponents/ShareDetails/ShareDetails';
import GraphAndStatus from '../DalalbullComponents/GraphAndStatus/GraphAndStatus';
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
            />
          </div>
          <div className="col-md-5 d-none d-sm-block">
            <ShareDetails />
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

export default DalalbullPlay;
