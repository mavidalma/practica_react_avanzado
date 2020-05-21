import { connect } from 'react-redux';

import AdFilter from './AdFilter';

import { fetchAds } from '../../store/actions';
import { getAds, adsTopPrice } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    ads: getAds(state),
   // maxPrice: adsTopPrice(state.ads)
  }
}

const mapDispatchToProps = {
    fetchAds
}

export default connect(mapStateToProps, mapDispatchToProps)(AdFilter);