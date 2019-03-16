import { FETCH_TACO, fetchTaco } from './tacos';
import { getTaco } from '../services/tacoApi';

jest.mock('../services/tacoApi');

describe('actions test', () => {
  it('fetches a taco', () => {
    const action = fetchTaco();

    expect(action).toEqual({
      type: FETCH_TACO,
      loadStart: 'FETCH_TACO_LOADING',
      payload: getTaco()
    });
  });
});
