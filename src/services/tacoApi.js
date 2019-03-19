export const getStat = () => {
  // hook up api
  return fetch('tacoApi')
    .then(res => res.json());
};

// does this go here?
const results = [
  {
    'id': 1,
    'name': 'Taco Mamma',
    'rating': 3,
  },
  {
    'id': 2,
    'name': 'Tiny Taco',
    'rating': 2,
  },
  {
    'id': 3,
    'name': 'Mighty Taco',
    'rating': 2,
  },
  {
    'id': 4,
    'name': 'Trendy Taco',
    'rating': 2,
  },
  {
    'id': 5,
    'name': 'Taco Tango',
    'rating': 2,
  },
  {
    'id': 6,
    'name': 'Tasty Taco',
    'rating': 2,
  },
  {
    'id': 7,
    'name': 'Hot Taco',
    'rating': 2,
  },
  {
    'id': 8,
    'name': 'Dos Tacos Locos',
    'rating': 2,
  },
  {
    'id': 9,
    'name': 'Taco Party',
    'rating': 2,
  },
  {
    'id': 10,
    'name': 'Taco Town',
    'rating': 2,
  },
  
];

export const getTacos = () => {
  return Promise.resolve({
    totalPages: 4,
    results
  });
};

