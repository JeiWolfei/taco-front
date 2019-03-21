export const getLog = () => {
  // hook up api
  return fetch('/')
    .then(res => res.json());
};
