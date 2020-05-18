import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Register from '../Register/Register';
import Login from '../Login/Login';
import AdBoard from '../AdBoard';
import adDetail from '../adDetail/adDetail';
import CreateAd from '../CreateAd/CreateAd';
import NavBar from '../navBar/navBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  componentDidMount() {
    this.loadAds();
    this.loadTags();
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
          <Route exact path="/anuncios" component={AdBoard} />
          <Route path={`/anuncios/:id`} component={adDetail} />
          <Route path="/create" component={CreateAd} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/login" />
        </Switch>
    </main>
  );
}
}

export default App;
