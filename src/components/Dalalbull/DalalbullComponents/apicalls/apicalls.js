import * as http from '../../../../config/http';
import { ApiRoot } from '../../../../config/api';

export const handshake = () => {
  return http.get(`${ApiRoot}dalalbull/api/handshake/`);
};

export const getCompanies = () => {
  return http.get(`${ApiRoot}dalalbull/api/ticker/`);
};

export const getPortfolio = () => {
  return http.get(`${ApiRoot}dalalbull/api/portfolioview/`).then(res => {
    return http.get(`${ApiRoot}/auth/leaderboard/rank`).then(data => {
      res.rank = data.dalalbull.rank;
      return res;
    });
  });
};

export const getDashboard = () => {
  return http.get(`${ApiRoot}dalalbull/api/dashboard/`);
};

export const getCompanyDetails = company => {
  const body = new FormData();
  body.append('company', company);
  return http.post(`${ApiRoot}dalalbull/api/companydetails/`, body);
};

export const submitBuyOrShortSell = (qty, company, pending, buy) => {
  const body = new FormData();
  body.append('quantity', qty);
  body.append('company', company);
  if (pending != null) {
    body.append('pending', pending);
  }
  const tradeType = buy ? 'buy' : 'short sell';
  body.append('b_ss', tradeType);
  return http.post(`${ApiRoot}dalalbull/api/submit_buy/`, body);
};

export const submitSellOrShortCover = (qty, company, pending, sell) => {
  const body = new FormData();
  body.append('quantity', qty);
  body.append('company', company);
  if (pending != null) {
    body.append('pending', pending);
  }
  const tradeType = sell ? 'sell' : 'short cover';
  body.append('s_sc', tradeType);
  return http.post(`${ApiRoot}dalalbull/api/submit_sell/`, body);
};

export const getPotfolioHistory = () => {
  return http.get(`${ApiRoot}dalalbull/api/dashboard/`);
};

export const getGraphData = company => {
  const body = new FormData();
  body.append('company', company);
  return http.post(`${ApiRoot}dalalbull/api/graph/`, body);
};

export const getRanklist = () => {
  return http.get(`${ApiRoot}/auth/leaderboard/dbranklist`);
};

export const getUserDetail = () => {
  return http.get(`${ApiRoot}/auth/leaderboard/rank`);
};
