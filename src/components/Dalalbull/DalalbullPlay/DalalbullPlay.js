import React, { useEffect, useState } from 'react';
import Ticker from '../DalalbullComponents/Ticker/Ticker';
import ListCompanies from '../DalalbullComponents/ListCompanies/ListCompanies';
import ShareDetails from '../DalalbullComponents/ShareDetails/ShareDetails';
import GraphAndStatus from '../DalalbullComponents/GraphAndStatus/GraphAndStatus';
import Modal from '../DalalbullComponents/Modal/Modal';
import './DalalbullPlay.scss';
import {
  getCompanyDetails,
  getPortfolio,
  getDashboard,
} from '../DalalbullComponents/apicalls/apicalls';

const DalalbullPlay = props => {
  const [shareDetails, setShareDetails] = useState(null);
  const [modalVisibility, setModalVisibility] = useState('visible');
  const [portfolioDetails, setPortfolioDetails] = useState(null);
  const [dashboard, setDashboardDetails] = useState(null);
  useEffect(() => {
    getCompanyDetails(props.match.params.cid).then(res => {
      setShareDetails(res);
      setModalVisibility('visible');
    });
  }, [props.match.params]);
  useEffect(() => {
    getPortfolio().then(res => {
      setPortfolioDetails(res);
    });
  }, []);
  useEffect(() => {
    getDashboard().then(res => {
      setDashboardDetails(res);
    });
  }, []);
  return (
    <div className="dalalbull-play">
      <Ticker />
      <div className="content">
        <div className="row">
          <div className="col-lg-3">
            <ListCompanies />
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <ShareDetails
              {...shareDetails}
              {...portfolioDetails}
              {...dashboard}
            />
          </div>
          <div className="mobile-share-details">
            <Modal
              visibility={modalVisibility}
              setVisibility={setModalVisibility}
            >
              <ShareDetails {...shareDetails} />
            </Modal>
          </div>
          <div className="mobile-share-details">
            <Modal
              visibility={modalVisibility}
              setVisibility={setModalVisibility}
            >
              <ShareDetails {...shareDetails} />
            </Modal>
          </div>
          <div className="col-lg-4">
            <GraphAndStatus {...portfolioDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DalalbullPlay;
