import { connect } from 'react-redux';
import { fetchLog } from '../../actions/tacos';
import {  getTacoName, getTacoImage, getLog, isLoading } from '../../selectors/tacos';
import Log from '../../components/log/Log';
import { withFetch } from '../../components/log/withFetch';

const mapStateToProps = state => ({
  stat: getLog(state),
  tacoName: getTacoName(state),
  tacoImage: getTacoImage(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchLog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Log));
