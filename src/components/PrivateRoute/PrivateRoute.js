import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { isLogged } from '../../store/selectors';
import { getUserFromStorage } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';


 const PrivateRoute = ({...props}) => {

  const dispatch = useDispatch();
  dispatch(getUserFromStorage());

  const user = useSelector(state => isLogged(state));
    
  return user ? <Route {...props} /> : <Redirect to="/errorlogin" />;
};

export default PrivateRoute;