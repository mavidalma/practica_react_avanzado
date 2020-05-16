import { connect } from 'react-redux';

import App from './App';
import { fetchAds } from '../../store/actions';

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     loadBikes: () => dispatch(fetchBikes()),
//   };
// }

const mapDispatchToProps = {
  loadAds: fetchAds,
};

const connected = connect(null, mapDispatchToProps);
const AppConnected = connected(App);

export default AppConnected;