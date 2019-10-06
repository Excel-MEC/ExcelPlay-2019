import * as http from '../../../../config/http';
import { ApiRoot } from '../../../../config/api';

export const getCompanies = () => {
  return http.get(`${ApiRoot}dalalbull/api/ticker/`).then(res => res);
};

export const getCompanyDetails = company => {
  const body = new FormData();
  body.append('company', company);
  return http.post(`${ApiRoot}dalalbull/api/companydetails/`, body)
};

export const submitBuyOrShortSell = (qty, company, pending, tradeType) => {
  const body = new FormData();
  body.append('quantity', qty);
  body.append('company', company);
  body.append('pending', pending);
  body.append('b_ss', tradeType)
  return http.post(`${ApiRoot}dalalbull/api/submit_buy/`, body);
}

export const submitSellOrShortCover = (qty, company, pending, tradeType) => {
  const body = new FormData();
  body.append('quantity', qty);
  body.append('company', company);
  body.append('pending', pending);
  body.append('s_sc', tradeType)
  return http.post(`${ApiRoot}dalalbull/api/submit_sell/`, body);
}
