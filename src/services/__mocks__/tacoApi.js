// export const getTacos = () => {
//   return Promise.resolve({
//     totalPages: 4,
//     results
//   });
// };
export const getLog = () => {
  const log = [
    {
      'id': 1,
      'name': 'Taco Mamma',
      'user': 'JJ',
      'rating': 3,
      'tags': 'vegan',
      'price': '2',
      'image': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiPjLqIrZHhAhUTsZ4KHeNsBwYQjRx6BAgBEAU&url=https%3A%2F%2Fveganheaven.org%2Frecipe%2Fvegan-cauliflower-tacos%2F&psig=AOvVaw39SCD4hiIQz3VMyf0_iFNX&ust=1553193026941174'
    },
    {
      'id': 2,
      'name': 'Dirty Taco',
      'user': 'Saron',
      'rating': 4,
      'tags': 'delicious',
      'price': '3',
      'image': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjb-pG4r5HhAhWGsZ4KHYbpClEQjRx6BAgBEAU&url=http%3A%2F%2Fdirtytacoandtequila.com%2Fabout-dirty%2F&psig=AOvVaw2gtXg_JXJmTYzazJsH8qIX&ust=1553193650177183'
    },
    {
      'id': 3,
      'name': 'Mighty Taco',
      'user': 'Uncle Peter',
      'rating': 2,
      'tags': 'organic',
      'price': 2,
      'image': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjG_ZLjr5HhAhXEtp4KHVuNDEkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.californiatortilla.com%2Ftaco-tuesday%2F&psig=AOvVaw3oBtrvjB1gYV4jhJyC45Y4&ust=1553193741965380'
    },
    {
      'id': 4,
      'name': 'Trendy Taco',
      'user': 'Hipster Joe',
      'rating': 4,
      'tags': 'gourmet',
      'price': 2,
      'image': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj809v70Y7hAhWOqZ4KHRZaB7gQjRx6BAgBEAU&url=https%3A%2F%2Fpdx.eater.com%2Fmaps%2Fbest-tacos-portland-map&psig=AOvVaw28HvlFseUFcceudno5PUJL&ust=1553099847046895'
    },
    {
      'id': 5,
      'name': 'Your Mammas Tacos',
      "user": 'Raul',
      'rating': 2,
      'tags': 'tasty',
      'price': 3,
      'image': 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiEl6mZr5HhAhXH_J4KHRQmDlQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.mexicanplease.com%2Fbaja-fish-tacos%2F&psig=AOvVaw3EdhtvfArXKfUvGtIGuzeX&ust=1553193596963710'
    },
    {
      'id': 6,
      'name': 'Tasty Taco',
      'user': 'Sharon',
      'rating': 2,
      'tags': 'yummy',
      'price': 1,
      "image": 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjAl97yrJHhAhUUoZ4KHZ04B2cQjRx6BAgBEAU&url=https%3A%2F%2Fwww.hottaco.com%2Fspecials.html&psig=AOvVaw3Sfg0Bu5XrmiKrVm-cNlWP&ust=1553192002920323'
    },
    {
      'id': 7,
      'name': 'Hot Taco',
      'user': 'PrincessSophie',
      'rating': 4,
      'tags': 'spicy',
      'price': 3,
      'image': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjH2q7Or5HhAhWXqZ4KHcrHBLIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.foodbeast.com%2Fnews%2Fflamin-hot-cheetos-tacos%2F&psig=AOvVaw32XBaSAi17nUqDxfLcc-v5&ust=1553193697177072'
    },
    {
      'id': 8,
      'name': 'Dos Tacos Locos',
      'user': 'Margarita',
      'rating': 4,
      'tags': 'party',
      'price': 2,
      'image': 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjf24r0r5HhAhUSvJ4KHZIEDksQjRx6BAgBEAU&url=https%3A%2F%2Featbychloe.com%2F2016%2F09%2Ftacotuesday%2F&psig=AOvVaw3oBtrvjB1gYV4jhJyC45Y4&ust=1553193741965380'
    },
    {
      'id': 9,
      'name': 'Taco Party',
      'user': 'Jei-Z',
      'rating': 4,
      'tags': 'party',
      'price': 3,
      'image': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiGt4mwrZHhAhVOqZ4KHVQWAagQjRx6BAgBEAU&url=https%3A%2F%2Fwww.ctbites.com%2Fblog%2F2017%2F3%2F8%2Fcater-your-next-event-with-taco-locos-party-truck-sponsored-post&psig=AOvVaw1OEi4mffHozHUqUGXZ2Hg0&ust=1553193109372830'
    },
    {  
      'id': 10,
      'name': 'Taco Town',
      'user': 'Rikki Martin',
      'rating': 2,  
      'tags': 'latin',
      'price': 3,
      'image': 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiGhOaBr5HhAhWMvJ4KHZXgDKAQjRx6BAgBEAU&url=https%3A%2F%2Fhellogiggles.com%2Flifestyle%2Ffood-drink%2Fpizza-taco-town-saturday-night-live-sketch%2F&psig=AOvVaw1mHXTQj8iq--ikEO-J88MZ&ust=1553193547551242'
    },
    
  ];
    
  return Promise.resolve({
    log
  });
};
