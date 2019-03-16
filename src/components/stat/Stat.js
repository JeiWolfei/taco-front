import React from 'react';
import PropTypes from './prop-types';
import Load from './Load';

export default function Stat({ name, taco, price, vibe, tacoImage, fetch, loading }) {
  return (
    <div>
      {loading && <h2>Locating Tacos...</h2>}
      <p>{name}</p>
      <p>{taco}</p>
      <p>{price}</p>
      <p>{vibe}</p>
      <img src={tacoImage} />
      <Load fetch={fetch}/>
    </div>
  );
}

Stat.propTypes = {
  name: PropTypes.string.isRequired,
  taco: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  vibe: PropTypes.string.isRequired,
  tacoImage: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};
