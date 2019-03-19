import { getStat } from '../services/tacoApi';

export const FETCH_STAT = 'FETCH_STAT';
export const FETCH_STAT_LOADING = 'FETCH_STAT_LOADING';

export const fetchQuote = () => ({
  type: FETCH_STAT,
  loadStart: FETCH_STAT_LOADING,
  payload: getStat()
});
