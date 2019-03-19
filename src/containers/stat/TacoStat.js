import { connect } from 'react-redux';
import { fetchStat } from '../../actions/tacos';
import {  getTacoName, getTacoImage, getStat, isLoading } from '../../selectors/tacos';
import Stat from '../../components/stat/Stat';
import { withFetch } from '../../components/stat/withFetch';

const mapStateToProps = state => ({
  stat: getStat(state),
  tacoName: getTacoName(state),
  tacoImage: getTacoImage(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchStat());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Stat));
