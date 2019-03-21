import reducer from './index';

describe('reducer', () => {
  it('handles fetch log', () => {
    const state = {
      tacos: {}
    };
    const fetchedLog = reducer(state, {
      type: 'FETCH_LOG',
      payload: [
        {
          'log': 'Amazing Taco Tuesdays',
          'taco': 'Taco Hero',
          'image': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj809v70Y7hAhWOqZ4KHRZaB7gQjRx6BAgBEAU&url=https%3A%2F%2Fpdx.eater.com%2Fmaps%2Fbest-tacos-portland-map&psig=AOvVaw28HvlFseUFcceudno5PUJL&ust=1553099847046895', 
        }
      ]
    });
    expect(fetchedLog).toEqual({
      tacos: {
        'log': 'Amazing Taco Tuesdays',
        'tacoName': 'Taco Hero',
        'tacoImage': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj809v70Y7hAhWOqZ4KHRZaB7gQjRx6BAgBEAU&url=https%3A%2F%2Fpdx.eater.com%2Fmaps%2Fbest-tacos-portland-map&psig=AOvVaw28HvlFseUFcceudno5PUJL&ust=1553099847046895',
        'loading': 'false',
      }
    });
  });
});
