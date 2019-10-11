import React, { useState, useEffect } from 'react';
import { getCompanies, getTickerSock } from '../apicalls/apicalls';
import Company from '../CompanyItem/CompanyItem';
import './ListCompanies.scss';
import Fuse from 'fuse.js';

const allCompany = companies => {
  return companies.map(company => (
    <Company {...company} key={company['symbol']} />
  ));
};

const ListCompanies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [companies, setCompanies] = useState([]);
  const [result, setResult] = useState([]);
  useEffect(() => {
    getCompanies().then(res => {
      setCompanies(res['tickerData']);
      setResult(res['tickerData']);
    });
  }, []);
  useEffect(() => {
    const tickSock = getTickerSock();
    tickSock.addEventListener('message', e => {
      const data = JSON.parse(e.data);
      if (!data.hasOwnProperty('msg')) {
        const tickerData = JSON.parse(data.data).tickerData;
        setCompanies(tickerData);
        setResult(tickerData);
      }
    });
    return () => {
      tickSock.close();
    };
  }, []);
  const search = () => {
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['name', 'symbol'],
    };
    const fuse = new Fuse(companies, options);
    setResult(fuse.search(searchTerm));
  };

  return (
    <div className="companies-stock-data">
      <div className="search-wrapper">
        <input
          type="search"
          name="search"
          value={searchTerm}
          onChange={e => {
            if (e.target.value === '') {
              setResult(companies);
            }
            setSearchTerm(e.target.value);
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              search();
            }
          }}
          id="search"
          className="search-input"
          placeholder="Search"
        />
      </div>
      <div className="companies-list">{allCompany(result)}</div>
    </div>
  );
};

export default ListCompanies;
