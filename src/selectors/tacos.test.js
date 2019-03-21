import { getLog, getTacoName, getTacoImage, isLoading } from './taco';

describe('selectors test', () => {
  it('can get the log', () => {
    const state = {
      taco:
        {
          'log': 'Amazing Taco Tuesdays',
          'tacoName': 'Taco Hero',
          'tacoImage': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj809v70Y7hAhWOqZ4KHRZaB7gQjRx6BAgBEAU&url=https%3A%2F%2Fpdx.eater.com%2Fmaps%2Fbest-tacos-portland-map&psig=AOvVaw28HvlFseUFcceudno5PUJL&ust=1553099847046895',
          'loading': 'false'
        }
    };

    const fetchedLog = getLog(state);
    expect(fetchedLog).toEqual('Amazing Taco Tuesdays');
  });

  it('can get a taco name', () => {
    const state = {
      taco: 
        {
          'log': 'Amazing Taco Tuesdays',
          'tacoName': 'Taco Hero',
          'tacoImage': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj809v70Y7hAhWOqZ4KHRZaB7gQjRx6BAgBEAU&url=https%3A%2F%2Fpdx.eater.com%2Fmaps%2Fbest-tacos-portland-map&psig=AOvVaw28HvlFseUFcceudno5PUJL&ust=1553099847046895',
          'loading': 'false'
        }
    };

    const fetchedTacoName = getTacoName(state);
    expect(fetchedTacoName).toEqual('Taco Hero');
  });

  it('can get a taco image', () => {
    const state = {
      taco: 
        {
          'log': 'Amazing Taco Tuesdays',
          'tacoName': 'Taco Hero',
          'tacoImage': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj809v70Y7hAhWOqZ4KHRZaB7gQjRx6BAgBEAU&url=https%3A%2F%2Fpdx.eater.com%2Fmaps%2Fbest-tacos-portland-map&psig=AOvVaw28HvlFseUFcceudno5PUJL&ust=1553099847046895',
          'loading': 'false'
        }
    };

    const fetchedTacoImage = getTacoImage(state);
    expect(fetchedTacoImage).toEqual('https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj809v70Y7hAhWOqZ4KHRZaB7gQjRx6BAgBEAU&url=https%3A%2F%2Fpdx.eater.com%2Fmaps%2Fbest-tacos-portland-map&psig=AOvVaw28HvlFseUFcceudno5PUJL&ust=1553099847046895');
  });

  it('can call the getTacoImage', () => {
    const state = {
      taco:
        {
          'log': 'Amazing Taco Tuesdays',
          'tacoName': 'Taco Hero',
          'tacoImage': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj809v70Y7hAhWOqZ4KHRZaB7gQjRx6BAgBEAU&url=https%3A%2F%2Fpdx.eater.com%2Fmaps%2Fbest-tacos-portland-map&psig=AOvVaw28HvlFseUFcceudno5PUJL&ust=1553099847046895',
          'loading': 'false'
        }
    };
    
    const fetchedLoading = isLoading(state);
    expect(fetchedLoading).toEqual('false');
  });
});
