import React, { useState } from 'react';
import './ShareDetails.scss';
import Stock from './Stock/Stock';
import Trade from './Trade/Trade';
import SharesInHand from './SharesInHand/SharesInHand';

const tablist = {
  stock: 'Stock',
  buy: 'Buy',
  sell: 'Sell/Short Sell',
  sharesInHand: 'Shares in hand',
};

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case tablist.stock:
      return <Stock />;
    case tablist.buy:
      return <Trade type="buy" />;
    case tablist.sell:
      return <Trade type="sell" />;
    case tablist.sharesInHand:
      return <SharesInHand />;
    default:
      return <Stock />;
  }
};

const ShareDetails = () => {
  const [activeTab, setActiveTab] = useState(tablist.stock);
  const isActive = tab => (activeTab === tablist[tab] ? 'active' : '');

  return (
    <div className="share-details">
      <h2 className="h2">STOCK INFO</h2>
      <h1 className="h1">NIFTY 50</h1>
      <ul className="nav nav-tabs">
        {Object.keys(tablist).map(tab => {
          return (
            <li className="nav-item">
              <span
                className={`nav-link ${isActive(tab)}`}
                onClick={() => setActiveTab(tablist[tab])}
              >
                {tablist[tab]}
              </span>
            </li>
          );
        })}
      </ul>
      <br />
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default ShareDetails;
