import { FETCH_LOG, fetchLog } from './tacos';
import { getLog } from '../services/tacoApi';

jest.mock('../services/tacoApi');

describe('actions test', () => {
  it('fetches a log', () => {
    const action = fetchLog();

    expect(action).toEqual({
      type: FETCH_LOG,
      loadStart: 'FETCH_LOG_LOADING',
      payload: getLog()
    });
  });
});
