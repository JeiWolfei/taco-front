import React from './react';
import renderer from 'react-test-renderer';
import Log from './Log';

describe('Log', () => {
  it ('matches a snapshot', () => {
    const log = 'log';

    const tacoName = 'name';
    const tacoImage = 'image';
    const fetch = jest.fn();
    const loading = false;

    const tree = renderer.create(
      <Log log={log} 
        tacoName={tacoName} 
        tacoImage={tacoImage} 
        fetch={fetch} 
        loading={loading} />
    ).toJSON();
    expect(tree).toMatchSnapShot();
  });
});
