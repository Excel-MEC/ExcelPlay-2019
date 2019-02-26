import React, { useState, useEffect } from 'react';
import './ListCompanies.scss';

const Company = () => {
  return (
    <div className="company">
      <div className="row">
        <div width="100%">
          <div className="float-left">
            <h1>Nifty50</h1>
            <p>Shares of Nifty50</p>
          </div>
          <div className="float-right">
            <div className="data">
              <span className="current-price">4200</span>
              <span className="percentage-change positive-change">
                <i className="fa fa-arrow-up" />
                +10%
              </span>
              <br />
              <i className="fa fa-arrow-circle-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const allCompany = companies => {
  // TODO: Remove the log and use the data to set the props of <Company />
  console.log(companies);
  const allc = [];
  for (let i = 0; i < 10; i += 1) {
    allc.push(<Company />);
  }

  return allc.map(e => e);
};

const ListCompanies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    // TODO: remove the follwing line
    setCompanies([]);
    // TODO: fetch initial list of companies here and set using setCompanies
  });
  const search = () => {
    // TODO: Remove the log and search; set the data in companies using setCompanies
    console.log('searching');
  };
  return (
    <div className="companies-stock-data">
      <div className="search-wrapper">
        <input
          type="search"
          name="search"
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
          }}
          onKeyPress={e => {
            if (e.key === 'Enter') search();
          }}
          id="search"
          className="search-input"
          placeholder="Search"
        />
      </div>
      <div className="companies-list">{allCompany(companies)}</div>
    </div>
  );
};

export default ListCompanies;
