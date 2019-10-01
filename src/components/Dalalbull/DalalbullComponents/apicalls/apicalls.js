import * as http from '../../../../config/http';
import { ApiRoot } from '../../../../config/api';

export const getCompanies = () => {
  return http.get(ApiRoot + 'dalalbull/api/ticker/').then(res => res);
};
