import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import Register from './Register/Register';
import Login from './Login/Login';
import AdBoard from './AdBoard/AdBoard';
import adDetail from './adDetail/adDetail';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/anuncios" component = {AdBoard} />
      <Route path={`/anuncios/:id`} component = {adDetail} />
      <Route path="/login" component = {Login} />
      <Route path="/register" component = {Register} />
      <Redirect to="/login" />
      </Switch>
      
    </Router>
  );
}

export default App;
