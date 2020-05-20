import { connect } from 'react-redux';

import App from './App';
import { fetchAds, fetchTags, userLogin } from '../../store/actions';
import { isLogged } from '../../store/selectors';

 function mapStateToProps(state, ownProps) {
   return {
     isLogged: isLogged(state),
   };
 }

const mapDispatchToProps = {
  loadAds: fetchAds,
  loadTags: fetchTags,
  userLogin
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const AppConnected = connected(App);

export default AppConnected;