import { connect } from 'react-redux';

import AdFilter from './AdFilter';

import { fetchAds } from '../../store/actions';
import { adsTopPrice } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    maxPrice: adsTopPrice(state)
  }
}

const mapDispatchToProps = {
    fetchAds
}

export default connect(mapStateToProps, mapDispatchToProps)(AdFilter);