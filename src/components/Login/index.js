import { connect } from 'react-redux';

import Login from './Login';
import { userLogin } from '../../store/actions';
import { isLogged } from "../../store/selectors";

 function mapStateToProps(state, ownProps) {
   return {
     isLogged: isLogged(state),
   };
 }

const mapDispatchToProps = {
userLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);