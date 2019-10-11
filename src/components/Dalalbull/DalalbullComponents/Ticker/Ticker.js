import React, { useState, useEffect } from 'react';
import './Ticker.scss';
import { getCompanies, getTickerSock } from '../apicalls/apicalls';
import PercentageChange from '../PercentageChange/PercentageChange';

const TickerItem = ({ name, current_price, change_per }) => {
  return (
    <span className="tickerCompany">
      <span className="company-name">{name}</span>
      <span className="current-price">{current_price}</span>
      <PercentageChange change_per={change_per} />
    </span>
  );
};

const allTickers = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    getCompanies().then(res => {
      setCompanies(res['tickerData']);
    });
  }, []);
  useEffect(() => {
    const tickSock = getTickerSock();
    tickSock.addEventListener('message', e => {
      const data = JSON.parse(e.data);
      if (!data.hasOwnProperty('msg')) {
        const tickerData = JSON.parse(data.data).tickerData;
        setCompanies(tickerData);
      }
    });
    return () => {
      tickSock.close();
    };
  }, []);
  return companies.map(company => (
    <TickerItem {...company} key={company['symbol']} />
  ));
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
