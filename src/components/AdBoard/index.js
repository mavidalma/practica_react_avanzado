import { connect } from 'react-redux';

import AdBoard from './AdBoard';

import { fetchAds } from '../../store/actions';
import { getAds } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    ads: getAds(state),
  };
}

const mapDispatchToProps = {
    fetchAds
}

export default connect(mapStateToProps, mapDispatchToProps)(AdBoard);