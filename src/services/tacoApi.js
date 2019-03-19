export const getStat = () => {
  // hook up api
  return fetch('tacoApi')
    .then(res => res.json());
};
