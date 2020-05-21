import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { isLogged } from '../../store/selectors';
import { useSelector } from 'react-redux';


 const PrivateRoute = ({...props}) => {

    const user = useSelector(state => isLogged(state));
    
   return user ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;