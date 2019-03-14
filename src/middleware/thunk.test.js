import { createStore, applyMiddleware } from 'redux';
import { thunk } from './thunk';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('thunk middleware', () => {
  let reducer = null;
  let store = null;

  beforeEach(() => {
    reducer = jest.fn();
    store = createStore(
      reducer,
      applyMiddleware(
        thunk
      )
    );
  });

  it('behaves normally when action is an object', () => {
    const action = {
      // what is my action?
      type: 'MY_ACTION',
    };
    
    const next = jest.fn();

    thunk(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });
  }
})