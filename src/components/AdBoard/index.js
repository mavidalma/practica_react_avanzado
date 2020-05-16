import { connect } from 'react-redux';

import AdBoard from './AdBoard';

import { fetchAds } from '../../store/actions';
import { getAds } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    ads: getAds(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchAds
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdBoard);