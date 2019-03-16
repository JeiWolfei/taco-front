import { getTaco } from '../services/tacoApi';
// need help connecting to localhost instead of API?

export const FETCH_TACO = 'FETCH_TACO';
export const FETCH_TACO_LOADING = 'FETCH_TACO_LOADING';

export const fetchTaco = () => ({
  type: FETCH_TACO,
  loadStart: FETCH_TACO_LOADING,
  payload: getTaco()
});
