import React from 'react';

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

const allCompany = () => {
  const allc = [];
  for (let i = 0; i < 10; i++) {
    allc.push(<Company />);
  }

  return allc.map(e => e);
};

const ListCompanies = () => {
  return (
    <div className="companies-stock-data">
      <div className="search-wrapper">
        <input
          type="search"
          name="search"
          id="search"
          className="search-input"
          placeholder="Search"
        />
      </div>
      <div className="companies-list">{allCompany()}</div>
    </div>
  );
};

export default ListCompanies;
