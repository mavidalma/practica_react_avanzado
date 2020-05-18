import { connect } from 'react-redux';

import App from './App';
import { fetchAds, fetchTags } from '../../store/actions';

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     loadBikes: () => dispatch(fetchBikes()),
//   };
// }

const mapDispatchToProps = {
  loadAds: fetchAds,
  loadTags: fetchTags,
};

const connected = connect(null, mapDispatchToProps);
const AppConnected = connected(App);

export default AppConnected;