import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Register from '../Register/Register';
import Login from '../Login';
import AdBoard from '../AdBoard';
import AdDetail from '../adDetail/adDetail';
import CreateAd from '../CreateAd';
import NavBar from '../navBar/navBar';
import ErrorLogin from '../ErrorLogin/ErrorLogin'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  componentDidMount() {
   if(this.props.isLogged) {
    this.loadTags();
    };
  }

  loadAds() {
    this.props.loadAds();
  }
  loadTags() {
    this.props.loadTags()
  }

  render () {
    return (
    <main>
        <Route path="/" component={NavBar}/>
        <Switch>
          <PrivateRoute exact path="/anuncios" component={AdBoard} />
          <PrivateRoute path={`/anuncios/:id`} component={AdDetail} />
          <PrivateRoute path="/create" component={CreateAd} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/errorlogin" component={ErrorLogin} />
          <Redirect to="/login" />
        </Switch>
    </main>
  );
}
}

export default App;
