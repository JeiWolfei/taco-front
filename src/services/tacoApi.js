export const getLog = () => {
  return fetch('/')
    .then(res => res.json());
};
