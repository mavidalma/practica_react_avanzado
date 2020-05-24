import { connect } from 'react-redux';

import CreateAd from './CreateAd';

import { getUserFromStorage } from '../../store/actions';
import { getTags, isLogged } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    tags: getTags(state),
    user: isLogged(state) 
  }
}

const mapDispatchToProps = {
    getUserFromStorage

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd);