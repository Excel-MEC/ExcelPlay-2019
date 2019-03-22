import React, { useState, useEffect } from 'react';
import './ListCompanies.scss';

const Company = () => {
  return (
    <div className="company">
      <div className="row">
        <div className="c-details">
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

// eslint-disable-next-line
const allCompany = companies => {
  // TODO: Remove the log and use the data to set the props of <Company />
  const allc = [];
  for (let i = 0; i < 10; i += 1) {
    allc.push(<Company key={i}/>);
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

  function sortProperties(obj) {
    // convert object into array
    const sortable = [];
    Object.keys(obj).forEach(key => sortable.push([key, obj[key]])); // each item is an array in format [key, value]

    // sort items by value
    sortable.sort((x, y) => {
      const a = x > y ? 1 : 0;
      return x < y ? -1 : a;
    });
    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
  }
  const fuzzyMatch = (list, query) => {
    const lowercaseQuery = query.replace(/ /g, '').toLowerCase();
    const matchValues = {};

    list.forEach(stock => {
      let searchPosition = 0;
      let match = 0;
      const { name } = stock;
      for (let i = 0; i < name.length; i += 1) {
        const textChar = name[i];
        if (
          searchPosition < lowercaseQuery.length &&
          textChar.toLowerCase() === lowercaseQuery[searchPosition]
        ) {
          match += 1;
          searchPosition += 1;
        }
      }
      matchValues[stock.name] = match;
    });

    return sortProperties(matchValues);
  };
  const search = () => {
    // TODO: Remove the log and search; set the data in companies using setCompanies
    console.log('searching');
    const list = [
      {
        name: 'Infosys Pvt Ltd',
        id: 101,
      },
      {
        name: 'Tata Consultancy',
        id: 202,
      },
    ];
    // Basic custom made fuzzy search
    // TODO: Replace with Fuse.js if necessary
    const results = fuzzyMatch(list, searchTerm);
    console.log(results);
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
            search();
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
