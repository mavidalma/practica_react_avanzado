import { connect } from 'react-redux';

import AdBoard from './AdBoard';

import { fetchAds, fetchTags, getUserFromStorage } from '../../store/actions';
import { getAds, getTags, isLogged, isFetching } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    ads: getAds(state),
    tags: getTags(state),
    user: isLogged(state),
    loading: isFetching(state),
  }
}

const mapDispatchToProps = {
    fetchAds,
    fetchTags,
    getUserFromStorage
}

export default connect(mapStateToProps, mapDispatchToProps)(AdBoard);