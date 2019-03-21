import { getLog } from '../services/tacoApi';

export const FETCH_LOG = 'FETCH_LOG';
export const FETCH_LOG_LOADING = 'FETCH_LOG_LOADING';

export const fetchQuote = () => ({
  type: FETCH_LOG,
  loadStart: FETCH_LOG_LOADING,
  payload: getLog()
});
