import { FETCH_STAT, fetchStat } from './tacos';
import { getStat } from '../services/tacoApi';

jest.mock('../services/tacoApi');

describe('actions test', () => {
  it('fetches a stat', () => {
    const action = fetchStat();

    expect(action).toEqual({
      type: FETCH_STAT,
      loadStart: 'FETCH_STAT_LOADING',
      payload: getStat()
    });
  });
});
