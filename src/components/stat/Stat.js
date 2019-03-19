import React from 'react';
import PropTypes from './prop-types';
import Load from './Load';

export default function Stat({ stat, tacoName, tacoImage, fetch, loading }) {
  return (
    <div>
      {loading && <h2>LOADING...</h2>}
      <p>{stat}</p>
      <p>{tacoName}</p>
      <img src={tacoImage} />
      <Load fetch={fetch}/>
    </div>
  );
}

Stat.propTypes = {
  stat: PropTypes.string.isRequired,
  tacoName: PropTypes.string.isRequired,
  tacoImage: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};
