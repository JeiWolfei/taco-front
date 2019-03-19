export const getStat = () => {
  const stat = [
    {
      'stat': 'Amazing Taco Tuesdays',
      'taco': 'Trendy Taco',
      'image': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj809v70Y7hAhWOqZ4KHRZaB7gQjRx6BAgBEAU&url=https%3A%2F%2Fpdx.eater.com%2Fmaps%2Fbest-tacos-portland-map&psig=AOvVaw28HvlFseUFcceudno5PUJL&ust=1553099847046895',
      'tacoDirection': 'Right'
    }
  ];
  return Promise.resolve({
    stat
  });
};
