import React from './react';
import renderer from 'react-test-renderer';
import Stat from './Stat';

describe('Stat', () => {
  it ('matches a snapshot', () => {
    const stat = 'stat';
    const tacoName = 'name';
    const tacoImage = 'image';
    const fetch = jest.fn();
    const loading = false;

    const tree = renderer.create(
      <Stat stat={stat} 
        tacoName={tacoName} 
        tacoImage={tacoImage} 
        fetch={fetch} 
        loading={loading} />
    ).toJSON();
    expect(tree).toMatchSnapShot();
  });
});
