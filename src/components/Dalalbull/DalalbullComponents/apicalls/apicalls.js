import * as http from '../../../../config/http';
import { ApiRoot, WSRoot } from '../../../../config/api';

export const handshake = () => {
  return http.get(`${ApiRoot}dalalbull/api/handshake/`).then(res => res);
};

export const getCompanies = () => {
  return http.get(`${ApiRoot}dalalbull/api/ticker/`).then(res => res);
};

export const getIsGoodTime = () => {
  return http.get(`${ApiRoot}dalalbull/api/is_share_market_open/`).then(res => res);
};

export const getPortfolio = () => {
  return http.get(`${ApiRoot}dalalbull/api/portfolioview/`).then(res => res);
};

export const getDashboard = () => {
  return http.get(`${ApiRoot}dalalbull/api/dashboard/`).then(res => res);
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


export const getPortfolioSock = () => {
  return new WebSocket(`${WSRoot}dalalbullws/channel/portfolio/`);
}

export const getTickerSock = () => {
  return new WebSocket(`${WSRoot}dalalbullws/channel/ticker/`);
}