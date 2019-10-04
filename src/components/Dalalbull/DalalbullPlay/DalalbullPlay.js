import React, { useEffect, useState } from 'react';
import Ticker from '../DalalbullComponents/Ticker/Ticker';
import ListCompanies from '../DalalbullComponents/ListCompanies/ListCompanies';
import ShareDetails from '../DalalbullComponents/ShareDetails/ShareDetails';
import GraphAndStatus from '../DalalbullComponents/GraphAndStatus/GraphAndStatus';
import './DalalbullPlay.scss';
import { getCompanyDetails } from '../DalalbullComponents/apicalls/apicalls';

const DalalbullPlay = props => {
  const [shareDetails, setShareDetails] = useState(null);
  useEffect(() => {
    getCompanyDetails(props.match.params['cid']).then(res => {
      setShareDetails(res);
    });
    props.history.listen((location, action) => {
      getCompanyDetails(location.pathname.split('/')[2]).then(res => {
        setShareDetails(res);
      });
    });
  }, {});
  console.log('hai');
  return (
    <div>
      <Ticker />
      <div className="content">
        <div className="row">
          <div className="col-lg-3">
            <ListCompanies />
          </div>
          <div className="col-lg-5 d-none d-sm-block">
            <ShareDetails {...shareDetails} />
          </div>
          <div className="col-lg-4">
            <GraphAndStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DalalbullPlay;
