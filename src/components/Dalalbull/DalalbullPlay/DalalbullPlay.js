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
  getPortfolioSock,
  getTickerSock,
  getGraphData,
  getGraphSock,
} from '../DalalbullComponents/apicalls/apicalls';

const DalalbullPlay = props => {
  const [shareDetails, setShareDetails] = useState(null);
  const [modalVisibility, setModalVisibility] = useState('visible');
  const [portfolioDetails, setPortfolioDetails] = useState(null);
  const [dashboard, setDashboardDetails] = useState([]);
  const [graphData, setGraphData] = useState([]);
  useEffect(() => {
    getCompanyDetails(props.match.params.cid).then(res => {
      setShareDetails(res);
      setModalVisibility('visible');
      getGraphData(res.symbol).then(res => setGraphData(res.graph_data));
    });
  }, [props.match.params]);
  // TODO : Don't delete comments
  // useEffect(() => {
  //   const graphSock = getGraphSock();
  //   graphSock.addEventListener('message', e => {
  //     const data = JSON.parse(e.data);
  //     console.log(data);
  //   });
  //   return () => {
  //     graphSock.close();
  //   }
  // }, [props.match.params]);
  useEffect(() => {
    getPortfolio().then(res => {
      setPortfolioDetails(res);
    });
  }, []);
  // TODO : Don't delete comments
  // useEffect(() => {
  //   const portSock = getPortfolioSock();
  //   portSock.addEventListener('message', e => {
  //     console.log('Message from server ', e.data);
  //   });
  //   return () => {
  //     portSock.close();
  //   };
  // }, []);

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
              setPortfolioDetails={setPortfolioDetails}
              setDashboardDetails={setDashboardDetails}
            />
          </div>
          <div className="mobile-share-details">
            <Modal
              visibility={modalVisibility}
              setVisibility={setModalVisibility}
            >
              <ShareDetails
                {...shareDetails}
                {...portfolioDetails}
                {...dashboard}
                setPortfolioDetails={setPortfolioDetails}
                setDashboardDetails={setDashboardDetails}
              />
            </Modal>
          </div>
          <div className="col-lg-4">
            <GraphAndStatus {...shareDetails} graphData={graphData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DalalbullPlay;
