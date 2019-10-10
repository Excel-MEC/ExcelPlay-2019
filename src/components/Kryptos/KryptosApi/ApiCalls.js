import { ApiRoot } from '../../../config/api';
import * as http from '../../../config/http';

export const fetchQuestion = () => {
  return http.get(`${ApiRoot}/kryptos/api/ask`);
};

export const fetchRank = () => {
  return http.get(`${ApiRoot}/auth/leaderboard/rank`);
};

export const submitKryptosAnswer = ans => {
  return http.get(`${ApiRoot}/kryptos/api/answer?answer=${ans}`);
};

export const fetchKryptosLeaderboard = () => {
  return http.get(`${ApiRoot}/auth/leaderboard/kranklist`);
};

export const getStaticAsset = filename => {
  return `${ApiRoot}${filename}`;
};
