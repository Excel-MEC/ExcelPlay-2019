import React, { useState, useEffect } from 'react';
import { getCompanies } from '../apicalls/apicalls';
import Company from '../CompanyItem/CompanyItem';
import './ListCompanies.scss';

const allCompany = companies => {
  return companies.map(company =>
    <Company {...company} key={company['symbol']}/>);
};

const ListCompanies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    getCompanies().then(res => {
      setCompanies(res['tickerData']);
    });
  }, []);

  function sortCompaniesByMatch(comps) {
    comps.sort((x, y) => {
      return y.match - x.match;
    });
    return comps;
  }

  const fuzzyMatch = (list, query) => {
    const lowercaseQuery = query.replace(/ /g, '').toLowerCase();
    const newlist = list
    for (let i = 0; i < list.length; i += 1) {
      let searchPosition = 0;
      let match = 0;
      const { name } = list[i];
      for (let j = 0; j < name.length; j += 1) {
        const textChar = name[j];
        if (
          searchPosition < lowercaseQuery.length &&
          textChar.toLowerCase() === lowercaseQuery[searchPosition]
        ) {
          match += 1;
          searchPosition += 1;
        }
      }
      newlist[i].match = match;
    }
    return sortCompaniesByMatch(newlist);
  };

  const search = () => {
    // Basic custom made fuzzy search
    const results = fuzzyMatch(companies, searchTerm);
    setCompanies(results);
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
