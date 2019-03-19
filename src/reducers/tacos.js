import { FETCH_STAT, FETCH_STAT_LOADING } from '../actions/tacos';

const initialState = {
  stat: '',
  tacoName: '',
  tacoImage: '',
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_STAT:
      return {
        ...state,
        stat: payload[0].stat,
        tacoName: payload[0].taco,
        tacoImage: payload[0].image,
        loading: false
      };
    case FETCH_STAT_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}