import React from 'react';
import './Ticker.scss';

const TickerItem = () => {
  return (
    <span className="tickerCompany">
      <span className="company-name">Nifty50</span>
      <span className="current-price">4200</span>
      <span className="percentage-change positive-change">
        <i className="fa fa-arrow-up" />
        +8%
      </span>
    </span>
  );
};

const allTickers = () => {
  const tickers = [];
  for (let i = 0; i < 10; i += 1) {
    tickers.push(<TickerItem key={i} />);
  }
  return tickers.map(e => e);
};

const Ticker = () => {
  return (
    <div className="ticker">
      <div className="marquee" behavior="scroll" direction="left">
        <span className="all-companies">{allTickers()}</span>
      </div>
    </div>
  );
};

export default Ticker;
