import * as http from '../../../../config/http';
import { ApiRoot } from '../../../../config/api';

export const getCompanies = () => {
  return http.get(ApiRoot + 'dalalbull/api/ticker/').then(res => res);
};

export const getCompanyDetails = company => {
  const body = new FormData();
  body.append('company', company);
  return http.post(ApiRoot + 'dalalbull/api/companydetails/', body)
}
