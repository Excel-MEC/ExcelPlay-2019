import { ApiRoot } from '../../../config/api';
import * as http from '../../../config/http';

export const fetchQuestion = () => {
  return http.get(`${ApiRoot}/circuimstance/api/ask`);
};

export const fetchRank = () => {
  return http.get(`${ApiRoot}/auth/leaderboard/rank`);
};

export const submitCircuimstanceAnswer = ans => {
  return http.get(`${ApiRoot}/circuimstance/api/answer?answer=${ans}`);
};

export const fetchCircuimstanceLeaderboard = () => {
  return http.get(`${ApiRoot}/auth/leaderboard/cranklist`);
};

export const getStaticAsset = filename => {
  return `${ApiRoot}${filename}`;
};
