import { connect } from 'react-redux';

import CreateAd from './CreateAd';

import { fetchTags } from '../../store/actions';
import { getTags } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    tags: getTags(state),  }
}

const mapDispatchToProps = {
    fetchTags

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd);